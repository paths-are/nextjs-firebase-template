import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@/src/Link";
import ProTip from "@/src/ProTip";
import Copyright from "@/src/Copyright";

import LoginButton from "@/src/components/LoginButton";
import LogoutButton from "@/src/components/LogoutButton";
import { useUser } from "@/src/hooks/auth";

const Home: NextPage = () => {
  const user: any = useUser();
  return (
    <Container maxWidth="lg">
      {!user ? (
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoginButton />
          <Typography variant="h4" component="h1" gutterBottom>
            MUI v5 + Next.js with TypeScript example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      ) : (
        <LogoutButton />
      )}
    </Container>
  );
};

export default Home;
