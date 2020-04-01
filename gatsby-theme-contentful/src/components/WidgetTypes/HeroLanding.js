import React from 'react';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const HeroLanding = ({ page }) => {
  return (
    <div>
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
                  ) : (
                    <Grid item xs={12} key={`textContainer`}>
                      <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="inherit"
                        gutterBottom
                        style={{ padding: 20 }}
                      >
                        {page.title}
                      </Typography>
                    </Grid>
                  )}
                  <Grid item xs={12} key={`titleContainer`}>
                    <Typography
                      key={`${sect.title}`}
                      variant="h5"
                      align="center"
                      color="inherit"
                      paragraph
                    >
                      {sect.title}
                    </Typography>
                  </Grid>
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
