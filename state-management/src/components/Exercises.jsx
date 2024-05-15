import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExercise, deleteExercise, displayExercises } from "../features/exerciseSlice";

function Exercises() {
    const [ex, setEx] = useState("");
    let count = 3;

    const dispatch = useDispatch();
    const exercises = useSelector(displayExercises);
    console.log(exercises);

    const handleSubmit = () => {
        count++;
        dispatch(addExercise({ id: count, exercise: ex }));
        setEx("");
    };

    const handleDelete = (id) => {
        dispatch(deleteExercise(id));
    };

    return (
        <div>
            <input
                type="text"
                name="exercise"
                placeholder="Add Exercise"
                onChange={(e) => setEx(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>

            {exercises.map((exercise, index) => (
                <div key={index}>
                    <p>{exercise.id}</p>
                    <p>{exercise.exercise}</p>
                    <button onClick={() => handleDelete(exercise.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default Exercises;
