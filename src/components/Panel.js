import { Box } from "@mui/material";

const Panel = ({ currentFloorSelected, floors, selectFloor }) => {
    return (
        <>
            {floors.map((floor) => (
                <Box
                    onClick={() => selectFloor(floor)}
                    style={{
                        color: currentFloorSelected.includes(floor)
                            ? "green"
                            : "",
                        fontSize: "24px",
                        width: "60px",
                        height: "60px",
                        border: `1px solid ${
                            currentFloorSelected.includes(floor)
                                ? "green"
                                : "grey"
                        }`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        marginBottom: "5px",
                        cursor: "pointer",
                    }}
                >
                    {floor}
                </Box>
            ))}
        </>
    );
};

export default Panel;
