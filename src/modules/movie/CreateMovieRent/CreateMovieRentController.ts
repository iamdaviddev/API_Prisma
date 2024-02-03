import { Request, Response } from "express";
import { CreateMovieRentCase } from "./CreateMovieRentCase";

export class CreateMovieRentController {
  async handle(req: Request, res: Response){
    const { movie_id, user_id } = req.body

    const createMovieRentCase = new CreateMovieRentCase();

    await createMovieRentCase.execute({ movie_id, user_id });

    return res.status(201).send();
  }
    
}