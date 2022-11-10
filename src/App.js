import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Homepage from "./components/homepage/homepage";
import ConnectWallet from "./components/connect_wallet/connect_wallet";

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/connect_wallet' element={<ConnectWallet />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
