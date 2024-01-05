const codeSnippets = {
    containedButtons: `
import {Button} from "@mui/material";
    
export const ContainedButtons = () => (
    <Button variant="contained">Default</Button>
)
    `,
    textButtons: `
import {Button} from "@mui/material";

export const TextButtons = () => (
    <Button>Default</Button>
)
`,
    outlinedButtons: `
import {Button} from "@mui/material";

export const OutlinedButtons = () => (
    <Button variant="outlined">Default</Button>
)
`,
    iconButtons: `
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export const ButtonsIconAndLabel = () => (
<>
    <IconButton aria-label="delete" color="error">
        <DeleteIcon/>
    </IconButton>
    <IconButton aria-label="send" color="info">
        <SendIcon/>
    </IconButton>
    <IconButton aria-label="download" color="inherit">
        <DownloadIcon/>
    </IconButton>
</>
)
`,
    buttonsIconAndLabel: `
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from "@mui/icons-material/Send"
import DownloadIcon from "@mui/icons-material/Download"
import {Button} from "@mui/material"

export const IconButtons = () => (
<>
    <Button variant="contained" startIcon={<DeleteIcon/>} color="error">
        Delete
    </Button>
    <Button variant="contained" endIcon={<SendIcon/>} color="info">
        Send
    </Button>
    <Button variant="outlined" startIcon={<DownloadIcon/>} color="inherit">
        Download
    </Button>
</>
)
    `,
    hoverEffectButton: `
import {Button} from "@mui/material";

export const HoverEffectButton = () => (
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
`,
    eventHandling: `
import {Button} from "@mui/material";

export const ButtonWithEvent = () => (
    <Button
        variant="contained"
        onClick={() => {
            alert('Button clicked!');
        }}
    >
        Click Me
    </Button>
)
`,
    loadingButton: `
import {Button, CircularProgress} from "@mui/material";
import {useState} from "react";

export const LoadingButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    };
    return (
        <Button variant="contained" onClick={handleClick} disabled={isLoading}>
            {isLoading ? <CircularProgress size={24} color="inherit"/> : 'Start Operation'}
        </Button>
    )
};
`,
    buttonWithConfirmation: `
import {Button, Dialog, DialogTitle, DialogActions} from "@mui/material";
import {useState} from 'react';

export const ButtonWithConfirmation = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleButtonClick = () => setOpenDialog(true);
    const handleConfirm = () => {
        console.log('Action confirmed');
        setOpenDialog(false);
    };
    const handleCancel = () => setOpenDialog(false);

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
    )
}
`
}

export default codeSnippets;