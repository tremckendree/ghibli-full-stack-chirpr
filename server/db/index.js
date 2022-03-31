import * as mysql from 'mysql';
import chirps from './chirps'

export const connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: 'Birdman',
    password: 'InnovateBh@m2020',
    database: 'c16_chirpr'
});

export const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

export default {chirps}