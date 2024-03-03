import React, { useState, useEffect } from 'react';

const AnimatedText = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentText = texts[index];

      if (!deleting) {
        // Jika masih ada karakter yang akan dimasukkan
        if (displayText.length < currentText.length) {
          const nextChar = currentText.charAt(displayText.length);
          setDisplayText((prevDisplayText) => prevDisplayText + nextChar);
        } else {
          // Jika semua karakter dimasukkan, mulai menghapus karakter
          setDeleting(true);
        }
      } else {
        // Jika masih ada karakter yang akan dihapus
        if (displayText.length > 0) {
          setDisplayText((prevDisplayText) => prevDisplayText.slice(0, -1));
        } else {
          // Jika semua karakter dihapus, atur ulang untuk kata berikutnya
          setDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, 100); // Sesuaikan nilai interval sesuai kebutuhan

    return () => clearInterval(interval);
  }, [index, texts, displayText, deleting]);

  return (
    <h1 className="text-container text-header1 font-bold relative text-2xl">
      <span className="animated-text">{displayText}</span>
      <span className="pointer" style={{ left: `${displayText.length}ch` }}>&#124;</span>
    </h1>
  );
};

export default AnimatedText;
