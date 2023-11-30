import { Box, TextField, Button, Grid } from "@mui/material";
import { SxProps } from "@mui/system";

import ISignInManager from "./interfaces/ISignInManager";
import useSignInManager  from "./hooks/useSignInManager";
interface SignInFormProps {
    sx?: SxProps
}

export default function SignInForm({ sx }: SignInFormProps) {
    const signInManager: ISignInManager = useSignInManager();
    return (
        <Box sx={{ backgroundColor: "#cccccc", ...sx }}>
            <h1>Sign In</h1>
            <form action="">
                <Grid container spacing={2} justifyContent="center">
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={8}>
                            <TextField
                                type="text"
                                label="Email"
                                variant="outlined"
                                style={{ width: "100%" }}
                                onChange={signInManager.handleEmailChange}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                type="password"
                                label="Password"
                                variant="outlined"
                                style={{ width: "100%" }}
                                onChange={signInManager.handlePasswordChange}
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            onClick={signInManager.signIn}
                        >
                            Sign In
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}
