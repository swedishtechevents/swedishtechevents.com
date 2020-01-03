import React from 'react';
import Header from './components/header';
import Events from './components/events';
import Footer from './components/footer';

export default props => (
  <div>
    <Header
      title="Swedish Tech Events"
      subtitle="Events for developers, technologists, and other geeks in Sweden"
    />
    <main className="section">
      <div className="container">
        <p>
          Events are fetched from{' '}
          <a href="https://www.meetup.com/">meetup.com</a> and{' '}
          <a href="https://www.eventbrite.com/" className="strikethrough">eventbrite.com</a> (<a href="https://github.com/swedishtechevents/updater/issues/7">#7</a>) that is
          categorized with tech and from our GitHub every hour.{' '}
          <a
            href="https://github.com/swedishtechevents/events/issues/new"
            rel="noopener noreferrer"
            target="_blank"
          >
            Missing your event? Submit it!
          </a>
        </p>
        <br />
        <Events history={props.history} />
      </div>
    </main>
    <Footer />
  </div>
);
