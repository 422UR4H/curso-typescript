import gamesRepository from "../repository/games-repository";
import { CreateGame } from "./../protocols/game-protocol";

function getGames() {
  return gamesRepository.getGames();
}

async function createGame(game: CreateGame) {
  if (await gameAlreadyExists(game)) {
    throw { message: "Game already exists" }
  }
  await gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: CreateGame): Promise<boolean> {
  const result = await gamesRepository.getGameByTitleAndPlatform(game);
  return result.rowCount > 0;
}

const gamesService = {
  getGames,
  createGame
}
export default gamesService;