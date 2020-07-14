import React, { Component } from 'react';

const courseForm=(props)=>{
    return(
        <form onSubmit={props.add}>
            <input type="text" value={props.current} onChange={props.update}/>
            <button type="submit">Add Course</button>
        </form> 
    );
}
 export default courseForm;
