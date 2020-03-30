select * from tags;
use blogs;
select * from blogtags;
select * from tags;
select * from blogs;




insert into blogs (title, content, authorid)
values('what in the world', 'hello world', 3);

insert into tags (name)
values('TRex');
insert into tags (name)
values('Burn');
insert into tags (name)
values('PepeHands');

insert into blogtags (blogid,tagid)
values(8,4);
insert into blogtags (tagid)
values(3);
insert into blogtags (tagid)
values(1);
insert into blogtags (tagid)
values(5);
insert into blogtags (tagid)
values(6);
insert into blogtags (tagid)
values(8);

insert into authors (name, email)
values('Kim', 'abc@123.com');
insert into authors (name, email)
values('Linda', 'xyz@123.com');
insert into authors (name, email)
values('Yoda', 'saber@123.com');

select * from blogs;
select * from authors;

insert into blogs (title, content, authorid)
values('How to do this', 'i cannot teach you bc i do not know how to teach you', '2');
insert into blogs (title, content, authorid)
values('This is so hard', 'how am i going to be able to actuall apply this', '1');
insert into blogs (title, content, authorid)
values('Send halp', 'i am on a major struggle bus right now', '3');
insert into blogs (title, content, authorid)
values('Run away', 'i am running away to a cave', '2');


insert into users (name, email, password)
values('Lisa', 'abc@123.com', 'unicorn');
insert into users (name, email, password)
values('Larry', 'abc@123.com', 'unicorn');
insert into users (name, email, password)
values('Susan', 'abc@123.com', 'unicorn');
insert into users (name, email, password)
values('Amy', 'abc@123.com', 'unicorn');
insert into users (name, email, password)
values('Jon', 'abc@123.com', 'unicorn');
insert into users (name, email, password)
values('Bob', 'abc@123.com', 'unicorn');
