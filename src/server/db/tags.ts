import { Query } from './index';

const tAll = async () => 
Query('SELECT * from blogtags');

const tOne = async (blogid: number) =>
Query('SELECT * from blogtags WHERE blogid = ?; CALL spBlogTags(?)',[blogid, blogid]);

export default {
    tAll,
    tOne
}