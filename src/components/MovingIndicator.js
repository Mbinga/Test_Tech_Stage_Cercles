import { Box } from "@mui/material";

const MovingIndicator = ({ goesUp, goesDown }) => {
    //Je gère le voyant qui indique si l'ascenseur monte ou descend
    if (goesUp) {
        return <Box style={{ fontSize: "20px", color: "green" }}>↑</Box>;
    } else if (goesDown) {
        return <Box style={{ fontSize: "20px", color: "red" }}>↓</Box>;
    } else {
        return <Box style={{ fontSize: "20px" }}>-</Box>;
    }
};

export default MovingIndicator;
