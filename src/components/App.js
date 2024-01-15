import './App.css';
import {GitProvider} from './GitProvider';
import GitHeader from './GitHeader';
import Home from './Home';
import  { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import AboutMe from './AboutMe';
import AboutGit from './AboutGit';

const router = createBrowserRouter([
  {path: '/', element: <Home/>},
  {path: '/about', element: <AboutMe/>},
  {path: '/learn', element: <AboutGit/>}
])

function App() {
  return (
    <GitProvider>
      <div className="App">
        <header className="App-header">
          <GitHeader/>
        </header>
      </div>

      <RouterProvider router={router}/>
    </GitProvider>
    
  );
}

export default App;
