import { Movie } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../../errors/AppError";
import { CreateMovieDTO } from "../dtos/CreateMovieDTO";


export class CreateMovieCase{
  async execute({ title, duration, realease_date }: CreateMovieDTO): Promise<Movie>{
    const movieAlreadyExists = await prisma.movie.findUnique({
      where:{
        title,
      }
    })

    if(movieAlreadyExists){
      throw new AppError("Movie already exists")
    }

    const movie = await prisma.movie.create({
      data:{
        title,
        duration,
        realease_date,
      },
    })

    return movie;
  }
}