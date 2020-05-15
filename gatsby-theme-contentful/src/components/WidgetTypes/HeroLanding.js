import React from 'react';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import About from '../About/About';

const HeroLanding = ({ page }) => {
  return (
    <div className="bg-gray-0 py-12 lg:py-16">
      <div>
        <div>
          {page.section.map((sect, index) => {
            return (
              <div key={index}>
                <Grid container>
                  {sect.image ? (
                    <Grid item xs={12} key={`heroContainer`}>
                      <div style={{ width: '100%' }}>
                        <img
                          style={{ maxWidth: '100%', maxHeight: '100%' }}
                          key={`${index}-key`}
                          src={sect.image.fluid.src}
                          srcSet={sect.image.fluid.srcSet}
                          sizes={sect.image.fluid.sizes}
                          alt={sect.image.description}
                        />
                      </div>
                    </Grid>
                  ) : null}
                  <Grid item xs={12} key={`titleContainer`}>
                    <Typography
                      key={`${sect.title}`}
                      variant="h5"
                      align="center"
                      color="inherit"
                      paragraph
                      style={{ padding: 20 }}
                    >
                      {sect.title}
                    </Typography>
                  </Grid>
                  <div style={{ marginTop: '20px' }}>
                    <About />
                  </div>
                </Grid>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroLanding;
