import {Box} from "@mui/material";
import Greeter from "./components/Greeter";
import useGreeterJapanese from "./hooks/useGreeterJapanese";
import useGreeterEnglish from "./hooks/useGreeterEnglish";
import {DependencyProvider} from './contexts/Dependency'; //本来はApp.tsxで使うべきだと思う

export default function LearnDI() {
    return (
        <Box sx={{backgroundColor: "#ffeeee", height: "800px"}}>
            <DependencyProvider>
                <h1>Learn DI</h1>
                <Greeter />
            </DependencyProvider>
        </Box>
    )
}
