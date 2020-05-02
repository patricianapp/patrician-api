import 'reflect-metadata';
import * as jwt from 'jsonwebtoken';
import { BaseContext, Server, authChecker } from 'warthog';
import { Request } from 'express';
import { Logger } from './logger';

interface Context extends BaseContext {
	user: UserContext;
}

type jwtPayload = {
	username: string;
};

type UserContext = {
	id: string;
	permissions: Array<string>;
};

export function getServer(AppOptions = {}, dbOptions = {}) {
	return new Server<Context>(
		{
			authChecker,
			context: (req: Request) => {
				const user: UserContext = {
					id: '',
					permissions: [],
				};

				const token = req.headers?.authorization?.split(' ')[1];
				if (token) {
					const decodedJwt = jwt.verify(token, process.env.JWT_SECRET as string);
					if ((decodedJwt as jwtPayload).username) {
						user.id = (decodedJwt as jwtPayload).username;
						user.permissions.push('signedIn');
					}
				} else {
					return {};
				}

				return {
					user,
				};
			},
			introspection: true,
			logger: Logger,
			...AppOptions,
		},
		dbOptions
	);
}
