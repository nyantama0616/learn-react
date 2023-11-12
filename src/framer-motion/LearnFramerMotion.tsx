import {Box} from "@mui/material";
import {Grid} from "@mui/material";
import TopPage from "./TopPage";
import Profile from "./Profile";

export default function LearnFramerMotion() {
    return (
        <Box sx={{backgroundColor: "pink", height: "800px"}}>
            <h1>Learn Frame Motion</h1>
            <Grid container justifyContent="center">
                <Grid item xs={4}>
                    {/* <TopPage sizing={{height: "600px"}}/> */}
                    <Profile sizing={{height: "600px"}}/>
                </Grid>                
            </Grid>
        </Box>
    );
}
