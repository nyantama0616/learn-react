import {Box, Button} from "@mui/material";
import {Grid} from "@mui/material";
import TopPage from "./TopPage";
import Profile from "./Profile";
import {useState, useMemo, useEffect} from "react";
import SlideInOut from "./animations/SlideInOut";
import GhostInOut from "./animations/GhostInOut";
import PopInOut from "./animations/PopInOut";

enum PageStatus {
    TOP_PAGE,
    PROFILE
}
export default function LearnFramerMotion() {
    const [status, setStatus] = useState(PageStatus.TOP_PAGE);
    const showTopPage = useMemo(() => status === PageStatus.TOP_PAGE, [status]);
    const showProfile = useMemo(() => status === PageStatus.PROFILE, [status]);

    function toggleStatus() {
        setStatus((status) => {
            switch(status) {
                case PageStatus.TOP_PAGE:
                    return PageStatus.PROFILE;
                case PageStatus.PROFILE:
                    return PageStatus.TOP_PAGE;
            }
        });
    }

    return (
        <Box sx={{backgroundColor: "pink", height: "800px"}}>
            <h1>Learn Frame Motion</h1>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={4}>
                    <Box sx={{position: "relative", height: "600px"}} className="slide-container">
                        <Page key="top-page" isVisible={showTopPage}><TopPage sizing={{height: "600px"}}/></Page>
                        <Page key="profile" isVisible={showProfile}><Profile sizing={{height: "600px"}}/></Page>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={toggleStatus}>Slide!</Button>
                </Grid>                
            </Grid>
        </Box>
    );
}

interface PageProps {
    key: string
    isVisible: boolean
    children: React.ReactNode
}

function Page({key, isVisible, children}: PageProps) {
    return (
        <Box sx={{
            position: "absolute", //これ書かないと、要素が縦に並んでしまう
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
        }}>
            <PopInOut key={key} isVisible={isVisible}>
                {children}
            </PopInOut>
        </Box>
    );
}
