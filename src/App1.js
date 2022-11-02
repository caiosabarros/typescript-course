import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [
                {
                    id: 1,
                    title: 'Title 1',
                    body: 'Body 1'
                },
                {
                    id: 1,
                    title: 'Title 1',
                    body: 'Body 1'
                },
                {
                    id: 1,
                    title: 'Title 1',
                    body: 'Body 1'
                },
            ]
        };
    }
    render(){
        const {posts} = this.state;

    
        
        return()
< div className='App'>
    posts.map(post=><h1 key={post.id}><p>{post.title}</h1>
    <p>{post.body}</p>)
    
</div>
}

export default App;