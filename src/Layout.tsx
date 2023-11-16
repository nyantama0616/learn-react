import { Box, Grid } from "@mui/material"
import Header from "./Header"

interface LayoutProps {
    mainComponent: JSX.Element
}

export default function Layout({mainComponent}: LayoutProps) {
    return (
        <Box sx={{ width: "100%", height: "100%" }}>
            {/* 子要素を中央に配置には、containerグリッドにjustifyContent="center"を指定する */}
            <Grid container justifyContent="center">
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={11}>
                    {mainComponent}
                </Grid>
            </Grid>
        </Box>
    )
}
