/* eslint-disable jsx-a11y/no-distracting-elements */
import { Box } from "@mui/material";
import './slide.css';


function Home() {
    return(
        <>
            <Box
                alignContent={'center'}
            >
                    <Box className="slide-effect">
                        <Box className="slideUp firstSlide">KNEEL</Box>
                        <Box className="slideUp secondSlide">BEFORE</Box>
                        <Box paddingTop={0} className="slideUp thirdSlide">ZOD</Box>
                    </Box>
            </Box>
        </>
    );
}

export default Home;