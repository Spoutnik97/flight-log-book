import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import FlightTable from "./components/FlightTable";
import FlightForm from "./components/FlightForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [
        {
          date: "2020-01-01",
          departureTime: "10:00",
          arrivalTime: "11:00",
          departureAirport: "LFLN",
          arrivalAirport: "LFLN",
          picName: "SELF",
          functionOnBoard: "pic",
          aircraftType: "TB20",
          aircraftRego: "F-GGNV",
          flightTime: 1,
          dayLanding: 3,
          nightLanding: 0,
          ifrApproach: 0,
          goAround: 0,
          opsCondition: "day",
        },
      ],
    };
  }

  handleChange = (e) => {
    e.preventDefault();

    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    this.setState({ [name]: value });
  };

  handleAdd = (flight) => {
    const flights = this.state.flights.slice();
    flights.push(flight);

    this.setState({ flights: flights });
  };

  render() {
    return (
      <div>
        <h1> Entrer un nouveau vol </h1>

        <FlightForm onFlightAdd={this.handleAdd} />

        <h2> Résumé des vols entrés </h2>

        <FlightTable details={this.state.flights} />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
