import { useState } from "react";
import type { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import { MainAppBar } from "./main-navbar";


interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  //const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <MainAppBar />
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      {children}
      <Box sx={{ flexGrow: 1 }} />
      {/* <Box><Footer /></Box> */}
    </Box>
  );
};



export default MainLayout; 
