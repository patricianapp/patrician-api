// To do anything asynchronous, we need to set up a test environemnt
// They don't seem to play nicely with TypeScript though - likely need to compile
// https://jestjs.io/docs/en/configuration.html#testenvironment-string
import * as dotenv from 'dotenv';
import 'reflect-metadata';

dotenv.config();

// If debugging in VSCode, set the timeout to
const timeoutDebug = 60 * 60 * 1000; // one hour
const timeoutRegular = 25000; // 5 seconds
const timeout = process.env.NODE_ENV === 'test' ? timeoutDebug : timeoutRegular;

// jest.setTimeout(timeout);
jest.setTimeout(25000);
// if (jasmine && typeof jasmine.DEFAULT_TIMEOUT_INTERVAL !== 'undefined') {
//   jasmine.DEFAULT_TIMEOUT_INTERVAL = timeout;
// }
