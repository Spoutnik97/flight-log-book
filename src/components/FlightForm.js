import React from "react";

class FlightForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      departureTime: "",
      arrivalTime: "",
      departureAirport: "",
      arrivalAirport: "",
      picName: "SELF",
      functionOnBoard: "pic",
      aircraftType: "",
      aircraftRego: "",
      dayLanding: 0,
      nightLanding: 0,
      ifrApproach: 0,
      goAround: 0,
      opsCondition: "day",
    };
  }

  handleChange = (e) => {
    e.preventDefault();

    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const date = this.state.date;
    const departureTime = this.state.departureTime;
    const arrivalTime = this.state.arrivalTime;
    const departureAirport = this.state.departureAirport;
    const arrivalAirport = this.state.arrivalAirport;
    const picName = this.state.picName;
    const functionOnBoard = this.state.functionOnBoard;
    const aircraftType = this.state.aircraftType;
    const aircraftRego = this.state.aircraftRego;
    const dayLanding = this.state.dayLanding;
    const nightLanding = this.state.nightLanding;
    const ifrApproach = this.state.ifrApproach;
    const goAround = this.state.goAround;
    const opsCondition = this.state.opsCondition;

    const flight = {
      date: date,
      departureTime: departureTime,
      arrivalTime: arrivalTime,
      departureAirport: departureAirport,
      arrivalAirport: arrivalAirport,
      picName: picName,
      functionOnBoard: functionOnBoard,
      aircraftType: aircraftType,
      aircraftRego: aircraftRego,
      dayLanding: dayLanding,
      nightLanding: nightLanding,
      ifrApproach: ifrApproach,
      goAround: goAround,
      opsCondition: opsCondition,
    };

    this.props.onFlightAdd(flight);
  };

  render() {
    return (
      <form>
        <h2> Date et heure </h2>

        <label>
          Date :
          <input type="date" name="date" onChange={this.handleChange} />
        </label>

        <label>
          Heure début :
          <input
            type="time"
            name="departureTime"
            onChange={this.handleChange}
          />
        </label>

        <label>
          Heure fin :
          <input type="time" name="arrivalTime" onChange={this.handleChange} />
        </label>

        <h2> Informations pilote </h2>

        <label>
          Nom du CDB :
          <input
            type="text"
            value={this.state.picName}
            name="picName"
            size="4"
            onChange={this.handleChange}
          />
        </label>

        <label>
          Fonction :
          <select name="functionOnBoard" onChange={this.handleChange}>
            <option value="pic"> CDB </option>
            <option value="copi"> Copilote </option>
            <option value="dual"> Double Commande </option>
            <option value="instru"> Instructeur </option>
          </select>
        </label>

        <h2> Navigation </h2>

        <label>
          Aérodrome départ :
          <input
            type="text"
            name="departureAirport"
            size="4"
            onChange={this.handleChange}
          />
        </label>

        <label>
          Aérodrome arrivée :
          <input
            type="text"
            name="arrivalAirport"
            size="4"
            onChange={this.handleChange}
          />
        </label>

        <h2> Avion </h2>

        <label>
          Type avion :
          <input type="text" name="aircraftType" onChange={this.handleChange} />
        </label>

        <label>
          Immatriculation :
          <input type="text" name="aircraftRego" onChange={this.handleChange} />
        </label>

        <h2> Procédures et atterrissages </h2>

        <label>
          Nombre atterrissages de jour :
          <input
            type="number"
            name="dayLanding"
            value={this.state.dayLanding}
            size="1"
            onChange={this.handleChange}
          />
        </label>

        <label>
          Nombre atterrissages de nuit :
          <input
            type="number"
            name="nightLanding"
            size="1"
            value={this.state.nightLanding}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Nombre d'approches IFR :
          <input
            type="number"
            name="ifrApproach"
            size="1"
            value={this.state.ifrApproach}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Nombre de remises de gaz :
          <input
            type="number"
            name="goAround"
            size="1"
            value={this.state.goAround}
            onChange={this.handleChange}
          />
        </label>

        <h2> Conditions opérationnelles </h2>

        <label>
          Conditions opérationnelles :
          <select name="opsCondition" onChange={this.handleChange}>
            <option value="day"> VFR de jour </option>
            <option value="night"> VFR de nuit </option>
            <option value="ifr"> IFR </option>
          </select>
        </label>

        <input type="submit" value="Ajouter vol" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default FlightForm;
