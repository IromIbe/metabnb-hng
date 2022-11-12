import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Homepage from "./components/homepage/homepage";
import Place from "./components/connect_wallet/place";

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/place' element={<Place />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
