import React from 'react';
import Header from './routes/Header';
import About from './routes/About';
import Skills from './routes/Skills';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import Footer from './routes/Footer';
import ResumeDownload from './routes/ResumeDownload';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
       
        <Projects />
        <Skills />
        <ResumeDownload />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
