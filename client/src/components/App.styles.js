import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export const AppRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  minHeight: "100vh",
  backgroundColor: "#DCDCDC",
}));

export const AppContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: theme.spacing(2),
  margin: "0 auto",
  "& .MuiGrid-root": {
    padding: 0,
  },
}));

export const AppHeader = styled("h1")(({ theme }) => ({
  margin: "24px auto 10px",
  color: "#8B0000",
}));
