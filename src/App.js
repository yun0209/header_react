import './App.css';
import Swiper_yys from './Swiper_yys';
import Header_yys from './Header_yys';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
           <Header_yys/>
           <Swiper_yys keynm='yswiper' />
           <Footer />
    </div>
  );
}

export default App;
