import {Box} from "@mui/material";
import SizingProps from "../mui/interfaces/SizingProps";

interface MyPageProps {
    sizing?: SizingProps
}

export default function TopPage({sizing}: MyPageProps) {
    return (
        <Box sx={{backgroundColor: "#aacccc", ...sizing}}>
            <h1>Top Page</h1>
        </Box>
    )
}
