import React, { useState, useEffect } from 'react';
import { useParams, RouteComponentProps, Link } from "react-router-dom";
import Fetch from "./Fetch";

const Detail: React.FC<IDetailProps> = (props) => {


    return(
        <h1>YO</h1>
    )


}

export interface IDetailProps 
    extends RouteComponentProps<{id: any}> {}

export interface IDetailState {}

export default Detail;