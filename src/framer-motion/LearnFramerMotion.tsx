import {Route, Routes, Outlet} from "react-router-dom";
import {Box} from "@mui/material";
import {Grid} from "@mui/material";
import TopPage from "./TopPage";
import Profile from "./Profile";
import {useState, useMemo, useEffect} from "react";

enum Page {
    TOP_PAGE,
    PROFILE
}
export default function LearnFramerMotion() {
    const [status, setStatus] = useState(Page.TOP_PAGE);
    
    const component = useMemo(() => {
        switch(status) {
            case Page.TOP_PAGE:
                return <TopPage sizing={{height: "600px"}}/>;
            case Page.PROFILE:
                return <Profile sizing={{height: "600px"}}/>;
        }
    }, [status]);

    useEffect(() => {
        const interval = setInterval(() => {
            setStatus((status) => {
                switch(status) {
                    case Page.TOP_PAGE:
                        return Page.PROFILE;
                    case Page.PROFILE:
                        return Page.TOP_PAGE;
                }
            });
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{backgroundColor: "pink", height: "800px"}}>
            <h1>Learn Frame Motion</h1>
            <Grid container justifyContent="center">
                <Grid item xs={4}>
                    {component}
                </Grid>                
            </Grid>
        </Box>
    );
}
