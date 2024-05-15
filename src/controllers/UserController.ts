import { Repository } from 'typeorm';
import { User } from '../models/User.js';
import  {createUserRepository} from '../models/repositories/UserRepository.js';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

// bcrypt config
const saltRounds = 10;

class UserController {
  private userRepository: Repository<User>;

  constructor() {
    this.initializeRepository();
  }

  private async initializeRepository() {
    this.userRepository = await createUserRepository();
  }

  public saveUser = async (req: Request, res: Response) => {
    // get from the body, the name and password
    const { name, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User();
    user.name = name;
    user.password = hashedPassword;

    await this.userRepository.save(user);

    res.send('User saved').status(200);
  };

}

export default new UserController();