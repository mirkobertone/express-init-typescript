import { Router } from "express";
import { ExampleController } from "../controllers/example.controller";
import { Routes } from "../interfaces/routes.interface";

export class ExampleRoute implements Routes {
    public path = '/example';
    public router = Router();
    public exampleController = new ExampleController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.exampleController.getExample);
      }
}