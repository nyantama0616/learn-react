import { Grid, Box } from '@mui/material';
import {AspectRatio} from '@mui/joy';
import { BoxOwnProps } from '@mui/system';
import MyBox from './MyBox';

export default function LearnMUI() {
    return (
        <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <MyBox num={0} sizing={{ aspectRatio: "4/1" }} />
                    </Grid>
                    <Grid item xs={2}>
                        <MyBox num={1} sizing={{aspectRatio: "16/9"}} />
                    </Grid>
                    <Grid item xs={8}>
                        <MyBox num={2} sizing={{height: "500px"}} />
                    </Grid>
                    <Grid item xs={2}>
                        <MyBox num={3} sizing={{ aspectRatio: "16/9" }} />
                    </Grid>
                </Grid>
        </Box>
    )
}
