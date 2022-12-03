
import './App.css';
import {Header} from "./common/components/Header";
import {Home} from "./home/components/Home"
import 'antd-v3/dist/antd-v3.css';
import { Footer } from './common/components/Footer';
function App() {
  return (
  <div className='App'>
  <Header></Header>
  <Home></Home>
  <Footer></Footer>
  </div>
  );
}

export default App;
