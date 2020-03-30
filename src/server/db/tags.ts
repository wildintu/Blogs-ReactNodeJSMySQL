import { Query } from './index';

const tAll = async () => 
Query('SELECT * from tags');

const tOne = async (id: number) => {
    return Query('SELECT * FROM tags WHERE id = ?', [id]);
};

export default {
    tAll,
    tOne
}