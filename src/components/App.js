import './App.css';
import InteractiveArea from './InteractiveArea';
import TerminalDashboard from './TerminalDashboard';


const consoleOutputs = [
  "1 file changed. Your branch is ahead of 'origin/main' by 1 commit.",
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>git-interactive</h1>
      </header>

      <InteractiveArea/>
      <TerminalDashboard/>
    </div>
  );
}

export default App;
