import express from "express";
import {
  connect,
  connection,
  Schema,
  Document,
  Model,
  ConnectOptions,
} from "mongoose";
import axios from "axios";
import cors from "cors";
import sanitizeHtml from "sanitize-html";

const app = express();
const port = process.env.PORT || 3001;
app.use(cors());

connect("mongodb://localhost:27017/shopify_data", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

const db = connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

interface IProduct extends Document {
  shopifyId: string;
  bodyHtml: string;
  images: string[];
}

const productSchema = new Schema<IProduct>({
  shopifyId: { type: String, required: true, unique: true },
  bodyHtml: String,
  images: [String],
});

const Product: Model<IProduct> = connection.model("Product", productSchema);

const graphqlQuery = `
{
  products(first: 10) {
    edges {
      node {
        id
        bodyHtml
        images(first: 1) {
          edges {
            node {
              src
            }
          }
        }
      }
    }
  }
}
`;

const shopifyApiKey = "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";

app.get("/sync-and-get-shopify-products", async (req, res) => {
  try {
    const shopifyResponse = await axios.post(
      "https://cpb-new-developer.myshopify.com/admin/api/2021-10/graphql.json",
      {
        query: graphqlQuery,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": shopifyApiKey,
        },
      }
    );

    const products = shopifyResponse.data.data.products.edges;

    for (const product of products) {
      const productData = {
        shopifyId: product.node.id,
        bodyHtml: sanitizeHtml(product.node.bodyHtml),
        images: product.node.images.edges.map((edge: any) => edge.node.src),
      };

      await Product.updateOne(
        { shopifyId: productData.shopifyId },
        productData,
        { upsert: true }
      );
    }

    const updatedProducts = await Product.find();

    res.json({
      success: true,
      data: updatedProducts,
      message:
        "Data successfully synchronized with Shopify and retrieved from the database",
    });
  } catch (error) {
    console.error("Error when synchronizing data with Shopify:", error);
    res.status(500).json({ success: false, error: error });
  }
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
