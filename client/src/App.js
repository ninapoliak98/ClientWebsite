import logo from './logo.svg';
import './App.css';
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="w-full flex flex-col h-screen justify-between" >
      <Main/>
        <Footer/>
    </div>
  );
}

export default App;
