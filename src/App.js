import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import Education from './components/education'
import Contact from './components/contact'
import Nav from './components/nav'
import Footer from './components/footer'



function App() {
  return (
    <>
      <div
        style={{
          // background: 'black',
          //color: 'white'
        }}
      >
        <Nav/>
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
      </div>
    </>
  );
}

export default App;
