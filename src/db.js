import {createPool} from 'mysql2/promise';

import {
    DB_HOST,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
    DB_PORT,
  } from './config.js';

export const pool = createPool({
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    puerto: DB_PORT,
});

