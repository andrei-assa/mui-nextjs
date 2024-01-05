// views/SetupAndInstallationView.tsx
import React from 'react';
import {Typography} from '@mui/material';
import CodeSnippet from "@/views/CodeSnippet";
import TitledCard from "@/views/TitledCard";
import NextPreviousButtons from "@/views/NextPreviousButtons";

const commands = {
    install: 'npm install @mui/material @emotion/styled @emotion/react'
}

const SetupAndInstallationView = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                MUI Installation Guide
            </Typography>
            <TitledCard title={'Setup and Installation'}>
                <Typography paragraph>
                    To install MUI together with emotion packages, you need to run the following command in the
                    terminal:
                </Typography>
                <CodeSnippet code={commands.install} language={'language-bash'} open/>
            </TitledCard>

            <NextPreviousButtons
                previous={{
                    text: "Introduction to Material UI",
                    url: "/introduction-to-material-ui"
                }}
                next={{
                    text: "Understanding Material UI's Design Principles",
                    url: "understanding-material-ui's-design-principles"
                }}
            />
        </div>
    );
};

export default SetupAndInstallationView;