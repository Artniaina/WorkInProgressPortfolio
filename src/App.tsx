import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <div className='h-[90vh]'>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-20 " >
      <Hero />  
      </main>
      </div>
  
      <section className="bg-cyber-purple/10 py-20">
      <Skills />
      </section>

      <Footer />
    </div>
  );
}

export default App;