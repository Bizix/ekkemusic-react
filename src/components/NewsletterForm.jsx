import React, { useState } from 'react';
import { newsletterConfig } from './siteData';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function NewsletterForm({ compact = false }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState({
    status: 'idle',
    message:
      newsletterConfig.status === 'pending' ? newsletterConfig.pendingNote : '',
  });

  async function handleSubmit(event) {
    event.preventDefault();

    if (!emailPattern.test(email)) {
      setState({
        status: 'error',
        message: 'Enter a valid email address before joining the list.',
      });
      return;
    }

    if (!newsletterConfig.actionUrl) {
      setState({
        status: 'error',
        message: newsletterConfig.pendingNote,
      });
      return;
    }

    setState({ status: 'loading', message: 'Connecting to the mailing list...' });

    try {
      await fetch(newsletterConfig.actionUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: new URLSearchParams({
          email,
          tag: 'website',
          embed: '1',
        }),
      });

      setState({
        status: 'success',
        message: newsletterConfig.successMessage,
      });
      setEmail('');
    } catch (error) {
      setState({
        status: 'error',
        message: newsletterConfig.errorMessage,
      });
    }
  }

  return (
    <div className={`newsletter_shell${compact ? ' newsletter_shell-compact' : ''}`}>
      {!compact ? (
        <>
          <div className="eyebrow">Mailing list</div>
          <h2>{newsletterConfig.heading}</h2>
          <p>{newsletterConfig.description}</p>
        </>
      ) : (
        <div className="newsletter_compact_header">
          <strong>{newsletterConfig.heading}</strong>
          <p>{newsletterConfig.description}</p>
        </div>
      )}

      <form className="newsletter_form" onSubmit={handleSubmit}>
        <label className="newsletter_label" htmlFor={compact ? 'footer-email' : 'home-email'}>
          <span className="sr_only">Email address</span>
          <input
            id={compact ? 'footer-email' : 'home-email'}
            className="newsletter_input"
            type="email"
            name="email"
            autoComplete="email"
            placeholder={newsletterConfig.placeholder}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <button className="button button-primary newsletter_button" type="submit">
          {state.status === 'loading' ? 'Working...' : newsletterConfig.submitLabel}
        </button>
      </form>

      <p
        className={`newsletter_status newsletter_status-${state.status}`}
        aria-live="polite"
      >
        {state.message}
      </p>
    </div>
  );
}

export default NewsletterForm;
