import { Router } from "express";

import { CreateUserController } from "../modules/users/usecase/CreateUserController";
import { GetAllUserController } from "../modules/users/GetAllUser/GetAllUserController";

const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();

const userRoutes = Router();

userRoutes.post('/', createUserController.handle);
userRoutes.get('/', getAllUserController.handle);

export { userRoutes };