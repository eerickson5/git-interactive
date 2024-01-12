import './App.css';
import InteractiveArea from './InteractiveArea';
import TerminalDashboard from './TerminalDashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>git-interactive</h1>
      </header>
      <body>
        <InteractiveArea/>
        <TerminalDashboard/>
      </body>
    </div>
  );
}

export default App;
