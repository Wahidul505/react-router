import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CommentDetails = () => {
    const {commentId} = useParams();
    const [comment, setComment] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then(res => res.json())
        .then(data => setComment(data))
    },[commentId])
    return (
        <div>
            <h2>Comment Details:{commentId}</h2>
            <h3>{comment.name}</h3>
            <h5>{comment.email}</h5>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentDetails;