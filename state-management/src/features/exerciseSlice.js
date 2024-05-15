import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    exercises: [
        { id: 1, exercise: "Push ups" },
        { id: 2, exercise: "Pull ups" },
        { id: 3, exercise: "Squats" },
    ],
};

export const exerciseSlice = createSlice({
    name: "exercise",
    initialState,
    reducers: {
        addExercise: (state, action) => {
            const exercise = action.payload;
            state.exercises = [...state.exercises, exercise];
        },
        deleteExercise: (state, action) => {
            const exerciseId = action.payload;
            const newState = state.exercises.filter((exercise, index) => exercise.id != exerciseId);
            state.exercises = newState;
        },
        updateExercise: (state, action) => {
            const { id, updateEx } = action.payload;
            state.exercises = state.exercises.map((exercise) =>
                exercise.id == id ? { id: id, exercise: updateEx } : exercise
            );
        },
    },
});

export const displayExercises = (state) => state.exercise.exercises;

export const { addExercise, deleteExercise, updateExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;
