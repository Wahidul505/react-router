import React from 'react';
import { useNavigate } from 'react-router-dom';

const Comment = ({comment}) => {
    const {name, id} = comment;
    let navigate = useNavigate();
    const showComment = ()=>{
        navigate('/comment/'+id);
    }   
    return (
        <div>
            <h3>{name}</h3>
            <button onClick={showComment}>{id}</button>
        </div>
    );
};

export default Comment;