import {Box} from '@mui/material';
import {SizingProps} from '@mui/system';

interface MessageProps {
    message: string
    sx?: SizingProps
}
export default function Message({message, sx}: MessageProps) {
    return (
        <Box sx={{...sx}}>
            <h1>{message}</h1>
        </Box>
    )
}
