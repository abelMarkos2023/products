import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import Testemonials from "./components/Testemonials/Testemonials";
import Virtual from "./components/Virtual/Virtual";

function App() {
    return ( 
        <div className="app">
            <Header></Header>
            <Hero />
            <Slider />
            <Virtual />
            <Products />
            <Testemonials />
            <Footer />
        </div>
    );
}

export default App;