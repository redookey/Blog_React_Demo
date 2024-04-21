import { Link } from 'react-router-dom';

import classes from './Post.module.css';

export default function Post({ id, author, text }) {
    return (
        <li className={classes.post}>
            <Link to={id}>
                <p className={classes.author}>{author}</p>
                <p className={classes.text}>{text}</p>
            </Link>
        </li>
    );
}