import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Cards from './components/Cards'

import moduleName from './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Cards />
      


    </div>
  );
}

export default App;
