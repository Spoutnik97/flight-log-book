import React from "react";
import "./App.css";

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

export default App;
