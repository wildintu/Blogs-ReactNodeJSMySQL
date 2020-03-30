import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Link } from "react-router-dom";
import Fetch from "./Fetch";
import {IBlogs, months} from './Blogs';

let Blog: React.FC<IBlogProps> =  ({
    match: {
        params: { id }
      }
}) => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [authorid, setAuthorid] = useState<number>();
    const [tagid, setTagid] = useState<number>()

    let handleChange = (e: string, id: string) => {
        if (id === "title") {
          setTitle(e);
        } else if (id === "content") {
          setContent(e);
        } else if (id === "authorid") {
            setAuthorid(parseInt(e,10));
        } else if (id === "tagid") {
            setTagid(parseInt(e,10));
        } 
      };
    
      let handleClick = () => {
        if (title !== "title" && content !== "content") {
          Fetch(
            {
              title: title,
              content: content,
              authorid: authorid,
              tagid: tagid
            },
            `/api/blogs/${id}`,
            "PUT"
          );
        }
      };
    
      let handleDelete = () => {
        if (title !== "title" && content !== "content") {
          Fetch(
            {
              title: title,
              content: content,
              authorid: authorid,
              tagid: tagid
            },
            `/api/blogs/${id}`,
            "DELETE"
          );
        }
      };
    
      let postBlog = async () => {
        try {
          let res = await fetch(`/api/blogs/${id}`);
          let ablog: IBlogs = await res.json();
          setTitle(ablog.title);
          setContent(ablog.content);
          setAuthorid(ablog.authorid);
          setTagid(ablog.tagid)
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        postBlog();
      }, []);
    
      return (
        <form>
          <div className="form-group col-sm-4">
            <label htmlFor="name">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={e => handleChange(e.target.value, "title")}
            />
          </div>
          <div className="form-group col-sm-4">
            <label htmlFor="msg">Content</label>
            <input
              type="text"
              className="form-control"
              id="content"
              value={content}
              onChange={e => handleChange(e.target.value, "content")}
            />
          </div>
          <Link to="/">
            <button
              className="btn btn-primary ml-3"
              onClick={() => {
                handleClick();
              }}
            >
              Save Blog
            </button>
          </Link>
          <Link to="/">
            <button
              className="btn btn-primary ml-3"
              onClick={() => {
                handleDelete();
              }}
            >
              Delete
            </button>
          </Link>
        </form>
      );
}


export interface IBlogProps 
    extends RouteComponentProps<{id: string}> {}

export interface IBlogState {}

export default Blog;