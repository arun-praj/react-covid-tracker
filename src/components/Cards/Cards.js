import React from "react";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import classNames from "classnames";

import styles from "./Cards.module.scss";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
   if (!confirmed) {
      return "Loading...";
   }
   return (
      <div className={styles.container}>
         <Grid container spacing={3} justify="center">
            <Grid
               item
               xs={9}
               md={3}
               component={Card}
               className={classNames(styles.card, styles.infected)}>
               <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                     Infected
                  </Typography>

                  <Typography variant="h5">
                     <CountUp start={0} end={confirmed.value} duration={1.2} separator="," />
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                     {new Date(lastUpdate).toDateString()}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                     Number of Active Cases
                  </Typography>
               </CardContent>
            </Grid>
            <Grid
               item
               xs={9}
               md={3}
               component={Card}
               className={classNames(styles.card, styles.recovered)}>
               <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                     Recovered
                  </Typography>
                  <Typography variant="h5">
                     <CountUp start={0} end={recovered.value} duration={1.2} separator="," />
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                     {new Date(lastUpdate).toDateString()}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                     Number of people recovered.
                  </Typography>
               </CardContent>
            </Grid>
            <Grid
               item
               xs={9}
               md={3}
               component={Card}
               className={classNames(styles.card, styles.deaths)}>
               <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                     Deaths
                  </Typography>
                  <Typography variant="h5">
                     <CountUp start={0} end={deaths.value} duration={1.2} separator="," />
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                     {new Date(lastUpdate).toDateString()}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                     Number of deaths.
                  </Typography>
               </CardContent>
            </Grid>
         </Grid>
      </div>
   );
};
export default Cards;
