import { Connection } from './index';
import { Query } from './index';

const all = async () => 
Query('SELECT * from blogs');

const one = async (id: number) =>
Query('SELECT * from blogs WHERE id = ?',[id]);

const post = async (title: string, content: string, authorid: number, tagid: number) => {
    let values = [title, content, authorid];
    let tempQuery: any = await Query('INSERT INTO blogs (title, content, authorid) VALUES(?,?,?)', values);
    let insertId: any = Object.entries(tempQuery)[2][1];
    // console.log(insertId, tagid);
    return Query('INSERT INTO blogtags(blogid,tagid) VALUES(?,?); CALL spBlogTags(?)',[insertId, tagid, insertId])
}

const put = async (id: number, title: string, content: string, authorid: number) => {
    let values = [title, content, authorid, id];
    return Query('UPDATE blogs SET title= ?,content=? ,authorid=? WHERE id = ?', values);
}

const del = async (id: number) =>
Query('DELETE FROM blogs WHERE id =?', [id])

// const btAll = async (blogid: number) =>
// Query('SELECT * from blogtags WHERE blogid = ?',[blogid]);

export default {
    all,
    one,
    post,
    put,
    del
}