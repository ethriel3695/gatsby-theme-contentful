import React from 'react';
import Typography from '@material-ui/core/Typography';
import { SectionWidget } from './PageWidget/SectionWidget';

export default function Landing({ pageContext, page }) {
  const { siteTitle, siteDescription, siteGreeting } = pageContext;
  let pageDetails = null;
  const data = page.section;
  pageDetails = (
    <div style={{ padding: 20 }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="inherit"
        gutterBottom
        style={{ padding: 20 }}
      >
        {siteTitle}
      </Typography>
      <Typography variant="h5" align="center" color="inherit" paragraph>
        {siteDescription}
      </Typography>
      <Typography variant="subtitle1" align="left" color="inherit" paragraph>
        {siteGreeting}
      </Typography>
      <SectionWidget sections={data} />
    </div>
  );
  return <div>{pageDetails}</div>;
}
