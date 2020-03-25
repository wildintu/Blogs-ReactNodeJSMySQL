import React, { useState, useEffect } from 'react';
import { useParams, RouteComponentProps, Link } from "react-router-dom";
import Fetch from "./Fetch";

let Blog: React.FC<IBlogProps> =  ({
    match: {
        params: { id }
      }
}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [authorid, setAuthorid] = useState("");

    let handleChange = (e: string, id: string) => {
        if (id === "title") {
          setTitle(e);
        } else if (id === "content") {
          setContent(e);
        } else if (id === "authorid") {
            setAuthorid(e);
        }
      };
    
      let handleClick = () => {
        if (title !== "title" && content !== "content" && authorid !== "authorid") {
          Fetch(
            {
              title: title,
              content: content,
              authorid: authorid
            },
            `/api/Blogs/${id}`,
            "PUT"
          );
        }
      };
    
      let handleDelete = () => {
        if (title !== "title" && content !== "content" && authorid !== "authorid") {
          Fetch(
            {
              title: title,
              content: content,
              authorid: authorid
            },
            `/api/Blogs/${id}`,
            "DELETE"
          );
        }
      };
    
      let postBlog = async () => {
        try {
          let res = await fetch(`/api/blogs/${id}`);
          let ablog = await res.json();
          setTitle(ablog.title);
          setContent(ablog.content);
          setAuthorid(ablog.authorid);
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
            <small id="userMsg" className="form-text text-muted">
              We plan to stalk you.
            </small>
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
          <div className="form-group col-sm-4">
            <label htmlFor="msg">Author ID</label>
            <input
              type="number"
              className="form-control"
              id="authorid"
              value={authorid}
              onChange={e => handleChange(e.target.value, "authorid")}
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