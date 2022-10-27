
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {ListDepart, NavBar} from './components/index'
import {Home} from './pages/index'
function App() {
  return (
   
 <div className='App'>
  <Router>
     <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/list' element={<ListDepart/>}/>
     </Routes>
</Router>
 </div>

  
  );
}

export default App;
