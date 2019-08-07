import React from 'react';

function Blockquote({cite, text, author}) {
  return (
    <>
      <blockquote cite={cite}>
        <p>"{text}"</p>
        <span>{author}</span>
      </blockquote>
    </>
  )
}

export default Blockquote