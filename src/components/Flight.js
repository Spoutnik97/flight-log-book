import React from "react";

class Flight extends React.Component {
  /*getFlightTime = (start,end) => {
        let hours = end.valueAsDate.getHours() - start.asDate.getHours();
        let minutes = end.valueAsDate.getMinutes() - start.valueAsDate.getMinutes();

        let elapsedTime = hours*60 + minutes;
        
        return Math.floor(elapsedTime / 60) + elapsedTime % 60;

    };*/

  render() {
    const flight = this.props.details;
    return (
      <tr>
        <td> {flight.date} </td>
        <td> {flight.departureTime} </td>
        <td> {flight.departureAirport} </td>
        <td> {flight.arrivalTime} </td>
        <td> {flight.arrivalAirport} </td>
        <td> {flight.aircraftType} </td>
        <td> {flight.aircraftRego} </td>
        <td> {flight.arrivalTime} </td>
      </tr>
    );
  }
}

export default Flight;
