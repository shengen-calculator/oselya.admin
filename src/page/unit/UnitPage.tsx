import * as React from 'react';
import Typography from "@mui/material/Typography";
import AppAppBar from "../../components/AppAppBar";
import Container from "@mui/material/Container";
import Footer from "../../components/Footer";

export default function UnitPage() {
    return (
        <React.Fragment>
            <AppAppBar/>
            <Container
                maxWidth="lg"
                component="main"
                sx={{display: 'flex', flexDirection: 'column', my: 16, gap: 4, pt: 5}}
            >
                <Typography variant="h1" gutterBottom>
                    Unit Page
                </Typography>
                <Typography>Stay in the loop with the latest about our products</Typography>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}
