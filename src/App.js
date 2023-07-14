import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import Education from './components/education'
import Contact from './components/contact'
import Nav from './components/nav'
import Footer from './components/footer'
//import backgroundImg from './assets/background.jpg'



function App() {
  return (
    <>
      <div
        style={{
         // background: 'black',
          //color: 'white',
         // background: 'rgb(131,58,180)',
          //background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
          //backgroundImage: `url("${backgroundImg}")`,
          //backgroundSize: 'cover',
          //backgroundPosition: 'center',
        }}
      >
        <Nav />
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        </div>
    </>
  );
}

export default App;
