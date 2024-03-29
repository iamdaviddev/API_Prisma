import { Movie } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class GetMovieByReleaseDateCase {
  async execute(): Promise<Movie[]>{
    const movies = await prisma.movie.findMany({
      orderBy: {
        realease_date: "desc"
      },
      include: {
        movie_rent: {
          select: {
            user:{
              select: {
                name: true,
                email: true
              }
            }
          }
        }
      }
    })

    return movies;
  }
}