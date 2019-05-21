import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route , NavLink ,  Switch, Redirect } from 'react-router-dom';
// import  NewPosts from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth : true
    }
    render () {
        return (
            <div className="Blog">
                <header>
                     <nav>
                            <ul>
                                <li><NavLink
                                    to="/posts/"
                                    exact
                                    activeClassName="my-active"
                                    activeStyle ={{
                                        color: '#fa923f',
                                        textDecoration : 'underline'
                                    }}>Posts</NavLink></li>
                                <li>< NavLink to={{
                                    pathname : '/new-post',
                                    hash : '#submit',
                                    search :'?quick-submit=true'
                                }}>New Post</NavLink></li>
                            </ul>
                     </nav>
                </header>
                         {/* <Route path= "/"  exact render={() => <h1>Home</h1>} />
                         <Route path= "/"   render={() => <h1>Home2</h1>} /> */}

                         <Switch>
                            {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                            <Route path="/posts"    component={Posts} />
                            <Route render = {() => <h2>Not Found </h2>} />
                            {/* <Route path="/"    component={Posts} /> */}
                            {/* <Redirect from="/" to="/posts" /> */}
                        </Switch>

            </div>
        );
    }
}

export default Blog;