
// 1st import
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data/data.json'
import SelectedBeast from './SelectedBeast';


// 2nd Class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
      image_url: '',
      description: '',
    }
  }

  handleOpenModal = (title, image_url, description) => {
    this.setState({
      showModal: true,
      title: title,
      image_url: image_url,
      description: description
    });
    console.log(this.state.description)
  }
  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <>
        <Header />

        <Main
          data={data}
          handleOpenModal={this.handleOpenModal}
        />
        <SelectedBeast
          data={data}
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}

        />
        <Footer />
      </>
    )
  }
}


// 3rd export component soo other files can import
export default App;
