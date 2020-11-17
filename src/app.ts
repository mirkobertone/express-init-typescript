import express, { Request, Response } from 'express';
import path from 'path';

const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(5000, () => {
  console.log("Server running");
});
