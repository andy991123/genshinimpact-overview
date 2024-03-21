import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


import Overview from './pages/Overview';
import Characters from './pages/Characters';
import Weapons from './pages/Weapons';
import Artifacts from './pages/Artifacts';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Overview/>}></Route>
        <Route path='/Characters' element={<Characters/>}></Route>
        <Route path='/Weapons' element={<Weapons/>}></Route>
        <Route path='/Artifacts' element={<Artifacts/>}></Route>
      </Routes>
    </Router>


    </div>
  );
}

export default App;
