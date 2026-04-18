import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { Tutorials } from './components/Tutorials'
import { Tools } from './components/Tools'
import { About } from './components/About'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Header />
      <main>
        <Hero />
        <Products />
        <Tutorials />
        <Tools />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
