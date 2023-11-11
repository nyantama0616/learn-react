import { Box, TextField, Button } from "@mui/material";
import { Grid } from "@mui/material";
import ISignInManager from "./interfaces/ISignInManager";
import SizingProps from "./interfaces/SizingProps";

interface SignInFormProps {
    signInManager: ISignInManager
    sizing?: SizingProps
}

export default function SignInForm({signInManager, sizing }: SignInFormProps) {
    return (
        <Box sx={{ backgroundColor: "#cccccc", ...sizing }}>
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
