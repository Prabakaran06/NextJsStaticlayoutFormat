import { heroContent } from "@/theme/content";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

const { title, subtitle, bg } = heroContent;
export const Hero: FC = () => {
  return (
    <>
      <Box
        height={"100vh"}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Container>
          <Grid container direction={"row"}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" fontWeight={600}>
                {title}
              </Typography>
              <Typography variant="h6" lineHeight={1.5} sx={{ py: 4 }}>
                {subtitle}
              </Typography>
              <Button variant="contained" sx={{ borderRadius: 20 }}>
                enquiry
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={bg} height={300} width={300} alt="aa" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
