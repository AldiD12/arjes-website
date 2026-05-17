import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--cream)',
      padding: '2rem'
    }}>
      <Helmet>
        <title>Page Not Found | Arjes</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div style={{ textAlign: 'center', maxWidth: '500px' }}>
        <h1 style={{
          fontFamily: 'var(--font-masthead)',
          fontSize: 'clamp(4rem, 10vw, 8rem)',
          lineHeight: 1,
          marginBottom: '1rem',
          opacity: 0.15
        }}>
          404
        </h1>
        <h2 style={{
          fontFamily: 'var(--font-masthead)',
          fontSize: '1.75rem',
          marginBottom: '1rem'
        }}>
          Page not found
        </h2>
        <p style={{
          fontSize: '1.1rem',
          opacity: 0.7,
          marginBottom: '2rem',
          lineHeight: 1.6
        }}>
          This route doesn't exist — but there's plenty to explore.
        </p>
        <Link
          to="/"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#c2410c',
            borderBottom: '1px solid #c2410c',
            paddingBottom: '0.25rem'
          }}
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
