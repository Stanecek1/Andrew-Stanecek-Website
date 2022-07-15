import './App.css';
import Art from './Art/Containers/Art';
import GameDevelopment from './GameDevelopment/Containers/GameDevelopment'
import Software from './Software/Containers/Software';
import Menu from './Menu';
import Home from './Home/Containers/Home';
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <div>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/Art" element={<Art/>}/>
        <Route path = "/Software" element={<Software/>}/>
        {/* <Route path = "Music" element={<Music/>}/> */}
        <Route path = "/GameDevelopment" element={<GameDevelopment/>}/>
      </Routes>
    </div>
  );
}

export default App;
