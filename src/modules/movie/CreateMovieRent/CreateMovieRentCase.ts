import { prisma } from "../../../prisma/client";
import { CreateMovieRentDTO } from "../dtos/CreateMovieRentDTO";
import { AppError } from "../../../errors/AppError";

export class CreateMovieRentCase {
  async execute({ movie_id, user_id }: CreateMovieRentDTO): Promise<void> {
    //Verificar se existe filme
    const movieExists = await prisma.movie.findUnique({
      where: {
        id: movie_id,
      }
    });

    if(!movieExists) {
      throw new AppError("Movie does not exist!")
    }

    //Verificar se filme já está alugado
    const movieAlreadyRented = await prisma.movieRent.findFirst({
      where: {
        movie_id,
      }
    })

    if(movieAlreadyRented) {
      throw new AppError("Movie already rented!")
    }

    //Verificar se usuário existe
    const userExists = await prisma.user.findUnique({
      where: {
        id: user_id,
      }
    });

    if(!userExists){
      throw new AppError("User does not exist!")
    }
    //Criar aluguel
    await prisma.movieRent.create({
      data: {
        movie_id,
        user_id,
      }
    })
    
  }
}