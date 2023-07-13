import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import Education from './components/education'



function App() {
  return (
    <>
       <div
    style={{
     // background: 'rgb(211,211,211)',
    }}
  >
    <Home/> 
    <About/>
    <Education/>
    <Skills/>
    <Projects/>
    </div>
    </>
  );
}

export default App;
