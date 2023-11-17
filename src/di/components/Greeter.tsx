import {Box} from "@mui/material";
import {SxProps} from "@mui/system";
import Message from "./Message";
import {useDependency} from "../contexts/Dependency";

interface GreeterProps {
    sx?: SxProps
}
export default function Greeter({sx}: GreeterProps) {
    const {greeter} = useDependency()!;

    return (
        <Box sx={{...sx}}>
            <Message message={greeter.message} />
        </Box>
    )
}
