import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import AboutGit from './pages/AboutGit';
import App from './components/App';

const routes = [
    {
        path: '/', 
        element:<App/>, 
        children:[
            {path: '/', element: <Home/>},
            {path: '/about', element: <AboutMe/>},
            {path: '/learn', element: <AboutGit/>}
        ]
    }
]

export default routes;