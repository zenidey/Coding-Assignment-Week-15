import React, {useState} from 'react';

export const NewPlaneForm = (props) => {
	const[model, setModel] = useState('');

	const onSubmit = (e) => {
		console.log('inside NewPlaneForm');
		e.preventDefault();

		if (model){
		console.log('New Plane Name: ' + model);
		console.log('props: ', props);
		props.createPlane({model});
        setModel('');

		} 
		else{
			console.log('invalid input');
		}
	};

	return(
		<div className="card m-5">
			<div className="card-header text-center">
			<h1>add a new plane </h1>
			</div>

			<div className="card-body text-center">
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='plane'
					onChange={(e) => setModel(e.target.value)}
					value={model}
				/>
				<button className="btn btn-primary m-3" type='submit' value='submit'>add plane</button>
				</form>
			</div>
			<br></br>

			</div>
	)
};

