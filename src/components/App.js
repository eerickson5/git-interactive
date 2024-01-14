import './App.css';
import InteractiveArea from './InteractiveArea';
import TerminalDashboard from './TerminalDashboard';
import Terminal from './Terminal';
import {GitProvider} from './GitProvider';
import GitHeader from './GitHeader';

function App() {
  return (
    <GitProvider>
      <div className="App">
        <header className="App-header">
          <GitHeader/>
        </header>

        <InteractiveArea/>
        <TerminalDashboard/>
        <Terminal/>
      </div>
    </GitProvider>
    
  );
}

export default App;
