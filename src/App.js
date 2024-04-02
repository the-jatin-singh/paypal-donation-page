import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import ProfileDisplay from "./components/ProfileDisplay/ProfileDisplay";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <ProfileDisplay />
      <Hero />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
