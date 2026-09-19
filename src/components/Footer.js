import React from 'react';

export default function Footer({ author }) {
  return (
    <footer className="portal-footer">
      <p>&copy; {new Date().getFullYear()} Student Information System. Created by {author}.</p>
    </footer>
  );
}