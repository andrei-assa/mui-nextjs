import React from "react";
import {Autocomplete, Card, ClickAwayListener, Popper, TextField, Typography} from "@mui/material";
import {styled, useTheme} from "@mui/material/styles";

const StyledPopper = styled(Popper)(({theme}) => ({
    border: `1px solid ${theme.palette.mode === 'light' ? '#e1e4e8' : '#30363d'}`,
    boxShadow: `0 8px 24px ${
        theme.palette.mode === 'light' ? 'rgba(149, 157, 165, 0.2)' : 'rgb(1, 4, 9)'
    }`,
    width: '300px',

}));

export default function CustomPicker() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [value, setValue] = React.useState<string | null>(null);
    const [pendingValue, setPendingValue] = React.useState<string | null>(null);
    const theme = useTheme();

    const handleClick = (event: React.SyntheticEvent<Element, Event>) => {
        setPendingValue(value);
        // @ts-ignore
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setValue(pendingValue);
        if (anchorEl) {
            anchorEl.focus();
        }
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <ClickAwayListener
                onClickAway={() => {
                    handleClose()
                }}
            >
                <div>
                    <TextField
                        sx={{width: '300px'}}
                        label="Custom picker"
                        onClick={(event) => {
                            handleClick(event)
                        }}
                    />
                    <StyledPopper open={Boolean(anchorEl)} anchorEl={anchorEl} placement="bottom-start">
                        <Card sx={{padding: "1em", width:"100%"}}>
                            <Typography variant={'body1'}>Custom picker</Typography>
                        </Card>
                    </StyledPopper>
                </div>
            </ClickAwayListener>
        </React.Fragment>
    )
}