import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
