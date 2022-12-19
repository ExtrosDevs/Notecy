import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Test from './Test';
import Auth from './pages/Auth/Auth'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';



const App = () =>{
  return (

    <Router>
      <Routes>


        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth login />} />
        <Route path='/signup' element={<Auth />} />


        <Route path='/:id' element={<Home />} />

        <Route path='/test' element={<Test />} />
      </Routes>
    </Router >
  );
}

export default App;
