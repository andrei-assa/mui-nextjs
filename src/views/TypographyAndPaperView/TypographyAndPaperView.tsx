import React, {useState} from 'react';
import {Typography, Paper, Box, CardMedia} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import TitledCard from "@/views/TitledCard";
import CodeSnippet from "@/views/CodeSnippet";
import image from "../../assets/images/iguana.png"
import Image from "next/image"

const codeSnippets = {
    typographyExamples: `
    // Typography Examples
    import { Typography } from '@mui/material';

    // Heading variants
    <Typography variant="h1">Heading 1</Typography>
    <Typography variant="h2">Heading 2</Typography>
    <Typography variant="h3">Heading 3</Typography>
    <Typography variant="h4">Heading 4</Typography>
    <Typography variant="h5">Heading 5</Typography>
    <Typography variant="h6">Heading 6</Typography>

    // Subtitle variants
    <Typography variant="subtitle1">Subtitle 1</Typography>
    <Typography variant="subtitle2">Subtitle 2</Typography>

    // Body Text variants
    <Typography variant="body1">
      Body Text 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Typography>
    <Typography variant="body2">
      Body Text 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Typography>

    // Button, Caption, and Overline variants
    <Typography variant="button" display="block">Button Text</Typography>
    <Typography variant="caption" display="block">Caption Text</Typography>
    <Typography variant="overline" display="block">Overline Text</Typography>
  `,
    paperComponentExample: `
    // Paper Component Example
    import { Paper, Typography } from '@mui/material';

    <Paper elevation={3} sx={{ padding: '16px' }}>
      <Typography variant="h6">Paper Component Example</Typography>
      <Typography paragraph>
        This is an example of a Material-UI Paper component. It can be used to create cards or
        containers with elevation.
      </Typography>
    </Paper>
  `,
    dynamicStylingPaper: `
    // Dynamic Styling of Paper Component
    import { Paper, Typography } from '@mui/material';
    import { useState } from 'react';

    const DynamicPaper = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <Paper
            component={'div'}
            variant={'elevation'}
            elevation={isHovered ? 6 : 3}
            sx={{
                padding: '16px',
                backgroundColor: isHovered ? 'lightblue' : 'white',
                outline: isFocused ? '2px solid blue' : 'none',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleFocus}
            onBlur={handleBlur}
        >
            <Typography variant="h6">Dynamic Styling of Paper</Typography>
            <Typography paragraph>
                Hover over, focus, and disable this Paper component to see dynamic styling changes.
            </Typography>
        </Paper>
    );
};`,
    customTypographyTheme: `
import {createTheme, ThemeProvider} from "@mui/material/styles"
import {Typography} from "@mui/material";

const theme = createTheme({
    typography: {
        h1: {
            fontSize: '3rem',
            fontWeight: 500,
            color: 'navy'
        }
    }
});

const CustomTypographyTheme = () => (
    <ThemeProvider theme={theme}>
        <Typography variant="h1">Custom Styled Heading 1</Typography>
    </ThemeProvider>
);
    `
};

const DynamicPaper = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <Paper
            component={'div'}
            variant={'elevation'}
            elevation={isHovered ? 6 : 3}
            sx={{
                padding: '16px',
                backgroundColor: isHovered ? 'lightblue' : 'white',
                outline: isFocused ? '2px solid blue' : 'none',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleFocus}
            onBlur={handleBlur}
        >
            <Typography variant="h6">Dynamic Styling of Paper</Typography>
            <Typography paragraph>
                Hover over, focus, and disable this Paper component to see dynamic styling changes.
            </Typography>
        </Paper>
    );
};


const theme = createTheme({
    typography: {
        h1: {
            fontSize: '3rem',
            fontWeight: 500,
            color: 'navy',
        },
        // other custom styles
    },
});

const CustomTypographyTheme = () => (
    <ThemeProvider theme={theme}>
        <Typography variant="h1">Custom Styled Heading 1</Typography>
    </ThemeProvider>
);


const TypographyAndPaperView = () => {
    return (
        <Box sx={{marginBottom: '2em'}}>
            <Typography variant="h4" gutterBottom>
                Typography and Paper
            </Typography>
            <Typography paragraph>
                Explore the usage of Typography and Paper components in Material-UI.
            </Typography>

            <TitledCard title={'Typography Examples'}>
                <Typography variant="h1" gutterBottom>
                    Heading 1
                </Typography>
                <Typography variant="h2" gutterBottom>
                    Heading 2
                </Typography>
                <Typography variant="h3" gutterBottom>
                    Heading 3
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Heading 4
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Heading 5
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Heading 6
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Subtitle 1
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Subtitle 2
                </Typography>
                <Typography variant="body1" paragraph>
                    Body Text 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Typography variant="body2" paragraph>
                    Body Text 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    Button Text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    Caption Text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    Overline Text
                </Typography>
                <CodeSnippet code={codeSnippets.typographyExamples}/>
            </TitledCard>

            <TitledCard title={'Custom Typography Theme'}>
                <CustomTypographyTheme/>
                <CodeSnippet code={codeSnippets.customTypographyTheme}/>
            </TitledCard>

            <TitledCard title={'Paper Component'}>
                <Paper elevation={3} sx={{padding: '16px'}}>
                    <Typography variant="h6">Paper Component Example</Typography>
                    <Typography paragraph>
                        This is an example of a Material-UI Paper component. It can be used to create cards or
                        containers with elevation.
                    </Typography>
                </Paper>
                <CodeSnippet code={codeSnippets.paperComponentExample}/>
            </TitledCard>

            <TitledCard title={'Dynamic Paper Component'}>
                <DynamicPaper/>
                <CodeSnippet code={codeSnippets.dynamicStylingPaper}/>
            </TitledCard>

        </Box>
    );
};

export default TypographyAndPaperView;
