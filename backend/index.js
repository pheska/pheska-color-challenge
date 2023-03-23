const express = require('express');
const cors = require('cors');

const { Pool } = require('pg');

const myURI = 'postgres://vfzaxzyi:z7_uov14d5GNqtca_m-GSWY68pwI2FL2@mahmud.db.elephantsql.com/vfzaxzyi';

const URI = process.env.PG_URI || myURI;

const pool = new Pool({
  connectionString: URI,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// const db = pg.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"colors"
// })
function query(text, params, callback) {
  console.log('executed query', text);
  return pool.query(text, params, callback);
}

app.get('/', (req, res) => {
  //res.json("hello this is the server")
  const q = 'SELECT * FROM color';
  query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data.rows);
  });
});

app.listen(3333, () => {
  console.log('Connected to server!');
});
