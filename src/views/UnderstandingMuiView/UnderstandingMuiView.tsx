// views/UnderstandingMuiView.tsx
import React from 'react';
import {Typography} from '@mui/material';
import NextPreviousButtons from "@/views/NextPreviousButtons";

const UnderstandingMuiView = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                UnderstandingMuiView
            </Typography>
            <Typography paragraph>
                This is the UnderstandingMuiView view.
            </Typography>
            <NextPreviousButtons
                previous={{
                    text: "Setup and Installation",
                    url: "/setup-and-installation"
                }}
                next={{text: "Applying a Theme with Material UI", url: "/applying-a-theme-with-material-ui"}}
            />
        </div>
    );
};

export default UnderstandingMuiView;
