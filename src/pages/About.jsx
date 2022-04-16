import React from 'react';

function About() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
    }}
    >
      <h1>
        About
      </h1>
      <div style={{
        lineHeight: '30px',
        margin: '20px 0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <p>Created by Daniil Gerbovets</p>
        <p>
          GitHub page:
          {' '}
          <a target="_blank" href="https://github.com/dangerb3/Notes-app" rel="noreferrer">link</a>
        </p>
      </div>

    </div>

  );
}

export default About;
