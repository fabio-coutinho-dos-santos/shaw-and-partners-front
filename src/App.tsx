/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import './App.sass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import { UserContextProvider } from './contexts/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="details" element={<Details />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
