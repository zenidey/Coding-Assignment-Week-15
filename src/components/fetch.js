const ENDPOINT = 'https://621868501a1ba20cbaa04c74.mockapi.io/planes';

/* fetch(ENDPOINT, {
  method: 'POST',
  headers: {
    'Content-Type' : 'application/json'
  },
  body: JSON.stringify({
    name: 'test plane 1'
  })
});    */ 

fetch(`${ENDPOINT}/2`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
 });   
 
/* fetch(`${ENDPOINT}/1`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'test plane 1',
    passengers: [
      {name: 'Darth Vader', area: 'E-30'},
      {name: 'Luke Skywalker', area: 'C-24'},
      {name: 'Princess Leia', area: 'F-21'}
    ]
  })
 });    */