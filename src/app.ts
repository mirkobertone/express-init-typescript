import express, { Request, Response } from 'express';
import { Routes } from './interfaces/routes.interface';
import { ExampleRoute } from './routes/example.route';

const app = express();
const routes: Routes[] = [];

app.use(express.static('public'));

routes.push(new ExampleRoute());

routes.forEach(route => {
  app.use("/", route.router);
})



app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(5000, () => {
  console.log("Server running");
});

