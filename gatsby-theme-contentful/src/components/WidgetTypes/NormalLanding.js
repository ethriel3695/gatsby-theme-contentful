import React from 'react';
import { SectionWidget } from '../PageWidget/SectionWidget';

const NormalLanding = ({ page }) => {
  return (
    <div style={{ padding: 20 }}>
      <SectionWidget sections={page.section} />
    </div>
  );
};

export default NormalLanding;
