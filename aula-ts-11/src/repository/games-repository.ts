import { clientDB } from "../database/db.connection";
import { CreateGame, Game } from "../protocols/game-protocol";

const games: Game[] = [];

function getGames() {
  return clientDB.query<Game>("SELECT * FROM games;");
}

function createGame(game: CreateGame) {
  return clientDB.query(`
    INSERT INTO games (title, platform) VALUES ($1, $2);`,
    [game.title, game.platform]
  );
}

function getGameByTitleAndPlatform(game: CreateGame) {
  return clientDB.query<Game>(
    `SELECT * FROM games WHERE title = $1 AND platform = $2`,
    [game.title, game.platform]
  );
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
};

export default gamesRepository;