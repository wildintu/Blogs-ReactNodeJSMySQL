import React, { useState, useEffect} from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {IAppProps} from './App';

export const months: Array<string> = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const Blogs: React.FC<IAppProps> = props => {
    const [blog,setBlog] = useState<JSX.Element[]>([]);

	let grabBlogs = async () => {
		try {
			let r: Response = await fetch('/api/blogs');
            let json: Array<IBlogs> = await r.json();
            blogsArray(json);
		} catch (error) {
			console.log(error);
		}
    }
    
    let blogsArray = (json: Array<IBlogs>) => {
        let cardsArr = json.map((element,index) => {
            let Title: string = element.title;
            let Content: string = element.content;
            let Author: string = element.name;
            let AuthorId: number = element.authorid;
            let BlogId: string = element.blogid;
            let TagId: number = element.tagid;
            let TagName: string = element.tagName;
            let date: Date = new Date(element.datecreated);
            let dateFormat = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
            return (
                <Card className="my-5" key={index}>
                    <Card.Body>
                    <Card.Title as="h1" className="">{Title}</Card.Title>
                    <Card.Text as="small">{dateFormat}</Card.Text>
                    <Card.Text as="p" className="" style={{"marginTop": "10px"}}>{Content}</Card.Text>
                    <Card.Text as="p" className="">{Author}</Card.Text>
                    <Card.Text as="p" className="">{TagName}</Card.Text>
                    <Button as={Link} to={`/blogs/${BlogId}/details`}>Details</Button>
                    </Card.Body>
                </Card>
            );
        })
        setBlog(cardsArr);
    }

    useEffect(() => {
        grabBlogs();
    }, []);
    
    return (
        <div>
        <Container>
        <h1 className='text-primary text-center'>BLOG</h1>
        <Button as={Link} to={'/Forms'} variant="success">Post to Blog</Button>
        {blog}
        </Container>
        </div>
    );	
}

export default Blogs;

export interface IBlogs {
    blogid: string;
    title: string;
    content: string;
    datecreated: string;
    name: string;
    tagName: string;
    tagid: number;
    authorid: number;
}
