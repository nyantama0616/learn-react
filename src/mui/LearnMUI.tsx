import { Grid, Box } from '@mui/material';
import LearnGrid0 from './LearnGrid0';
import LearnGrid1 from './LearnGrid1';

export default function LearnMUI() {
    return (
        <Box sx={{ height: "800px", backgroundColor: "#ffeeee" }}>
            <LearnGrid1 sx={{height: "100%"}} />
        </Box>
    )
}
