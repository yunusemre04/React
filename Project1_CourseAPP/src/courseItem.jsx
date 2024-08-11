import React from 'react'

function CourseItem(props) {
    return (
        <div className='courseItem ' id={props.id}>
            <div className='c-header'>{props.cName}</div>
            <div className='c-body'>
                <img className="c-img" src={props.img}></img>
                <div className='c-info'>{props.cInfo}</div>
            </div>
            <div className='c-footer'>
                <span className='m-1'>{props.price}</span>
                <button className='btn btn-success'>Look out</button>
            </div>
        </div>
    )
}

export default CourseItem