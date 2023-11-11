import { Box, Grid } from "@mui/material"
import Header from "./Header"

interface LayoutProps {
    mainComponent: JSX.Element
}

export default function Layout({mainComponent}: LayoutProps) {
    return (
        <Box sx={{backgroundColor: "gray", width: "100%", height: "100%"}}>
            <Grid container justifyContent="center"> //子要素を中央に配置には、containerグリッドにjustifyContent="center"を指定する
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={10}>
                    {mainComponent}
                </Grid>
            </Grid>
        </Box>
    )
}
