/* eslint-disable no-console */

import 'reflect-metadata';

// This is an integration test that uses a graphql-binding to test the APIs by issuing
// calls to the actual server. We should determine how we want to distinguish between the
// different types of tests.
import { GraphQLError } from 'graphql';
import { getBindingError } from 'warthog';

// Needs to happen before you import any models
import { Binding } from '../generated/binding';
import { loadConfig } from '../src/config';
import { getServer } from '../src/server';

import { UserCreateInput } from '../generated';
import { User } from '../src/modules/user/user.model';

let binding: Binding;

let server: any;

// TODO: find out the difference between beforeAll and globalSetup
beforeAll(async (done) => {
	// process.env.DEBUG = undefined;

	loadConfig();

	server = getServer({}, { logging: false });
	await server.start();

	binding = ((await server.getBinding()) as unknown) as Binding;

	done();
});

afterAll(async (done) => {
	await server.stop();
	done();
});

// Add tests only to queries/mutations that are finalized
// and ready to be consumed by the UI
describe('User', () => {
	test('sign up should work with valid credentials', async (done) => {
		let response: GraphQLError | object = new GraphQLError('');

		// golden path
		response = await signUpUser({
			username: 'elias',
			email: 'email@gmail.com',
			password: 'password',
		});
		// expect(response).not.toBeInstanceOf(GraphQLError);
		expect(response).toMatchObject(new User());
		expect((response as User).id).toEqual('elias');

		done();
		// expect((response as GraphQLError).message).toContain('Argument Validation Error');
	});

	test('duplicate usernames are not allowed', async (done) => {
		let response: GraphQLError | object = new GraphQLError('');
		response = await signUpUser({
			username: 'elias',
			email: 'email2@gmail.com',
			password: 'password2',
		});
		console.log(response);
		// expect(response).toBeInstanceOf(GraphQLError);
		expect((response as GraphQLFixedError).message).toContain(
			'duplicate key value violates unique constraint'
		);
		done();
	});

	test('log in should work with valid credentials', async (done) => {
		throw new Error('Not implemented yet');
	});
	// test('duplicate usernames are not allowed');
	// test('duplicate usernames are not allowed');
});

describe('Project', () => {
	test('key format', async (done) => {
		let response: GraphQLError | object = new GraphQLError('');

		// Note: this test can also surface if you have 2 separate versions of GraphQL installed (which is bad)
		// response = await createProject('');
		// expect((response as GraphQLFixedError).message).toContain('Argument Validation Error');
		// expect((response as GraphQLFixedError).validationErrors.key.minLength).toContain(
		//   'key must be longer'
		// );

		// response = await createProject('aaa-');
		// expect((response as GraphQLError).message).toContain('Argument Validation Error');

		// response = await createProject('-aaa');
		// expect((response as GraphQLError).message).toContain('Argument Validation Error');

		// response = await createProject('a--a');
		// expect((response as GraphQLError).message).toContain('Argument Validation Error');

		// response = await createProject('AAA');
		// expect((response as GraphQLError).message).toContain('Argument Validation Error');

		// response = await createProject('aa');
		// expect(response).not.toBeInstanceOf(GraphQLError);

		// response = await createProject('a-b');
		// expect(response).not.toBeInstanceOf(GraphQLError);

		// response = await createProject('foo-bar-bazzzzzzzzzzzzzzz');
		// expect(response).not.toBeInstanceOf(GraphQLError);

		done();
	});
});

interface GraphQLFixedError {
	message: string;
	location: object[];
	path: string[];
	extenstions: {
		code: string;
		exception: object;
	};
	validationErrors: {
		[key: string]: {
			[key: string]: string;
		};
	};
}

async function signUpUser(data: UserCreateInput) {
	let user: User;
	try {
		user = await binding.mutation.createUser({ data });
	} catch (e) {
		return Promise.resolve(getBindingError(e));
	}

	return user;
}

// async function createProject(key: string): Promise<object | GraphQLFixedError> {
//   let project;
//   try {
//     project = await binding.mutation.createProject(
//       {
//         data: {
//           key,
//           name: 'Fake name',
//         },
//       },
//       `{ id name key }`
//     );
//   } catch (e) {
//     return Promise.resolve(getBindingError(e));
//   }

//   return project;
// }

/* eslint-enable no-console */
