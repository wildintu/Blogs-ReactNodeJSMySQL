import React, { useState, useEffect } from 'react';
import { useParams, RouteComponentProps, Link } from "react-router-dom";
import {IBlogs, months} from './Blogs';
import {Container, Card, Button} from 'react-bootstrap';

const Detail: React.FC<IDetailProps> = ({
    match: {
        params: { id }
      }
}) => {
    const [details, setDetails] = useState<JSX.Element>()

    let showDetail = async () => {
        try {
          let res = await fetch(`/api/blogs/${id}`);
          let details: IBlogs = await res.json();
          deets(details);
        } catch (error) {
            console.log(error);
        }
    };
    
    let deets = (details: IBlogs) => {
      let date: Date = new Date(details.datecreated);
      let dateFormat = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
      setDetails(
        <Card>
          <Card.Body>
          <Card.Title as="h1" className="">{details.title}</Card.Title>
          <Card.Text as="small">{dateFormat}</Card.Text>
          <Card.Text as="p" className="" style={{"marginTop": "10px"}}>{details.content}</Card.Text>
          <Card.Text as="p" className="">{details.name}</Card.Text>
          <Card.Text as="p" className="">{details.tagName}</Card.Text>
          <Button as={Link} to={`/blogs/${details.blogid}/admin`} style={{"marginLeft": "4px"}}>Edit</Button>
          </Card.Body>
        </Card>
      )
    }
      useEffect(() => {
        showDetail();
      }, []);

    return(
        <div>
          <Container>
            <h1 className="text-primary text-center">My Blog</h1>
           <Link to="/" className="btn btn-success justify-content-center align-item-center mb-5">
               Back Home
            </Link>
            {details}
          </Container>
        </div>
    )
}

export interface IDetailProps 
    extends RouteComponentProps<{id: string}> {}

export default Detail;