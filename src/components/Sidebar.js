import React from 'react';
import ListLink from './ListLink';
import './Sidebar.css'
const List=[
    {
        name:'首頁',
        link:'/',
    },
    {
        name:'聯絡我',
        link:'/contact',
    },
    {
        name:'關於我',
        link:'/about',
    },
]
const Sidebar = () => {
    return (
        <ul className='sidebar'>
            {List.map(item=>(
                <ListLink to={item.link} key={item.link}>
                    {item.name}
                </ListLink>
            ))}
        </ul>
    )
}

export default Sidebar
