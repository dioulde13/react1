import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header';
import Shape from './components/Shape/Shape';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Login_up from './components/Login/Login_up';
import Login_in from './components/Login/Login_in';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <Header />
      <Shape />
      <HomePage />
      <Login_in/>
      <Login_up/>
      <Footer />
        </div>
    </div>
  );
}
export default App;
