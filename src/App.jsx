
import './App.css'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main id="main">
      <About />
      <Resume />
      <Portfolio />
      <Services />
      <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
