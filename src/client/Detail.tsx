import React, { useState, useEffect } from 'react';
import { useParams, RouteComponentProps, Link } from "react-router-dom";
import Fetch from "./Fetch";

const Detail: React.FC<IDetailProps> = ({
    match: {
        params: { id }
      }
}) => {
    const [details, setDetails] = useState([])

    return(
        <div>
        <h1>YO</h1>
            <h1 className="text-primary text-center">My Blog</h1>
           <Link to="/Forms" className="btn btn-success justify-content-center align-item-center">
               Post to Blog
            </Link>
            {details}
        </div>
    )


}

export interface IDetailProps 
    extends RouteComponentProps<{id: string}> {}

export interface IDetailState {}

export default Detail;