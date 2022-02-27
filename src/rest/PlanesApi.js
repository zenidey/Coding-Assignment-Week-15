const PLANES_ENDPOINT = 'https://621868501a1ba20cbaa04c74.mockapi.io/planes';


class PlanesApi { // this class handles all the api calls

    get = async () => { 
        try {
            const resp = await fetch(PLANES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('Oops, looks like fetchPlanes had an issue.', e);
        }
    }

    post = async (plane) => { 
        try{
            console.log(`${PLANES_ENDPOINT}`);
            const resp = await fetch(`${PLANES_ENDPOINT}/`, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(plane)

            });
            return await resp.json();
        }
        catch(e){
            console.log('Oops, looks like creating/POST planes had an issue.');
        }
    }

    put = async (plane) => {
        try {
            const resp = await fetch(`${PLANES_ENDPOINT}/${plane.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(plane)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating planes had an issue.', e);
        }
    }

    delete = async (plane) => { 
        try {
            const resp = await fetch(`${PLANES_ENDPOINT}/${plane.id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
            });
            return await resp.json();
        } catch(e) {
            console.log('Problem deleting plane.', e);
        }
    }

}

export const planesApi = new PlanesApi();

