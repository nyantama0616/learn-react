import { Box, Button, Grid, TextField } from "@mui/material"

interface SignupFormProps {
    /**
     * フォームのタイトルです。
     */
    title: string;
    buttonType?: "contained" | "outlined";
    backgroundColor?: string;
}

/**
 * サインアップ用のフォームです。
 */
export default function SignupForm({ title, buttonType, backgroundColor }: SignupFormProps) {
    return (
        <Box sx={{backgroundColor: backgroundColor}}>
            <form action="">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h1>{title}</h1>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="text"
                            label="First Name"
                            variant="outlined"
                            style={{ width: "100%" }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="text"
                            label="Last Name"
                            variant="outlined"
                            style={{ width: "100%" }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="text"
                            label="Email"
                            variant="outlined"
                            style={{ width: "100%" }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="password"
                            label="Password"
                            variant="outlined"
                            style={{ width: "100%" }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{display: "flex", justifyContent: "center"}}>
                            <Button variant={buttonType}>Submit</Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}
