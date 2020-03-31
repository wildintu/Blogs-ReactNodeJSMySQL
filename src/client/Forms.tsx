import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fetch from "./Fetch";
import {Form, Container} from "react-bootstrap";
import {IAppProps} from "./App";

const Forms: React.FC<IAppProps> = props => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [authorid, setAuthorid] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [tagObject, setTagObject] = useState<any>()
  const [tagOptions, setTagOptions] = useState<JSX.Element[]>()

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
    if (title !== "" && content !== "" && authorid !== "" && tag !== "") {
      let id: any = tagObject[tag]
      Fetch(
        {
          title: title,
          content: content,
          authorid: authorid,
          tagid: id
        },
        "/api/blogs",
        "POST"
      );
    }
  };

  let handleTagchange = (event: string) => {
    setTag(event);
}

let fetchTags = async () => {
  try {
      let response: Response = await fetch('/api/tags');
      let json: Array<ITags> = await response.json();
      setTag(json[0].name);
      makeOptions(json);
  } catch (error) {
      if (error) throw error;
  }
}

let makeOptions = (json: Array<ITags>) => {
  let tagObject: any = {}
  let options = json.map((element) => {
      let id = element.id;
      let tagName = element.name;
      tagObject[tagName] = id;
      return (
          <option key={element.id}>{element.name}</option>
      )
  })
  console.log(tagObject)

  setTagObject(tagObject);
  setTagOptions(options);
}
useEffect(() => {
  fetchTags();
}, [])

  return (
    <Container>
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
      <div>
      <Form.Group className="col-sm-4" controlId="tag">
    <Form.Label>Tag</Form.Label>
    <Form.Control as="select"
        className=""
          value={tag}
          onChange={(event: any) => { handleTagchange(event.target.value) }}>
            {tagOptions}
    </Form.Control>
  </Form.Group>
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
    </Container>
  );
};

export default Forms;

export interface ITags {
  id: string;
  name: string;
}
