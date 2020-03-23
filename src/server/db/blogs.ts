import { Connection } from './index';
import { Query } from './index';

const all = async () => 
Query('SELECT * from blogs');

const one = async (id: number) =>
Query('SELECT * from blogs WHERE id = ?',[id]);

const post = async (title: string, content: string, authorid: number) => {
    let values = [title, content, authorid]
    return Query('INSERT INTO blogs (title, content, authorid) VALUES(?,?,?)', values);
}

const put = async (id: number, title: string, content: string, authorid: number) => {
    let values = [title, content, authorid, id];
    Query('UPDATE blogs SET title= ?,content=? ,authorid=? WHERE id = ?', values);
}

const del = async (id: number) =>
Query('DELETE FROM blogs WHERE id =?', [id])

export default {
    all,
    one,
    post,
    put,
    del
}