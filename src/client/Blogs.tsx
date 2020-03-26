import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const Blogs: React.FC<IBlogsProps> = props => {
    const [blog,setBlog] = useState([]);

	let grabBlogs = async () => {
		try {
			let r = await fetch('/api/blogs');
            let blog = await r.json();
            blogsArray(blog);
			// this.setState({ blogs });
		} catch (error) {
			console.log(error);
		}
    }
    
    let blogsArray = (blog: any) => {
        let keys = Object.keys(blog);
        let arr = keys.map((element) => {
            return blog[element];
        });

        let cards: JSX.Element[] = arr.map((element, index) => {
            return (
                <main className="container my-5" key={index}>
                    <ul className="list-group" >
                            <li className="list-group-item">{element.title}
                            
                            <Link to={`/blogs/${element.id}/details`}>
                            <button
                            type="button"
                            className="btn btn-info d-flex mt-2">
                                Details
                                </button>
                            </Link>
                            
                            <Link to={`/blogs/${element.id}/admin`}>
                            <button
                            type="button"
                            className="btn btn-info d-flex mt-2">
                                Edit
                                </button>
                            </Link>
                            </li>
                        
                    </ul>
                </main>
            );
        })
        setBlog(cards);
    }

    useEffect(() => {
        grabBlogs();
    }, []);
    
    return (
        <div>
            <h1 className="text-primary text-center">My Blog</h1>
           <Link to="/Forms" className="btn btn-success justify-content-center align-item-center">
               Post to Blog
            </Link>
            {blog}
        </div>
    );
	
}

export interface IBlogsProps {}

export interface IBlogsState {
	blog: Array<{title: string, content: string, authorid: number, tagid:number}>;
}

export default Blogs;
