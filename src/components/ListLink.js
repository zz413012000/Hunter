import React from 'react';
import {Link} from 'gatsby';
import './ListLink.css';
const ListLink = (props) => {
    return (
        <li>
            <Link to={props.to}>
                {props.children}
            </Link>
        </li>
    )
}

export default ListLink
