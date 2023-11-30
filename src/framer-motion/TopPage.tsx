import {Box} from "@mui/material";
import { SxProps } from "@mui/system";

interface MyPageProps {
    sx?: SxProps
}

export default function TopPage({sx}: MyPageProps) {
    return (
        <Box sx={{backgroundColor: "#aacccc", ...sx}}>
            <h1>Top Page</h1>
        </Box>
    )
}
