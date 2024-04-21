import { useLoaderData } from 'react-router-dom';

import classes from './PostsList.module.css';
import Post from './Post';

export default function PostsList() {
    const posts = useLoaderData();

    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.id} id={post.id} author={post.author} text={post.body} />)}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>No posts yet.</h2>
                    <p>Add some!</p>
                </div>
            )}
        </>
    );
}