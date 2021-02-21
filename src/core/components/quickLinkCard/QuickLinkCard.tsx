import React from 'react';
import { makeQuickLinkCardStyles } from './Styles';
import { Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@material-ui/core';
import { QuickLink } from '../../Types';
import Create from '@material-ui/icons/Create';

export const QuickLinkCard = (props: QuickLink) => {
  const styles = makeQuickLinkCardStyles();

  const handleCardClick = () => {
    //TODO open bookmark tabs with chrome extension
    alert('opening bookmark tabs');
  };

  const handleEditClick = () => {
    //TODO open edit options, add remove tab Urls
    alert('open edit options');
  };

  return (
    <Grid item color="indigo">
      <Card onClick={handleCardClick} className={styles.card}>
        <CardHeader
          className={styles.header}
          action={
            <IconButton className={styles.iconButton} aria-label="settings">
              <Create onClick={handleEditClick} />
            </IconButton>
          }
        />
        <CardContent className={styles.content}>
          <Typography variant="h4" component="h2" className={styles.title} color="textPrimary">
            {props.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
