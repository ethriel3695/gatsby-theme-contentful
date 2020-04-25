import { useState, useEffect } from 'react';
import moment from 'moment';

function checkForIOS() {
  if (navigator.standalone) {
    return false;
  }
  const today = Date.now();
  const lastPrompt = localStorage.getItem('installPrompt');
  const lastPromptDays = moment.unix(lastPrompt);
  const days = moment(today).diff(lastPromptDays, 'days');

  const ua = window.navigator.userAgent;
  const webkit = !!ua.match(/WebKit/i);
  const isIPad = !!ua.match(/iPad/i);
  const isIPhone = !!ua.match(/iPhone/i);
  const isIOS = isIPad || isIPhone;
  const isSafari = isIOS && webkit && !ua.match(/CriOS/i);

  const isBrowser = typeof window !== 'undefined';
  const prompt = (isNaN(days) || days > 30) && isIOS && isSafari;

  if (prompt && isBrowser && 'localStorage' in window) {
    localStorage.setItem('installPrompt', today);
  }

  return { isIOS, isSafari, prompt };
}

export default function useIsIOS() {
  const [isIOS, setIsIOS] = useState({});

  useEffect(() => {
    setIsIOS(checkForIOS());
    return () => console.log('CLEANUP INSTALL PROMPT', isIOS);
  }, []);

  return isIOS;
}
