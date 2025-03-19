import { useState, useEffect } from 'react';
import { Gamepad2, Loader2 } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Hero from './components/Hero';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cyber-dark flex flex-col items-center justify-center">
        <div className="animate-bounce mb-8">
          <Gamepad2 className="w-16 h-16 text-purple-300" />
        </div>
        <div className="flex items-center gap-3">
          <Loader2 className="w-6 h-6 text-purple-300 animate-spin" />
          <h2 className="text-2xl font-bold text-purple-300 animate-pulse">
            Loading ...
          </h2>
        </div>
        <div className="mt-8 w-64 h-2 bg-purple-800 rounded-full overflow-hidden">
          <div className="h-full bg-purple-400 animate-[loading_5s_ease-in-out]" />
        </div>
      </div>
    );
  }

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
