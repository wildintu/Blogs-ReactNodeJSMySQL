import React, { useState, useEffect } from 'react';
import { useParams, RouteComponentProps, Link } from "react-router-dom";
// import Fetch from "./Fetch";
import {IBlogs} from './Blogs';

const Detail: React.FC<IDetailProps> = ({
    match: {
        params: { id }
      }
}) => {
    const [details, setDetails] = useState([])
    // console.log(id)

    let showDetail = async () => {
        try {
          let res = await fetch(`/api/blogs/${id}`);
          let details = await res.json();
        //   console.log(details);
          setDetails(details);
        } catch (error) {
            console.log(error);
        }
    };
    
    
    let makeDeets = (json: IBlogs) => {
        let Title: string = json.title;
    }
    console.log(makeDeets)
    
     

      useEffect(() => {
        showDetail();
      }, []);

    return(
        <div>
        <h1>YO</h1>
            <h1 className="text-primary text-center">My Blog</h1>
           <Link to="/" className="btn btn-success justify-content-center align-item-center">
               Back Home
            </Link>
            {details}
        </div>
    )


}

export interface IDetailProps 
    extends RouteComponentProps<{id: string}> {}

// export interface IDetailState {}

export default Detail;