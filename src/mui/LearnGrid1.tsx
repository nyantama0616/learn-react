import { Box, TextField, Button, Grid } from "@mui/material"
import { SxProps } from "@mui/system"
import MyBox from "./MyBox"
import SignupForm from "./SignupForm"

interface LearnGrid1Props {
    sx?: SxProps
}
export default function LearnGrid1({ sx }: LearnGrid1Props) {
    
    return (
        <Box sx={{
            backgroundColor: "#ff5555",
            ...sx,
            display: "grid",
            gridTemplateColumns: "1fr 2fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "10px"
        }}>
            <MyBox num={0} sx={{gridRow: "span 2"}} />
            <Box sx={{
                gridRow: "span 2",
                backgroundColor: "#ffeeff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <SignupForm title="Sign Up" />
            </Box>
            <MyBox num={2} />
            <MyBox num={3} />
        </Box>
    )
}
