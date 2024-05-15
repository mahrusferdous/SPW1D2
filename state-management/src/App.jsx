import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import Exercises from "./components/Exercises";
import { store } from "./store";
import { Provider } from "react-redux";
import UpdateExercise from "./components/UpdateExercise";

function App() {
    return (
        <Provider store={store}>
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Exercises />} />
                    <Route path="/update" element={<UpdateExercise />} />
                </Routes>
            </BrowserRouter> */}
            <Exercises />
            <UpdateExercise />
        </Provider>
    );
}

export default App;
