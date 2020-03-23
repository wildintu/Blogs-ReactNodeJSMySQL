import * as React from 'react';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);

		this.state = {
			blogs: []
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/blogs');
			let blogs = await r.json();
			this.setState({ blogs });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<main className="container my-5">
				<h1 className="text-primary text-center">My Blog</h1>
				<ul className="list-group">
					{this.state.blogs.map((blog, index) => {
						return <li key={index} className="list-group-item">{blog.title}</li>
					})}
				</ul>
			</main>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	blogs: Array<{title: string, content: string, authorid: number}>;
}

export default App;
