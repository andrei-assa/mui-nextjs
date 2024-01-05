// views/ButtonsAndIcons.tsx
import React, {useState} from 'react';
import {
    Button,
    Typography,
    Stack,
    IconButton,
    Box,
    CircularProgress,
    Dialog,
    DialogTitle,
    DialogActions
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import DownloadIcon from '@mui/icons-material/Download';
import CodeSnippet from "../CodeSnippet"
import codeSnippets from "./CodeSnippets"
import TitledCard from "@/views/TitledCard";
import {useRouter} from "next/navigation";

const HoverEffectButton = () => {
    return (
        <Button
            variant="contained"
            sx={{
                backgroundColor: 'purple',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'darkpurple',
                },
            }}
        >
            Custom Styled Button
        </Button>
    )
}

const LoadingButton = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
        // Simulate an asynchronous operation, e.g., an API call
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simulating a 2-second delay
    };

    return (
        <Button
            variant="contained"
            onClick={handleClick}
            disabled={isLoading}
        >
            {isLoading ? <CircularProgress size={24} color="inherit"/> : 'Start Operation'}
        </Button>
    );
};

const ButtonWithConfirmation = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleButtonClick = () => {
        setOpenDialog(true);
    };

    const handleConfirm = () => {
        // Perform the action here
        console.log('Action confirmed');
        setOpenDialog(false);
    };

    const handleCancel = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <Button variant="contained" onClick={handleButtonClick}>
                Delete Item
            </Button>
            <Dialog open={openDialog} onClose={handleCancel}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm} color="error">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

const ButtonsAndIcons = () => {
    const router = useRouter()
    return (
        <Box sx={{marginBottom: "2em"}}>
            <Typography variant="h4" gutterBottom>
                Buttons and Icons
            </Typography>
            <Typography paragraph>
                Explore the different button styles provided by Material-UI.
            </Typography>
            <TitledCard title={'Contained Buttons'}>
                <Box sx={{maxWidth: 360, margin: 'auto'}}>
                    <Stack direction="column" spacing={2} marginBottom={4}>
                        <Button variant="contained">Default</Button>
                        <Button variant="contained" color="primary">
                            Primary
                        </Button>
                        <Button variant="contained" color="secondary">
                            Secondary
                        </Button>
                        <Button variant="contained" disabled>
                            Disabled
                        </Button>
                        <Button variant="contained" color="success">
                            Success
                        </Button>
                    </Stack>
                </Box>

                <CodeSnippet code={codeSnippets.containedButtons}/>
            </TitledCard>
            <TitledCard title={'Text Buttons'}>
                <Box sx={{maxWidth: 360, margin: 'auto'}}>
                    <Stack direction="column" spacing={2} marginBottom={4}>
                        <Box sx={{maxWidth: 360, margin: 'auto'}}>
                            <Stack direction="column" spacing={2} marginBottom={4}>
                                <Button>Default</Button>
                                <Button color="primary">Primary</Button>
                                <Button color="secondary">Secondary</Button>
                                <Button disabled>Disabled</Button>
                                <Button color="success">Success</Button>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
                <CodeSnippet code={codeSnippets.textButtons}/>
            </TitledCard>

            <TitledCard title={'Outlined Buttons'}>
                <Box sx={{maxWidth: 360, margin: 'auto'}}>
                    <Stack direction="column" spacing={2} marginBottom={4}>
                        <Button variant="outlined">Default</Button>
                        <Button variant="outlined" color="primary">
                            Primary
                        </Button>
                        <Button variant="outlined" color="secondary">
                            Secondary
                        </Button>
                        <Button variant="outlined" disabled>
                            Disabled
                        </Button>
                        <Button variant="outlined" color="success">
                            Success
                        </Button>
                    </Stack>
                </Box>
                <CodeSnippet code={codeSnippets.outlinedButtons}/>
            </TitledCard>
            <TitledCard title={'Buttons with Icons and Label'}>
                <Box sx={{maxWidth: 360, margin: 'auto'}}>
                    <Stack direction="column" spacing={2} marginBottom={4}>
                        <Button variant="contained" startIcon={<DeleteIcon/>} color="error">
                            Delete
                        </Button>
                        <Button variant="contained" endIcon={<SendIcon/>} color="info">
                            Send
                        </Button>
                        <Button variant="outlined" startIcon={<DownloadIcon/>} color="inherit">
                            Download
                        </Button>
                    </Stack>
                </Box>
                <CodeSnippet code={codeSnippets.buttonsIconAndLabel}/>
            </TitledCard>

            <TitledCard title={'Icon Buttons'}>
                <Box sx={{margin: 'auto', display: "flex", justifyContent: "center"}}>
                    <IconButton aria-label="delete" color="error">
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label="send" color="info">
                        <SendIcon/>
                    </IconButton>
                    <IconButton aria-label="download" color="inherit">
                        <DownloadIcon/>
                    </IconButton>
                </Box>
                <CodeSnippet code={codeSnippets.iconButtons}/>
            </TitledCard>
            <TitledCard title={'Custom Styling'}>
                <Box sx={{maxWidth: 360, margin: 'auto'}}>
                    <Stack direction="column" spacing={2} marginBottom={4}>
                        <HoverEffectButton/>
                    </Stack>
                </Box>
                <CodeSnippet code={codeSnippets.hoverEffectButton}/>
            </TitledCard>

            <TitledCard title={'Event Handling'}>
                <Box sx={{maxWidth: 360, margin: 'auto'}}>
                    <Stack direction="column" spacing={2} marginBottom={4}>
                        <Button
                            variant="contained"
                            onClick={() => {
                                alert('Button clicked!');
                            }}
                        >
                            Click Me
                        </Button>
                    </Stack>
                </Box>
                <CodeSnippet code={codeSnippets.eventHandling}/>
            </TitledCard>

            <TitledCard title={'Loading Button'}>
                <Box sx={{maxWidth: 360, margin: 'auto'}}>
                    <Stack direction="column" spacing={2} marginBottom={4}>
                        <LoadingButton/>
                    </Stack>
                </Box>
                <CodeSnippet code={codeSnippets.loadingButton}/>
            </TitledCard>

            <TitledCard title={'Button with Confirmation'}>
                <Box sx={{maxWidth: 360, margin: 'auto'}}>
                    <Stack direction="column" spacing={2} marginBottom={4}>
                        <ButtonWithConfirmation/>
                    </Stack>
                </Box>
                <CodeSnippet code={codeSnippets.buttonWithConfirmation}/>
            </TitledCard>

            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Button variant={'outlined'} onClick={() => {
                    router.push('/applying-a-theme-with-material-ui')
                }}>Previous: Applying a Theme</Button>
                <Button variant={'outlined'} onClick={() => {
                    router.push('/typography-&-paper')
                }}>Next: Typography and Paper</Button>
            </Box>
        </Box>
    );
};

export default ButtonsAndIcons;
