// *lib
import { Route, Routes } from 'react-router-dom';

// *CSS
import './App.css';

// *component
import Navbar from './component/navbar';
import About from './component/pages/about';
import Home from './component/pages/home';
import NotFound from './component/pages/notFound';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
