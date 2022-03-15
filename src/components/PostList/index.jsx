import React from 'react';
import PropTypes from 'prop-types';

PostList.protoType = {
    posts: PropTypes.array,
}
PostList.defaulProps = {
    posts:[],
}

function PostList(props) {

const {posts} = props;

console.log({posts});
  return (
    <ul className="post-list">
        {posts.map(post => ( 
            <li key={post.id}>{post.title}</li>
        ))}
        
    </ul>
  )
}

export default PostList;