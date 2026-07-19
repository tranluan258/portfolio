import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { ThemeProvider } from "../components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
