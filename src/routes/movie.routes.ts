import { Router } from "express";
import { CreateMovieController } from "../modules/movie/CreateMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/movie/CreateMovieRent/CreateMovieRentController";
import { GetMovieByReleaseDateController } from "../modules/movie/gerMovieByReleaseDate/GetMovieByReleaseDateController";

const createMovieController = new CreateMovieController();
const getMovieByReleaseDateController = new GetMovieByReleaseDateController();
const createMovieRentController = new CreateMovieRentController();


const movieRoutes = Router();

movieRoutes.post('/', createMovieController.handle);
movieRoutes.get('/release', getMovieByReleaseDateController.handle)
movieRoutes.post('/rent', createMovieRentController.handle);

export { movieRoutes };