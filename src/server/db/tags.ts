import { Query } from './index';

const tAll = async () => 
Query('SELECT * from blogtags');

const tOne = async (tagid: number) =>
Query('SELECT * from blogtags WHERE tagid = ?; CALL spBlogTags(?)',[tagid, tagid]);

export default {
    tAll,
    tOne
}