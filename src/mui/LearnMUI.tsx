import { Grid, Box } from '@mui/material';
import MyBox from './MyBox';
import MyBox2 from './MyBox2';
import SignInForm from './SignInForm';
import useSignInManager from './hooks/useSignInManager';
import useAuthManager from './hooks/useAuthManager';

export default function LearnMUI() {
    const authManager = useAuthManager();
    const signInManager = useSignInManager(authManager);
    
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
                    <SignInForm signInManager={signInManager} sizing={{height: "500px"}} />
                </Grid>
                <Grid item xs={2}>
                    <MyBox2 />
                </Grid>
            </Grid>
        </Box>
    )
}
