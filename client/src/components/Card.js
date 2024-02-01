import React, { useEffect } from "react";
import {
  CardName,
  CardRoot,
  ContentContainer,
  ImageContainer,
  TextContainer,
} from "./Card.styles";

export const Card = ({ key, product }) => {
  useEffect(() => {
    product.images.forEach((image, index) =>
      drawImageOnCanvas(image, `canvas-${product.shopifyId}-${index}`)
    );
  }, [product]);

  const drawImageOnCanvas = (imageSrc, canvasId) => {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");

    if (!canvas) {
      console.error(`Canvas element with id ${canvasId} not found.`);
      return;
    }

    const img = new Image();
    img.src = imageSrc;

    const draw = () => {
      const maxWidth = 400;
      const parentElement = canvas.parentElement;

      if (parentElement) {
        const parentWidth = parentElement.clientWidth;
        const aspectRatio = img.width / img.height;

        canvas.width = Math.min(maxWidth, parentWidth);
        canvas.height = canvas.width / aspectRatio;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    img.onload = draw;
    window.addEventListener("resize", draw);

    return () => {
      window.removeEventListener("resize", draw);
    };
  };

  return (
    <CardRoot>
      <ContentContainer key={key}>
        <CardName>{product.shopifyId}</CardName>
        <ImageContainer>
          {product.images.map((src, index) => (
            <canvas key={index} id={`canvas-${product.shopifyId}-${index}`} />
          ))}
        </ImageContainer>
        <TextContainer dangerouslySetInnerHTML={{ __html: product.bodyHtml }} />
      </ContentContainer>
    </CardRoot>
  );
};
