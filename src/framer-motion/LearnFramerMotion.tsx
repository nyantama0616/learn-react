import {Box, Button} from "@mui/material";
import {Grid} from "@mui/material";
import TopPage from "./TopPage";
import Profile from "./Profile";
import {useState, useMemo, useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";

enum Page {
    TOP_PAGE,
    PROFILE
}
export default function LearnFramerMotion() {
    const [status, setStatus] = useState(Page.TOP_PAGE);
    const showTopPage = useMemo(() => status === Page.TOP_PAGE, [status]);
    const showProfile = useMemo(() => status === Page.PROFILE, [status]);

    function toggleStatus() {
        setStatus((status) => {
            switch(status) {
                case Page.TOP_PAGE:
                    return Page.PROFILE;
                case Page.PROFILE:
                    return Page.TOP_PAGE;
            }
        });
    }

    return (
        <Box sx={{backgroundColor: "pink", height: "800px"}}>
            <h1>Learn Frame Motion</h1>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={4}>
                    <Box sx={{position: "relative", height: "600px"}} className="slide-container">
                        <SlideInOut isVisible={showTopPage}><TopPage sizing={{height: "600px"}}/></SlideInOut>
                        <SlideInOut isVisible={showProfile}><Profile sizing={{height: "600px"}}/></SlideInOut>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={toggleStatus}>Slide!</Button>
                </Grid>                
            </Grid>
        </Box>
    );
}

interface SlideInOut {
    isVisible: boolean
    children: React.ReactNode
}
function SlideInOut({isVisible, children}: SlideInOut) {
    return (
        <Box sx={{
            position: "absolute", //これ書かないと、要素が縦に並んでしまう
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
        }}>
            <AnimatePresence>
                {isVisible && <motion.div
                    key="top-page"
                    initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -500, opacity: 0 }}
                    >
                    {children}
                </motion.div>}
            </AnimatePresence>
        </Box>
    )
}
