import "./App.css";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Floor from "./components/Floor";
import Panel from "./components/Panel";
import DoorIndicator from "./components/DoorIndicator.js";
import MovingIndicator from "./components/MovingIndicator";
import axios from "axios";

export const floorsNumber = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function App() {
    //la state qui gère l'étage où l'ascenseur est présent
    const [currentAssessorFloor, setCurrentAssessorFloor] = useState(3);
    //la state qui gère l'étage sélectionné
    const [currentFloorSelected, setCurrentFloorSelected] = useState([]);
    const [isOpenDoor, setIsOpenDoor] = useState(true);

    const selectFloor = (selectedFloor) => {
        setIsOpenDoor(false);
        setCurrentFloorSelected([...currentFloorSelected, selectedFloor]);
    };

    useEffect(() => {
        //
        if (
            currentFloorSelected.length &&
            currentAssessorFloor !== currentFloorSelected[0]
        ) {
            if (isOpenDoor) {
                setIsOpenDoor(false);
            }
            if (currentAssessorFloor > currentFloorSelected[0]) {
                setTimeout(
                    () => setCurrentAssessorFloor(currentAssessorFloor - 1),
                    1000
                );
            } else if (currentAssessorFloor < currentFloorSelected[0]) {
                setTimeout(
                    () => setCurrentAssessorFloor(currentAssessorFloor + 1),
                    1000
                );
            }
        }
        //
        if (currentAssessorFloor === currentFloorSelected[0]) {
            if (currentFloorSelected.length === 1) {
                setIsOpenDoor(true);
                setCurrentFloorSelected([]);
            } else if (currentFloorSelected.length > 1) {
                setIsOpenDoor(true);
                setTimeout(
                    () =>
                        setCurrentFloorSelected(currentFloorSelected.slice(1)),
                    5000
                );
            }
        }
    }, [currentAssessorFloor, currentFloorSelected, isOpenDoor]);

    useEffect(() => {
        axios.post("http://localhost:3000/elevatorlogs");
    }, [currentFloorSelected]);

    return (
        <Box style={{ display: "flex", justifyContent: "space-around" }}>
            <Box id="building1" style={{ width: "600px" }}>
                {floorsNumber.map((floorNumber) => (
                    <Floor
                        selectFloor={() => selectFloor(floorNumber)}
                        name={`Etage ${floorNumber}`}
                        key={floorNumber}
                        isOn={floorNumber === currentAssessorFloor}
                        currentFloorSelected={currentFloorSelected.includes(
                            floorNumber
                        )}
                    />
                ))}
            </Box>
            <Box>
                <MovingIndicator
                    goesUp={currentAssessorFloor < currentFloorSelected?.[0]}
                    goesDown={currentAssessorFloor > currentFloorSelected?.[0]}
                />
                <DoorIndicator isOpen={isOpenDoor} />
            </Box>
            <Box
                id="panel1"
                style={{
                    width: "150px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}
            >
                <Panel
                    floors={floorsNumber}
                    selectFloor={selectFloor}
                    currentFloorSelected={currentFloorSelected}
                />
            </Box>
        </Box>
    );
}

export default App;
