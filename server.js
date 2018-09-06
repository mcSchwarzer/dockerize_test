const express = require('express');
const server = express();
const PORT = 3000;


const { Pool, Client } = require('pg')
const connectionString = 'postgresql://postgres:rfvcde4321@localhost:5432/personen'

const pool = new Pool({
  connectionString: connectionString,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})


server.listen(PORT, () => console.log(`Server running on ${PORT}`));
server.get('/', (req, res) => res.status(200).send('hello'));