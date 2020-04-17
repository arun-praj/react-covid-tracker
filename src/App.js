import React, { Component } from "react";

import { fetchData } from "./api";
import { Cards, Chart, CountryPicker } from "./components";

import "./App.scss";

class App extends Component {
   state = {
      data: {},
   };
   async componentDidMount() {
      const data = await fetchData();

      this.setState({
         data: data,
      });
   }
   render() {
      const { data } = this.state;
      return (
         <main className="mainContainer">
            <Cards data={data} />
            <Chart />
            <CountryPicker />
         </main>
      );
   }
}

export default App;
