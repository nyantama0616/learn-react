import IGreeter from '../interfaces/IGreeter';
import {Box} from '@mui/material';
import {SizingProps} from '@mui/system';

interface MessageProps {
    greater: IGreeter
    sx?: SizingProps
}
export default function Message({greater, sx}: MessageProps) {
    return (
        <Box sx={{...sx}}>
            <h1>{greater.message}</h1>
        </Box>
    )
}
