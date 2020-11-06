import fetch from 'superagent'

const URL = 'https://radiant-ridge-10683.herokuapp.com/'

export async function fetchShips() {
    try {
        const response = await fetch.get(`${URL}ships`);
        console.log(response.body)
        return response.body;
    } catch (err) { throw err; }
}

export async function fetchShip(id) {
    try {
        const ship = await fetch.get(`${URL}ships/${id}`);
        return ship.body;
    } catch (err) { throw err; }
}

export async function fetchClasses() {
    try {
        const classes = await fetch.get(`${URL}classes`);
        return classes.body;
    } catch (err) { throw err; }
}
export async function updateShips(id, newShip) {
    try {
        await fetch
            .put(`${URL}ships/${id}`)
            .send(newShip);
    } catch (err) { throw err; }
}

export async function deleteShip(id) {
    try {
        await fetch.delete(`${URL}ships/${id}`);
        return;
    } catch (err) { throw err; }
}