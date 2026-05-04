import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Proyects" // Corregido el nombre
import Contacts from "./components/Contacts"
import Navbar from "./components/Navbar"

function App() {
  return (
    <main className="main-layout">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contacts />
    </main>
  )
}

export default App