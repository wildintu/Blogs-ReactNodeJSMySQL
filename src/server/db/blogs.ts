import { Query } from './index';

const all = async () => {
    return Query(`SELECT *,
    b._created AS datecreated,
    c.name AS tagName
    from blogtags a
    JOIN blogstable b ON b.id = a.blogid
    JOIN tags c on c.id = a.tagid
    JOIN authors d ON d.id = b.authorid
    ORDER BY a.blogid ASC`);
}

const one = async (id: number) => {
    return Query(`SELECT *,
    b._created AS datecreated,
    c.name AS tagName
    from blogtags a
    JOIN blogstable b ON b.id = a.blogid 
    JOIN tags c ON c.id = a.tagid 
    JOIN authors d on d.id = b.authorid 
    WHERE b.id = ?`,[id]);
}

const post = async (title: string, content: string, authorid: number, tagid: number) => {
    let values = [title, content, authorid];
    let tempQuery: any = await Query('INSERT INTO blogstable (title, content, authorid) VALUES(?,?,?)', values);
    let insertId: any = Object.entries(tempQuery)[2][1];
    return Query('INSERT INTO blogtags(blogid,tagid) VALUES(?,?); CALL spBlogTags(?)',[insertId, tagid, insertId])
}

const put = async (id: number, title: string, content: string, authorid: number) => {
    let values = [title, content, authorid, id];
    return Query('UPDATE blogstable SET title= ?,content=? ,authorid=? WHERE id = ?', values);
}

const del = async (id: number) =>
Query('DELETE FROM blogstable WHERE id =?', [id])

export default {
    all,
    one,
    post,
    put,
    del
}