import * as mysql from 'mysql';


export const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'chirprapp',
    password: 'password',
    database: 'c16_chirpr'
});

export const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) throw err;
            resolve(results);
        });
    });
};

import chirps from './chirps';

export default {chirps}