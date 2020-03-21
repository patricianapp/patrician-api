import { Repository, EntityRepository } from "typeorm";
import { User } from "../../entities/user";
import { AuthCredentialsInput } from "../types/auth-input";
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsInput): Promise<string> {
    const { username, password } = authCredentialsDto;

    const user = new User();
    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, user.salt);
    user.collection = [];
    user.followers = [];
    user.following = [];

    try {
      // await user.save();
      await this.save(user);
      return `User ${user.username} successfully saved`;
    } catch (error) {
      switch (error.code) {
        case '23505': // TODO: This doesn't seem to be catching
          throw new Error('Username already exists');
          break;
        default:
          throw new Error();
      }
    }
  }

  async validateUserPassword(authCredentialsDto: AuthCredentialsInput): Promise<string> {
    const { username, password } = authCredentialsDto;
    const user = await this.findOne({username});

    if (user && user.validatePassword(password)) {
      return user.username;
    } else {
      return null;
    }
  }

}
