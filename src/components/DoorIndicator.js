import { Box } from "@mui/material";

const DoorIndicator = ({ isOpen }) => {
    if (isOpen) return <Box> La porte est ouverte</Box>;
    return <Box> La porte est fermÃ©e </Box>;
};

export default DoorIndicator;
