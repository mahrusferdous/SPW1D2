import React, { useState } from "react";
import { updateExercise } from "../features/exerciseSlice";
import { useDispatch } from "react-redux";

function UpdateExercise() {
    const [index, setIndex] = useState("");
    const [exercise, setExercise] = useState("");
    const dispatch = useDispatch();

    const handleUpdate = () => {
        dispatch(updateExercise({ id: parseInt(index), updateEx: exercise }));
        setIndex("");
        setExercise("");
    };

    return (
        <div>
            <input
                type="text"
                name="id"
                placeholder="id"
                onChange={(e) => setIndex(e.target.value)}
            />
            <input
                type="text"
                name="update"
                placeholder="Exercise"
                onChange={(e) => setExercise(e.target.value)}
            />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}

export default UpdateExercise;
