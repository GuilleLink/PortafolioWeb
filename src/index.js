import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Christmas from "./Components/Christmas/Christmas";
import Subheader from "./Components/Subheader/Subheader";
import Disney from "./Components/Disney/Disney";
import Movies from "./Components/Movies/Movies";

const App = () => {
  return( 
    <div className='main-div'>
      <Header />
      <Subheader title='Places I Like To Visit'/>
      <Disney />
      <Subheader title='Places I Want To Visit'/>
      <Subheader title='Favourite Movies & Series'/>
      <Movies />
      <Subheader title='Favourite Holiday'/>
      <Christmas />
      <Footer />
    </div>);
};

ReactDOM.render(<App />, document.querySelector("#root"));