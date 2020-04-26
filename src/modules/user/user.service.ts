import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { BaseService } from 'warthog';
import * as bcrypt from 'bcrypt';
import { User } from './user.model';
import { UserCreateInput } from '../../../generated';
import { CollectionItem } from '../collection-item/collection-item.model';

@Service('UserService')
export class UserService extends BaseService<User> {
	constructor(@InjectRepository(User) protected readonly repository: Repository<User>) {
		super(User, repository);
	}

	async create(user: UserCreateInput, userId: string) {
		const salt = await bcrypt.genSalt();
		user.password = await bcrypt.hash(user.password, salt);
		const collection: CollectionItem[] = [];

		const payload = {
			...user,
			salt,
			collection,
		};

		return super.create(payload, userId);
	}

	// TODO: Sign in
	// async validateUserPassword(authCredentialsInput: UserCreateInput): Promise<string> {
	//   const { username, password } = authCredentialsInput;
	//   const user = await this.findOne({username});

	//   if (user && user.password === bcrypt.hash(user.password, user.salt)) {
	//     return user.username;
	//   } else {
	//     return 'user not found';
	//   }
	// }

	async hardDelete(id: string): Promise<string> {
		const user = await this.repository.findOne(id);
		if (user) {
			await this.repository.remove(user);
			return Promise.resolve(`User ${id} deleted.`);
		} else {
			return Promise.resolve('User not found'); // TODO: Make this an error
		}
	}
}
