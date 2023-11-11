import { Box } from "@mui/material"
import SizingProps from "./interfaces/SizingProps"

interface MyBoxProps {
    num: number
    sizing?: SizingProps
}

export default function MyBox({ num, sizing }: MyBoxProps) {
    return (
        <Box className="my-box" sx={{ backgroundColor: "pink", ...sizing }}>
            <h1>Box{num}</h1>
        </Box>
    )
}
    