import React from 'react';

export default function GoogleCalendar() {
  return (
    <div calssName="flex flex-col align-center">
      <iframe
        src={process.env.GATSBY_GOOGLE_CALENDAR_URL}
        style={{ border: 0, frameborder: 0, scrolling: 'no' }}
        width="100%"
        height="600"
        title={'calendar'}
      ></iframe>
    </div>
  );
}
