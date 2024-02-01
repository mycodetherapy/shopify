import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const CardRoot = styled(Box)(({ theme }) => ({
  width: "100%",
}));

export const CardContainer = styled(Grid)(({ theme }) => ({
  width: "100%",
  margin: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
  borderRadius: 10,
  backgroundColor: "#FFF8DC",
  boxShadow: "0 5px 10px 0 rgba(0, 0, 0, 0.25)",

  [theme.breakpoints.up("sm")]: {
    maxWidth: "100%",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "100%",
  },
}));

export const CardName = styled("div")(({ theme }) => ({
  textAlign: "center",
  padding: 16,
  fontSize: 20,
  fontWeight: 700,
  color: "#8B0000",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const ContentContainer = styled("div")(({ theme }) => ({
  padding: 16,
}));

export const ImageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "0 auto",
  maxWidth: "800px",
  maxWeight: "800px",
}));

export const TextContainer = styled("div")(({ theme }) => ({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  WebkitLineClamp: 12,
}));
