import Hero from "./components/sections/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="px-[80px]">
        <Hero />
      </main>
    </div>
  );
}

export default App;
