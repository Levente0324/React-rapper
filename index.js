import express from 'express';
import mysql2 from 'mysql2';
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rapper'
});


app.get('/rapperek', (req, res) => {
  db.query('SELECT * FROM rapperek', (err, results) => {
    if (err) {
      console.log(err);
      return res.json(err);
    } else {
      res.set('Access-Control-Allow-Origin', '*');
      return res.json(results);
    }
  });
});


app.post('/rappereket', (req, res) => {
  const newTopic = req.body;
  const query = 'INSERT INTO rapperek SET ?';
  db.query(query, newTopic, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      newTopic.id = result.insertId;
      return res.status(201).json(newTopic);
    }
  });
});


app.listen(3000, () => {
    console.log(`A szerver fut a http://localhost:3000 címen`);
  });