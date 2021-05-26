import react from "react"
import { BrowserRouter} from "react-router-dom"


import './App.css';

import Routes from "./Routes"
import Header from './componentes/header/index'
import Footer from './componentes/footer/index'

function App (props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
