import { Box, Button } from "@mui/material";

//je gère le CSS de la ligne (l'étage)
const floorCaseStyle = {
    width: "33%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const FloorName = ({ name }) => {
    return <Box style={floorCaseStyle}>{name} </Box>;
};
const FloorLight = ({ isOn }) => {
    return (
        <Box style={floorCaseStyle}>
            <Box
                style={{
                    backgroundColor: isOn ? "green" : "red",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                }}
            />
        </Box>
    );
};
const FloorButton = ({ isOn, selectFloor }) => {
    return (
        <Box style={floorCaseStyle}>
            <Button
                style={{ color: isOn ? "blue" : "grey" }}
                onClick={selectFloor}
            >
                {" "}
                Call me !{" "}
            </Button>
        </Box>
    );
};

const Floor = ({ isOn, currentFloorSelected, name, selectFloor }) => {
    return (
        <Box
            style={{
                width: "100%",
                border: "1px solid black",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <FloorName name={name} />
            <FloorLight isOn={isOn} />
            <FloorButton
                isOn={currentFloorSelected}
                selectFloor={selectFloor}
            />
        </Box>
    );
};

export default Floor;
