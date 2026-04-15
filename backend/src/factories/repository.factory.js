import UserRepository from "../infrastructure/repositories/UserRepository.js";
import AuthRepository from "../infrastructure/repositories/AuthRepository.js";
import DeckRepository from "../infrastructure/repositories/DeckRepository.js";
import CardRepository from "../infrastructure/repositories/CardRepository.js";

const repositoryFactory = ({ databaseConnection }) => {
  const authRepository = new AuthRepository(databaseConnection);
  const userRepository = new UserRepository(databaseConnection);
  const deckRepository = new DeckRepository(databaseConnection);
  const cardRepository = new CardRepository(databaseConnection);

  return { authRepository, userRepository, deckRepository, cardRepository };
};

export default repositoryFactory;
