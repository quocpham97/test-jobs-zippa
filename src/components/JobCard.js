import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    margin: 10,
    boxShadow: 3,

    "&:hover": {
      background: grey[200]
    },
    minHeight: 100
  },
  cardHeader: {
    minHeight: 80,
    alignItems: "flex-start"
  }
}));

export default function JobCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        avatar={
          <Avatar variant="rounded" aria-label="description" src={props.companyLogo}>
            {props.companyLogo === undefined ? props.companyInitial : null}
          </Avatar>
        }
        title={props.companyName}
        subheader={props.jobTitle}
        titleTypographyProps={{ variant: "body1" }}
        className={classes.cardHeader}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" paragraph>
          {props.shortDesc}
        </Typography>
      </CardContent>
    </Card>
  );
}
