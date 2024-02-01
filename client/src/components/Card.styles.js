import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const CardRoot = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "85vh",
  display: "flex",
  flexDirection: "column",
}));

export const CardContainer = styled(Grid)(({ theme }) => ({
  width: "100%",
  margin: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
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
  flex: "0 0 auto",
}));

export const ContentContainer = styled("div")(({ theme }) => ({
  padding: 16,
  flex: 1,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
}));

export const ImageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "0 auto",
  maxWidth: "800px",
  maxHeight: "100%",
}));

export const TextContainer = styled("div")(({ theme }) => ({
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "8px",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "4px",
  },

  "&::-webkit-scrollbar-track": {
    backgroundColor: "#FFF8DC",
    borderRadius: "4px",
  },
}));
