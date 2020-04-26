/* eslint-disable no-console */

import 'reflect-metadata';

// This is an integration test that uses a graphql-binding to test the APIs by issuing
// calls to the actual server. We should determine how we want to distinguish between the
// different types of tests.
import { GraphQLError } from 'graphql';
import { getBindingError } from 'warthog';

// Needs to happen before you import any models
import { Binding, StandardDeleteResponse } from '../generated/binding';
import { loadConfig } from '../src/config';
import { getServer } from '../src/server';

import { UserCreateInput } from '../generated';
import { User } from '../src/modules/user/user.model';

let binding: Binding;

let server: any;

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

const testData = {
	user: {
		username: 'elias',
		email: 'email@gmail.com',
		password: 'password',
	},
};

// Add tests only to queries/mutations that are finalized
// and ready to be consumed by the UI
describe('User', () => {
	test('sign up should work with valid credentials', async (done) => {
		// let response: GraphQLError | object = new GraphQLError('');

		// golden path
		let response = await signUpUser(testData.user);

		// expect(response).toBeInstanceOf(User); // FIXME: Not sure why this doesn't work
		expect((response as GraphQLError).message).toBeUndefined();
		expect((response as User).id).toEqual(testData.user.username);

		done();
		// expect((response as GraphQLError).message).toContain('Argument Validation Error');
	});

	test('duplicate usernames are not allowed', async (done) => {
		let response: GraphQLError | object = new GraphQLError('');
		response = await signUpUser(testData.user);
		// expect(response).toBeInstanceOf(GraphQLError);
		expect((response as GraphQLFixedError).message).toContain(
			'duplicate key value violates unique constraint'
		);
		done();
	});

	test("retrieve user's collection", async (done) => {
		let response = await getUser(testData.user.username);
		expect((response as User).id).toEqual(testData.user.username);

		// This currently fails because the generated binding does not include field resolvers:
		expect((response as User).collection).toBeInstanceOf(Array);

		// TODO: once we have a proper mutation for adding items,
		// we will write a test that adds an item and then ensure that it exists here

		done();
	});

	test('delete test user', async (done) => {
		let response = await deleteTestUser();
		expect(response).toContain(testData.user.username);
		done();
	});

	// test('log in should work with valid credentials', async (done) => {
	// 	throw new Error('Not implemented yet');
	// });
	// test('duplicate usernames are not allowed');
	// test('duplicate usernames are not allowed');
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
		return getBindingError(e);
	}

	return user;
}

async function getUser(userId: string): Promise<User | GraphQLError> {
	try {
		return binding.query.user(
			{ where: { id: userId } },
			`
		{
			id
			collection(query: "") {
				id
			}
		}`
		);
	} catch (e) {
		return getBindingError(e);
	}
}

async function deleteTestUser(): Promise<StandardDeleteResponse | GraphQLError> {
	try {
		console.log('Deleting test user...');
		return binding.mutation.hardDeleteUser({ id: 'elias' });
	} catch (e) {
		return Promise.resolve(getBindingError(e));
	}
}
