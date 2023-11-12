import {Box} from "@mui/material";
import SizingProps from "../mui/interfaces/SizingProps";

interface MyPageProps {
    sizing?: SizingProps
}

export default function Profile({sizing}: MyPageProps) {
    return (
        <Box sx={{backgroundColor: "#9999ff", ...sizing}}>
            <h1>Profile</h1>
        </Box>
    )
}
