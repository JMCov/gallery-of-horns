
// 1st import
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


// 2nd Class component
class App extends React.Component{
  render(){
    return (
      <>
      <Header />
      <Main />
      <Footer />
      </>
    )
  }
}


// 3rd export component soo other files can import
export default App;
