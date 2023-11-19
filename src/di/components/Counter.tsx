import { Box, Button } from "@mui/material";
import {SxProps} from "@mui/system";
import { useDependency } from "../contexts/Dependency";
import ICounter from "../interfaces/ICounter";

interface CounterProps {
    sx?: SxProps
}
export default function Counter({sx}: CounterProps) {
    const {counter} = useDependency()!;
    
    return (
        <Box sx={sx}>
            <h1>Counter</h1>
            <p>{counter.count}</p>
            <Button variant="contained" onClick={() => counter.increment()}>increment</Button>
            <Button variant="contained" onClick={() => counter.decrement()}>decrement</Button>
        </Box>
    )
}
