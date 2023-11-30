import { Box } from "@mui/material"
import { SxProps } from "@mui/system"
interface MyBoxProps {
    num: number
    sx?: SxProps
}

export default function MyBox({ num, sx }: MyBoxProps) {
    return (
        <Box className="my-box" sx={{ backgroundColor: "pink", ...sx }}>
            <h1>Box{num}</h1>
        </Box>
    )
}
    