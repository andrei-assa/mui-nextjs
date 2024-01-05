import {useRouter} from "next/navigation";
import React from "react";
import {Box, Button} from "@mui/material";

interface ButtonLink {
    text: string
    url: string
}

interface NextPreviousProps {
    previous?: ButtonLink
    next?: ButtonLink
}

export default function NextPreviousButtons(props: NextPreviousProps) {
    const {next, previous} = props;
    const router = useRouter()
    return (
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
            {previous ? <Button
                sx={{marginRight: !next ? 'auto' : null}}
                variant={'outlined'} onClick={() => {
                router.push(previous.url)
            }}>Previous: {previous.text}</Button> : null}
            {next ? <Button
                sx={{marginLeft: !previous ? 'auto' : null}}
                variant={'outlined'} onClick={() => {
                router.push(next.url)
            }}>Next: {next.text}</Button> : null}
        </Box>
    )
}