/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import './App.sass';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Content from './pages/Content/Content';
// import dotenv from 'dotenv'
// dotenv.config();

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
