import './App.css';
import {GitProvider} from './GitProvider';
import GitHeader from './GitHeader';
import Home from './Home';

function App() {
  return (
    <GitProvider>
      <div className="App">
        <header className="App-header">
          <GitHeader/>
        </header>
      </div>
      <Home/>
    </GitProvider>
    
  );
}

export default App;
