import { Request, Response } from "express";
import { CreateMovieCase } from './CreateMovieCase';

export class CreateMovieController {
  async handle(req: Request, res: Response) {
    const { title, duration, realease_date } = req.body;

    const createMovieCase = new CreateMovieCase()
    const result = await createMovieCase.execute({ title, duration, realease_date })

    return res.status(201).json(result)
  }
}