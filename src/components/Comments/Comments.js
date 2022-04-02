import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
    );
};

export default Comments;