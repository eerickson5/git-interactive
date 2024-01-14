import './App.css';
import InteractiveArea from './InteractiveArea';
import TerminalDashboard from './TerminalDashboard';
import Terminal from './Terminal';
import {GitProvider} from './GitProvider';
import GitHeader from './GitHeader';
import TerminalsContainer from './TerminalsContainer';

function App() {
  return (
    <GitProvider>
      <div className="App">
        <header className="App-header">
          <GitHeader/>
        </header>

        <InteractiveArea/>
        <TerminalsContainer/>
      </div>
    </GitProvider>
    
  );
}

export default App;
