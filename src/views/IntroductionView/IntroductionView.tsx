// views/IntroductionView.tsx
import React from 'react';
import {Typography, Box} from '@mui/material';
import NextPreviousButtons from "@/views/NextPreviousButtons";

export default function IntroductionView() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Introduction to Material UI
            </Typography>
            <Typography paragraph>
                Material-UI is a popular React UI framework that implements Google's Material Design, offering a wide
                range of reusable React components that adhere to Material Design principles.
            </Typography>
            <Typography paragraph>
                This project serves as an interactive guide to explore and understand the capabilities of Material UI.
                Whether you are a beginner or an experienced developer, you can benefit from the hands-on examples and
                code snippets provided.
            </Typography>
            <Typography paragraph>
                Navigate through various sections to learn about component usage, theming, layouts, and more. Each
                section showcases a set of components with practical examples, highlighting the best practices for using
                Material UI in your own projects.
            </Typography>
            <Typography paragraph>
                The goal is not just to learn how each component works but also to understand how to combine them
                effectively to create visually appealing and functionally robust user interfaces. By the end of this
                workshop, you'll have a solid foundation to build your own React applications using Material UI.
            </Typography>
            <NextPreviousButtons
                next={
                    {
                        text: 'Setup and Installation',
                        url: '/setup-and-installation'
                    }
                }/>
        </Box>
    );
};