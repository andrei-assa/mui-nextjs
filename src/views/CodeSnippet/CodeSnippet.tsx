// CodeSnippet.tsx
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, IconButton, Popover } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min'; // For JSX syntax
import 'prismjs/themes/prism-tomorrow.css'; // Import a PrismJS theme

const CodeSnippet = ({ code }: { code: string }) => {
    const [expanded, setExpanded] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
        setTimeout(() => setAnchorEl(null), 1500); // Hide the popover after 1.5 seconds
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code).then(() => {
            console.log('Code copied to clipboard!');
        }, () => {
            console.error('Failed to copy code to clipboard.');
        });
    };

    const onCopyClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        copyToClipboard();
        handlePopoverOpen(event);
    };

    const toggleAccordion = () => {
        setExpanded(!expanded);
        if (!expanded) {
            // Wait for the transition to complete, then highlight
            setTimeout(() => Prism.highlightAll(), 300);
        }
    };

    return (
        <>
            <Accordion expanded={expanded} onChange={toggleAccordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="code-content"
                    id="code-header"
                >
                    <Button variant={'outlined'}>{expanded ? 'Hide Code' : 'Show Code'}</Button>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: 'rgba(45, 45, 45)', position: 'relative' }}>
                    <IconButton
                        onClick={onCopyClick}
                        size="small"
                        sx={{ position: 'absolute', top: '8px', right: '8px', color: 'white' }}
                    >
                        <FileCopyIcon />
                    </IconButton>
                    <Typography component="pre" sx={{ overflowX: 'auto', margin: '0' }}>
                        <code className="language-jsx">
                            {code}
                        </code>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography sx={{ p: 1 }}>Copied!</Typography>
            </Popover>
        </>
    );
};

export default CodeSnippet;
