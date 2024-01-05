// views/ApplyingAThemeView.tsx
import React from 'react';
import {Typography, Box, Paper, Button} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import NextPreviousButtons from "@/views/NextPreviousButtons";
import CodeSnippet from "@/views/CodeSnippet";
import TitledCard from '../TitledCard';

const codeSnippets = {
    themeConfiguration: `
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
            main: '#19857b'
        },
        secondary: {
            main: '#556cd6'
    },
  },
  typography: {
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1.0rem',
    },
  },
});

const CustomButton = () => (
<ThemeProvider theme={customTheme}>
    <Button variant="contained" color="primary">
        Primary Button
    </Button>
</ThemeProvider>
)

  `,
    themeProvider: `
import { ThemeProvider } from '@mui/material/styles';

<ThemeProvider theme={customTheme}>
  {/* Your component tree */}
</ThemeProvider>
  `,
    themedComponent: `
import { Typography, Paper, Button } from '@mui/material';

<Paper sx={{ padding: '16px' }}>
  <Typography variant="body1">
    This box uses the primary color defined in our custom theme.
  </Typography>
  <Button variant="contained" color="primary">
    Primary Button
  </Button>
</Paper>
  `
};

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#19857b',
        },
        secondary: {
            main: '#556cd6',
        },
    },
    typography: {
        h4: {
            fontSize: '1.5rem',
            fontWeight: 700,
        },
        body1: {
            fontSize: '1.0rem',
        },
    },
});


const ApplyingAThemeView = () => {
    return (
        <>

            <Box sx={{margin: '2em'}}>
                <TitledCard title={'Customizing Theme'}>
                    <Typography variant="h4" gutterBottom>
                        Applying a Custom Theme
                    </Typography>
                    <Typography paragraph>
                        Explore how to apply and customize themes in Material-UI.
                    </Typography>
                    <Paper sx={{padding: '16px', marginBottom: '1em'}}>
                        <Typography variant="body1" paragraph>
                            This box uses the primary color defined in our custom theme.
                        </Typography>
                        <ThemeProvider theme={customTheme}>
                            <Button variant="contained" color="primary">
                                Primary Button
                            </Button>
                        </ThemeProvider>
                    </Paper>
                    <CodeSnippet code={codeSnippets.themeConfiguration}/>
                </TitledCard>
                <NextPreviousButtons
                    previous={{
                        text: "Understanding Material UI's Design Principles",
                        url: "/understanding-material-ui-design-principles"
                    }}
                    next={{text: "Buttons & Icons", url: "/buttons-&-icons"}}
                />
            </Box>
        </>
    )
};

export default ApplyingAThemeView;
