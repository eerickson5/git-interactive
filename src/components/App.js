import './App.css';
import {GitProvider} from '../GitProvider';
import GitHeader from './GitHeader';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <GitProvider>
      <div className="App">

        <header className="App-header">
          <GitHeader/>
        </header>

        <Outlet/>
      </div>
    </GitProvider>
    
  );
}

export default App;
