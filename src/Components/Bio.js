
/* Main dependency imports */
import React, { useState } from 'react';

/* Data imports */
import quotes from '../data/quotes.json';

/* Img imports */
import myLogo from '../img/myLogo.svg';

const Bio = () => {

  /* Set state for current quote */
  const [curQuote, setCurQuote] = useState(quotes[0]);

  /* Grab a random quote */
  const getRan = () => quotes[Math.ceil(Math.random() * quotes.length - 1)];

  /* Update quote and prevent duplicates */
  const updateQuote = () => {
    let newQuote = getRan();
    while (newQuote.quote === curQuote.quote) newQuote = getRan();
    setCurQuote(newQuote);
  };

  /* Deconstruct quote properties */
  const { quote } = curQuote;
  const { citation } = curQuote;

  return (
    <div className="bio-container">

      <div className="bio">
        <h2 className="top-heading bio-heading">Bio</h2>

        <p>In June of 2014 I discovered that web development was a real option for me. Fell in love with it right away and haven't looked back. Began working at an online coding bootcamp back in March of 2016 in a mentor, contributor and coordinator capacity. Spent the last 5+ years working fulltime and remote, writing and debugging code, and helping others learn to do the same.</p>
        <br />
        <p>On the front end my focus has been on React with function components and hooks, ES6, DOM manipulation, JS in the browser, OOP, SASS, jQuery, APIs and AJAX with fetch and async await, GitHub and modern, mobile-first, responsive web design and development.</p>
        <br />
        <p>A few years ago I started working on the back end as well where my focus has been on Node, Express, Pug, npm, SQLite, Postgres, Sequelize ORM, Postman, RESTful web services, Heroku, Netlify.</p>
        <br />
        <p>Now I'm ready for the next chapter in my journey. I'm open to any interesting opportunities but I'd love to join a dev team where I can work on interesting projects, learn cool new things and take my skills to the next level.</p>
        <br />
        <p>I pride myself on being unopinionated and easy to work with. Problem solving and overcoming challenges are among my greatest motivators. In my work I value a high level of precision and beating expectations and deadlines. And I'm all about working hard, having a good time and hopefully making things better in the process.</p>
        <br />
        <p>And when I'm not working, I love to learn and create and spend time with my family.  I love to watch movies and read and play the guitar and play video games.  I love to research the meaning of life and truth and the true nature of reality and the human condition and experience. <span>😎</span></p>
      </div>

      <div className="quote-box">  
        <div className="quote-display" onClick={ updateQuote }>
          <h2 className="top-heading bio-heading">Quotes</h2> 
          <p className="quote-heading"><i>Favorite quotes can be revealing.  Click here to see more of mine.</i></p>
          <p className="quote code">{ quote }</p>
          <p className="citation"><i>{ citation }</i></p>
        </div>
        <img className="my-logo" src={myLogo} alt="My Logo" />
      </div>
    </div>
  ); 
};

export default Bio;
