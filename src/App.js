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
      background: 'rgb(255,42,132)',
      background: 'linear-gradient(0deg, rgba(255,42,132,1) 0%, rgba(253,187,45,1) 100%)'
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
