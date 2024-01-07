// views/ApplyingAThemeView.tsx
import React, {ComponentProps, useEffect, useState} from 'react';
import {
    Box, Button, FormControl, FormControlLabel, Grid, MenuItem, Paper, Select, SelectChangeEvent, TextField, Typography
} from '@mui/material';
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

const magnifyTypography = (fontSizeFactor: number) => {

}

const customTheme1 = createTheme({
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

const textDecorationOptions = [
    'none',
    'underline',
]

function titleCase(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function ApplyingACustomTheme() {
    const [theme, setTheme] = useState(createTheme({}));
    const handleUpdateTheme = ({field, value}: { field: string, value: any }) => {
        setTheme((prev) => {
            return createTheme({
                ...prev,
                [field]: {
                    ...value
                }
            });
        });
    };

    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <form

                >
                    <FormControl
                        sx={
                            {
                                display: "block",
                                marginBottom: "1em",
                            }
                        }
                    >
                        <FormControlLabel
                            label={'Font Size Factor'}
                            labelPlacement={'start'}
                            sx={
                                {
                                    width: "100%",
                                }
                            }
                            slotProps={
                                {
                                    typography: {
                                        fontWeight:"600",
                                        sx: {
                                            marginRight: "0.5em"
                                        }
                                    }
                                }
                            }
                            control={
                                <TextField
                                    variant={'outlined'}
                                    type={'number'}
                                    fullWidth
                                    inputProps={{
                                        step: 0.1,
                                        min: 1.0,
                                        max: 5
                                    }}
                                    onChange={(e) => {
                                        const fontSizeFactor = parseFloat(e.target.value);
                                        // Update the typography fontSize
                                        handleUpdateTheme({
                                            field: 'typography',
                                            value: {h4: {fontSize: `${fontSizeFactor}rem`}}
                                        });
                                    }}
                                />
                            }/>
                    </FormControl>
                    <FormControl
                        sx={
                            {
                                display: "block",
                                marginBottom: "1em",

                            }
                        }
                    >
                        <FormControlLabel
                            label={'Primary Color'}
                            labelPlacement={'start'}

                            slotProps={
                                {
                                    typography: {
                                        fontWeight:"600",
                                        sx: {
                                            marginRight: "0.5em"
                                        }
                                    }
                                }
                            }
                            sx={
                                {
                                    width: "100%",
                                }
                            }
                            control={
                                <TextField
                                    variant={'outlined'}
                                    type={'color'}
                                    fullWidth
                                    onChange={(e) => {
                                        const color = e.target.value;
                                        // Update the primary color in the palette
                                        handleUpdateTheme({field: 'palette', value: {primary: {main: color}}});
                                    }}
                                />
                            }/>
                    </FormControl>
                    <FormControl
                        sx={
                            {
                                display: "block",
                                marginBottom: "1em",

                            }
                        }
                    >
                        <FormControlLabel
                            label={'Text Decoration'}
                            labelPlacement={'start'}

                            slotProps={
                                {
                                    typography: {
                                        fontWeight:"600",
                                        sx: {
                                            marginRight: "0.5em"
                                        }
                                    }
                                }
                            }
                            sx={
                                {
                                    width: "100%",
                                }
                            }
                            control={
                                <Select
                                    variant={'outlined'}
                                    type={'color'}
                                    fullWidth
                                    onChange={(e: SelectChangeEvent<'none' | 'underline'>) => {
                                        const textDecoration = e.target.value;
                                        // Update the text decoration in the typography
                                        handleUpdateTheme({
                                            field: 'typography',
                                            value: {h4: {textDecoration: textDecoration}}
                                        });
                                    }}
                                >
                                    {textDecorationOptions.map((textDecorationOption, index) => (
                                        <MenuItem key={index} value={textDecorationOption}>
                                            {titleCase(textDecorationOption)}
                                        </MenuItem>
                                    ))}
                                </Select>
                            }/>
                    </FormControl>
                </form>
            </Grid>
            <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: "center"}}>
                <ThemeProvider theme={theme}>
                    <Typography variant={'h4'} color={'primary'}>Heading 4</Typography>
                </ThemeProvider>
            </Grid>
        </Grid>
    );
}

type CenteredBoxProps = Omit<ComponentProps<typeof Box>, 'display' | 'justifyContent' | 'alignItems'>

function CenteredBox({children, ...BoxProps}: CenteredBoxProps) {
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} {...BoxProps}>
            {children}
        </Box>
    )
}


const ApplyingAThemeView = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Applying a Custom Theme
            </Typography>
            <Typography paragraph>
                Explore how to apply and customize themes in Material-UI.
            </Typography>


            <TitledCard
                title={'Customizing Theme'}
                description={'This box uses a custom theme.'}
            >
                <ThemeProvider theme={customTheme1}>
                    <CenteredBox sx={{marginBottom: "1em"}}>
                        <Button variant="contained" color="primary">
                            Primary Button
                        </Button>
                    </CenteredBox>
                </ThemeProvider>

                <CodeSnippet code={codeSnippets.themeConfiguration}/>
            </TitledCard>

            <TitledCard
                title={'Customizing Theme'}
                description={'This box uses a custom theme.'}
            >

                <CenteredBox sx={{marginBottom: "1em"}}>
                    <ApplyingACustomTheme/>
                </CenteredBox>


                {/*<CodeSnippet code={codeSnippets.themeConfiguration}/>*/}
            </TitledCard>

            <NextPreviousButtons
                previous={{
                    text: "Understanding Material UI's Design Principles",
                    url: "/understanding-material-ui-design-principles"
                }}
                next={{text: "Buttons & Icons", url: "/buttons-&-icons"}}
            />

        </div>
    )
};

export default ApplyingAThemeView;
