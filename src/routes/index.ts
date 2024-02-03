import { Router } from "express";
import { userRoutes } from "./User.routes";
import { movieRoutes } from "./movie.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/movies", movieRoutes)

export { routes };