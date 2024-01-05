// views/ApplyingAThemeView.tsx
import React from 'react';
import {Typography} from '@mui/material';
import NextPreviousButtons from "@/views/NextPreviousButtons";

const ApplyingAThemeView = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                ApplyingAThemeView
            </Typography>
            <Typography paragraph>
                This is the ApplyingAThemeView view.
            </Typography>
            <NextPreviousButtons
                previous={{
                    text: "Understanding Material UI's Design Principles",
                    url: "understanding-material-ui's-design-principles"
                }}
                next={{text: "Buttons & Icons", url: "/buttons-&-icons"}}
            />
        </div>
    );
};

export default ApplyingAThemeView;
