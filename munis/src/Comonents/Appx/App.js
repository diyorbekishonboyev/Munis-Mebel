import React from 'react';
import Navbar from '../Navbar/navbar';
import FirstMain from '../firstMain/firstmain';
import Maingrid from '../Maingrid/maingrid';
import Mainimg from '../Mainimgs/mainimg';
import Footer from '../Footer/footer';


function App() {
  return (
    <div className="App">
    <Navbar />
    <FirstMain />
    <Maingrid />
    <Mainimg />
    <Footer />
    </div>
  );
}

export default App;
