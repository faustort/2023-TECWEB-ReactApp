import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import Body from "../components/Body";
import ContatoScreen from "../screens/ContatoScreen";
import SobreScreen from "../screens/SobreScreen";
import ExercicioScreen from "../screens/ExercicioScreen";

function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} path="/">
            <Route element={<HomeScreen />} path="/" />
            <Route element={<SobreScreen />} path="/sobre" />
            <Route element={<ExercicioScreen />} path="/exercicio" />
            <Route element={<ContatoScreen />} path="/contato" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
