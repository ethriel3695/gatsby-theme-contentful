import React from 'react';
// import './layout.css';
import '../styles/style.css';
import Header from './Header/Header';
import Footer from './Footer';

const isBrowser = typeof window !== 'undefined';
if (isBrowser && 'Notification' in window) {
  Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
  });

  function displayNotification() {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        var options = {
          body: 'Here is a notification body!',
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1,
          },
        };
        reg && reg.showNotification('Hello world!', options);
      });
    }
  }
  displayNotification();
}

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Header {...props} />
      {children}
      <Footer {...props} />
    </>
  );
};

export default Layout;
