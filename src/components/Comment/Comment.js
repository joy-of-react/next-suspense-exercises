import React from 'react';

function Comment({ comment }) {
  return (
    <article className="comment">
      <header>
        <img
          alt=""
          src={comment.from.avatarSrc}
        />
        {comment.from.name}
      </header>
      <p>{comment.body}</p>
      <footer>Posted {comment.postedAt}</footer>
    </article>
  );
}

export default Comment;
