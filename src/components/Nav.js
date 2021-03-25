import React from 'react';

function Nav(props) {
    let lists = [];
    for(let i=0; i<props.data.length; i++) {
        lists.push(<li key={props.data[i].id}><a href={"/content" + props.data[i].id }></a> {props.data[i].title} </li>)
    }

    return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
    );
}

export default Nav;
