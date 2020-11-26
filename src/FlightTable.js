import React from 'react';
import Flight from "./Flight";

class FlightTable extends React.Component{
    render() {
        const flights = this.props.details;

        return (
            <table width="100%">
                <thead>
                    <tr>
                        <th> Date </th>
                        <th> Heure de départ </th>
                        <th> Aérodrome de départ </th>
                        <th> Heure d'arrivée </th>
                        <th> Aérodrome d'arrivée</th>
                        <th> Type avion </th>
                        <th> Immatriculation </th>
                        <th> Durée du vol </th>
                    </tr>
                </thead>

                <tbody>
                    {flights.map(
                        (flight) => {
                            return (
                                <Flight details={flight} />
                            )
                        }
                    )}
                </tbody>
            </table>
        )

    }
}

export default FlightTable;