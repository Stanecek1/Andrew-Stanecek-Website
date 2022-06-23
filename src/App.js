import './App.css';
import Art from './Art/Containers/Art';
import GameDevelopment from './GameDevelopment/Containers/GameDevelopment'
import Software from './Software/Containers/Software';
import Menu from './Menu';
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-2 p-0'>
          <Menu></Menu>
        </div>
        <div className='col-10 p-0'>
          <Routes>
            <Route path = "/" element={<Art/>}/>
            <Route path = "/Art" element={<Art/>}/>
            <Route path = "/Software" element={<Software/>}/>
            {/* <Route path = "Music" element={<Music/>}/> */}
            <Route path = "/GameDevelopment" element={<GameDevelopment/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
