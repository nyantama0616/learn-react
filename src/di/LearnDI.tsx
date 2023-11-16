import {Box} from "@mui/material";
import Message from "./components/Message";
import useGreeterJapanese from "./hooks/useGreeterJapanese";
import useGreeterEnglish from "./hooks/useGreeterEnglish";

export default function LearnDI() {
    // const greater = useGreeterEnglish();
    const greater = useGreeterJapanese();
    
    return (
        <Box sx={{backgroundColor: "#ffeeee", height: "800px"}}>
            <h1>Learn DI</h1>
            <Message greater={greater} sx={{height: "100px"}}/>
        </Box>
    )
}
