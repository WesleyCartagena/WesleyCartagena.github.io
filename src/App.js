import { Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
//import Contact from './components/Contact'
import Layout from './components/Layout'
import Projects from './components/Projects'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="about" element={<About/>}/>
          {/*<Route path="/contact" element={<Contact/>}/>*/}
           <Route path="/Projects" element={<Projects/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
