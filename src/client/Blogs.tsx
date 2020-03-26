import React, { useState, useEffect} from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {IAppProps} from './App';

const Blogs: React.FC<IAppProps> = props => {
    const [blog,setBlog] = useState<JSX.Element[]>([]);

	let grabBlogs = async () => {
		try {
			let r: Response = await fetch('/api/blogs');
            let json: Array<IBlogs> = await r.json();
            blogsArray(json);
			// this.setState({ blogs });
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
            // let date: Date = new Date(element._created);

            
            // let date: Date = new Date(element._created);
            // let dateFormat = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
            return (
                <Card className="my-5" key={index}>
                    <Card.Body>
                    <Card.Title as="h1" className="">{Title}</Card.Title>
                    {/* <Card.Text style={{"marginBottom": "1px"}}>{date}</Card.Text> */}
                    <Card.Text as="p" className="">{Content}</Card.Text>
                    <Card.Text as="p" className="">{Author}</Card.Text>
                    <Button as={Link} to={`/blogs/${BlogId}/details`}>Details</Button>
                    <Button as={Link} to={`/blogs/${element.blogid}/admin`} style={{"marginLeft": "4px"}}>Edit</Button>
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
        {blog}
        </Container>

        </div>
        // <div>
        //     <h1 className="text-primary text-center">My Blog</h1>
        //    <Link to="/Forms" className="btn btn-success justify-content-center align-item-center">
        //        Post to Blog
        //     </Link>
        //     {blog}
        // </div>
    );
	
}


// export interface IBlogsState {
//     blog: Array<{title: string, 
//                 content: string, 
//                 authorid: number, 
//                 tagid:number}>;
// }

export default Blogs;

export interface IBlogs {
    blogid: string;
    title: string;
    content: string;
    _created: string;
    name: string;
    tagName: string;
    tagid: number;
    authorid: number;
}
