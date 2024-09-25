import * as React from 'react';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "../../components/Footer";
import UnitBar from "../../components/UnitBar";

export default function UnitPage() {
    return (
        <React.Fragment>
            <UnitBar/>
            <Container
                maxWidth="lg"
                component="main"
                sx={{display: 'flex', flexDirection: 'column', my: 16, gap: 4, pt: 5}}
            >
                <Typography variant="h1" gutterBottom>
                    Об'єкти
                </Typography>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}
