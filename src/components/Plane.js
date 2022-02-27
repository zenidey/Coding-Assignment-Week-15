import React from "react";
import { NewPassengerForm } from './NewPassengerForm';


export const Plane = (props) => {

    const { plane, updatePlane} = props;

    // console.log(plane);
    // console.log(plane.passengers);

    const deletePlane = () => {
        props.deletePlane(plane);
    }

    const deletePassenger = (passenger) => {
        console.log('inside deletePassenger function in Plane');
        const updatedPlane = {
            ...plane,
            passengers: plane.passengers.filter((x) => x !== passenger) //removed id
        };
        console.log(passenger, 'was deleted');
        updatePlane(updatedPlane);
    }

    const addNewPassenger = (passenger) => {
        console.log('inside addNewPassenger in Plane.js');
		console.log('passenger.name is: ' + passenger.name);
		console.log('passenger.seat is ' + passenger.seat);
        return updatePlane({...plane, passengers: [...plane.passengers, passenger]})
    };

    const passengers = () => (  //creating passengers
        <ul>
            {plane.passengers.map((passenger, index) => (
                <ul className="d-inline p-2" key={index}>
                    <h5>{`name: ${passenger.name}, seat: ${passenger.seat}`}</h5>
                    <button className="btn btn-danger btn-sm" onClick={(e) => deletePassenger(passenger)}>delete</button> 
                    {/* removed id from passenger*/}
                </ul>
            ))}
            
        </ul>
    );


    return (
        <div>

        <div className="card">

            <div className="card-title text-center mt-3">
                <h1>{plane.model}</h1> <button className="btn btn-danger" onClick={deletePlane}>delete plane</button>
            </div>

            <div className="card-body">
            {
                passengers({ passengers, planeId: plane.id, deletePassenger })
            }
            </div>

            <div className="card-footer text-center">
                <NewPassengerForm addNewPassenger={addNewPassenger} />
            </div>
        </div>
        <br></br>
        </div>

    );
};

