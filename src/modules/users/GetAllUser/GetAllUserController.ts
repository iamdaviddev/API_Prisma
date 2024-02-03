import { Request, Response } from "express";
import { GetAllUserCase } from "./GetAllUserCase";

export class GetAllUserController {
  async handle(req: Request, res: Response) {
    const getAllUserCase = new GetAllUserCase();

    const result = await getAllUserCase.execute();

    return res.status(201).json(result)
  }
}