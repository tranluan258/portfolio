import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import { ThemeProvider } from "../components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Header />
      <Hero />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
