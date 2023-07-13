import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import Education from './components/education'
import Contact from './components/contact'



function App() {
  return (
    <>
      <div
        style={{
          // background: 'black',
          //color: 'white'
        }}
      >
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
