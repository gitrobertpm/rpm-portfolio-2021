
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
      <div className="quote-box">
              
        <div className="quote-display" onClick={ updateQuote }>
          <p className="quote-heading"><i>Favorite quotes can be revealing.  Click here to see more of mine.</i></p>
          <p className="quote code">{ quote }</p>
          <p className="citation"><i>{ citation }</i></p>
        </div>

      </div>

      <div className="bio">
        <h2 className="top-heading bio-heading">Bio</h2>

        <p>I've been studying web development since 2014.  Fell in love with it right away.  Been working in this industry since 2016, writing and debugging code and helping others learn to do the same.</p>
        <br />
        <p>Now I'm all about trying to do good things.  I just want to work hard and have a good time and hopefully make things better in the process.</p>
        <br />
        <p>Problem solving and overcoming challenges are among my greatest motivators.  Finding solutions and solving puzzles really light my fire.  And I love spending hours working on a project, or any number of them.</p>
        <br />
        <p>And when I'm not doing that, I love to learn and create and spend time with my family.  I love to watch movies and read and play the guitar and play video games.  I love to research the meaning of life and truth and the true nature of reality and the human condition and experience.  And I love to seek out magical moments and howl at the moon when time and the situation permits. <span>😎</span></p>

        <img className="my-logo" src={myLogo} alt="My Logo" />
      </div>

    </div>
  ); 
};

export default Bio;
