import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <div className="App">
      <nav style={{display:'flex',justifyContent:"space-around",margin:'20px'}}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </ nav>
      <MainRoutes/>
    </div>
  );
}

export default App;
