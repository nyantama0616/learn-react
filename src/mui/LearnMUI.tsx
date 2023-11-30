import { Grid, Box } from '@mui/material';
import MyBox from './MyBox';
import MyBox2 from './MyBox2';
import SignInForm from './SignInForm';
import useSignInManager from './hooks/useSignInManager';
import { AuthProvider } from './contexts/AuthContext';

export default function LearnMUI() {
    return (
        <Box>
            <AuthProvider>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <MyBox num={0} sx={{ aspectRatio: "4/1" }} />
                    </Grid>
                    <Grid item xs={2}>
                        <MyBox num={1} sx={{aspectRatio: "16/9"}} />
                    </Grid>
                    <Grid item xs={8}>
                        <SignInForm sx={{height: "500px"}} />
                    </Grid>
                    <Grid item xs={2}>
                        <MyBox2 />
                    </Grid>
                </Grid>
            </AuthProvider>
        </Box>
    )
}
