import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Video from './Components/Video';

function App() {
  return (
    <div>      
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>} ></Route>
           <Route path='/video' element={<Video/>} ></Route>
         </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
