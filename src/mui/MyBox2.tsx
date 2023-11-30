import { Box, Grid } from "@mui/material"
import { SxProps} from "@mui/system"
import MyBox from "./MyBox"

interface MyBox2Props {
    sx?: SxProps
}

export default function MyBox2({ sx }: MyBox2Props) {
    const boxes = Array.from({ length: 8 }, (_, i) => {
        return (
            <Grid item xs={6} key={i.toString()}>
                <MyBox num={i} sx={{aspectRatio: "4/3"}} />
            </Grid>
        ) 
    });
    return (
        <Box className="my-box2" sx={{ ...sx }}>
            <Grid container spacing={2}>
                {boxes}
            </Grid>
        </Box>
    )
}
