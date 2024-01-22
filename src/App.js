import {Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Navbar2 from './components/Navbar2';
import Subscribe from './components/Subscribe';
// import Landing from './pages/Landing';
import AboutUs from './components/AboutUs';
import Doc from './components/Doc'
import Profile from './components/Profile';
import Newhome from './pages/Newhome'
function App() {
  return (
    <>
    <div>
      <Navbar2 />
      {/* <Landing/> */}
      <Routes>
        <Route path='/doc' element={<Doc/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/subscribe' element={<Subscribe />}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/newhome' element={<Newhome/>}/>


      </Routes>
    </div>
      </>

  );
}

export default App;
