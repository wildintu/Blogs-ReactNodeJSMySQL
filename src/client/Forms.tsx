import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fetch from "./Fetch";

const Forms: React.FC<IFormsProps> = props => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorid, setAuthorid] = useState("");
  const [tagid, setTagid] = useState("");

  let handleChange = (e: string, id: string) => {
    if (id === "title") {
      setTitle(e);
    } else if (id === "content") {
      setContent(e);
    } else if (id === "authorid") {
      setAuthorid(e);
    } else if (id === "tagid") {
      setTagid(e);
    }
  };

  let handleClick = () => {
    if (title !== "" && content !== "" && authorid !== "" && tagid !== "") {
      Fetch(
        {
          title: title,
          content: content,
          authorid: authorid,
          tagid: tagid
        },
        "/api/blogs",
        "POST"
      );
    }
  };

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
        {/* <small id="userMsg" className="form-text text-muted">
          We plan to stalk you.
        </small> */}
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
          type="text"
          className="form-control"
          id="authorid"
          value={authorid}
          onChange={e => handleChange(e.target.value, "authorid")}
        />
      </div>
      <div className="form-group col-sm-4">
        <label htmlFor="msg">Tag ID</label>
        <input
          type="text"
          className="form-control"
          id="tagid"
          value={tagid}
          onChange={e => handleChange(e.target.value, "tagid")}
        />
      </div>
      <Link to="/">
        <button
          className="btn btn-primary ml-3"
          onClick={() => {
            handleClick();
          }}
        >
          Submit
        </button>
      </Link>
    </form>
  );
};

export interface IFormsProps {}

export interface IFormsState {}

export default Forms;
