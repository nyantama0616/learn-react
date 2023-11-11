import { Box, Grid } from "@mui/material"
import SizingProps from "./interfaces/SizingProps"
import MyBox from "./MyBox"

interface MyBox2Props {
    sizing?: SizingProps
}

export default function MyBox2({ sizing }: MyBox2Props) {
    const boxes = Array.from({ length: 8 }, (_, i) => {
        return (
            <Grid item xs={6} key={i.toString()}>
                <MyBox num={i} sizing={{aspectRatio: "4/3"}} />
            </Grid>
        ) 
    });
    return (
        <Box className="my-box2" sx={{ ...sizing }}>
            <Grid container spacing={2}>
                {boxes}
            </Grid>
        </Box>
    )
}
