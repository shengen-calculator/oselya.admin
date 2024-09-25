import * as React from 'react';
import MainContent from "../../components/MainContent";
import Latest from "../../components/Latest";
import AppAppBar from "../../components/AppAppBar";
import Container from "@mui/material/Container";
import Footer from "../../components/Footer";

export default function HomePage() {
    return (
        <React.Fragment>
            <AppAppBar/>
            <Container
                maxWidth="lg"
                component="main"
                sx={{display: 'flex', flexDirection: 'column', my: 16, gap: 4, pt: 5}}
            >
                <MainContent/>
                <Latest/>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}
