import { Box } from "@mui/material";
import { SxProps } from "@mui/system";

interface MyPageProps {
    sx?: SxProps
}

export default function Profile({sx}: MyPageProps) {
    return (
        <Box sx={{backgroundColor: "#9999ff", ...sx}}>
            <h1>Profile</h1>
        </Box>
    )
}
