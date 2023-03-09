import './App.css';
import NavBar from './components/Home/NavBar';
import Footer from './components/Home/Footer';
import Header from './components/Home/Header';
import HowToBuy from './components/Home/HowToBuy';
import Packages from './components/Home/Packages';
import Stores from './components/Home/Stores';
import ProductForm from './components/Home/ProductForm';



function App() {

  return (
    <div className="App">
      <NavBar/>
      <Header />
      <ProductForm/>
      <HowToBuy/>
      <Stores />
      <Packages />
      <Footer />
    </div>
  );
}

export default App;
