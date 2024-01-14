import './App.css';
import InteractiveArea from './InteractiveArea';
import TerminalDashboard from './TerminalDashboard';
import Terminal from './Terminal';
import {GitProvider} from './GitProvider';
import {Icon} from 'semantic-ui-react'

function App() {
  return (
    <GitProvider>
      <div className="App">
        <header className="App-header">
          <h1>git-interactive</h1>
          <Icon name='github'/>
        </header>

        <InteractiveArea/>
        <TerminalDashboard/>
        <Terminal/>
      </div>
    </GitProvider>
    
  );
}

export default App;
