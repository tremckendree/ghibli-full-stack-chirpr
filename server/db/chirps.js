import { Query } from '../routes/index';

const all = async () => Query('SELECT * FROM chirps')

export default {
    all
}