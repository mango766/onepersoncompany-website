import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Products } from '@/components/Products'
import { Tutorials } from '@/components/Tutorials'
import { Tools } from '@/components/Tools'
import { About } from '@/components/About'
import { Newsletter } from '@/components/Newsletter'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
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
