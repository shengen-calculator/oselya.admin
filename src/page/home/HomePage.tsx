import * as React from 'react';
import MainContent from "../../components/MainContent";
import Latest from "../../components/Latest";

export default function HomePage() {
    return (
        <React.Fragment>
            <MainContent />
            <Latest />
        </React.Fragment>
    );
}
