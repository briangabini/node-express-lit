import { User } from '../User.js';
import { AppDataSource } from '../../data-source.js';

export async function createUserRepository() {
  // Get a connection to the database
  const connection = await AppDataSource.initialize();

  // Get the repository for the User entity
  const userRepository = connection.getRepository(User);

  return userRepository;
}
