import React from "react";
import { Plane } from './Plane';
import { planesApi } from "../rest/PlanesApi";
import { NewPlaneForm } from "./NewPlaneForm";


export class PlaneList extends React.Component {

    state = {
        planes: [],
    };

    componentDidMount() {
        this.fetchPlanes();
    };

    fetchPlanes = async () => {
        const planes = await planesApi.get();
        this.setState({ planes });
    };

    createPlane = async (plane) => {
        await planesApi.post(plane);
        this.fetchPlanes();
    }

    updatePlane = async (plane) => {
        await planesApi.put(plane);
        this.fetchPlanes();
    };

    deletePlane = async (plane) => {
        await planesApi.delete(plane);
        this.fetchPlanes();
    }

    render() {
        return(
            <div className='container'>

                <div>
                    <NewPlaneForm createPlane={this.createPlane} />
                </div>

                <div>

                {this.state.planes.map((plane) => (
                    <Plane
                    plane={plane}
                    key={plane.id}
                    updatePlane={this.updatePlane}
                    deletePlane={this.deletePlane}
                    />
                ))}
                </div>

            </div>
        )
    }
}
