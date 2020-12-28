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
    maxWidth: 345,
    margin: 10,
    boxShadow: 3,
    "&:hover": {
      background: grey[200]
    }
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    // backgroundColor: grey[500]
  }
}));

export default function JobCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        avatar={
          <Avatar
            variant="rounded"
            aria-label="description"
            src={props.companyLogo}
            className={classes.avatar}
          >
            {props.companyLogo === undefined ? String(props.companyName).charAt(0) : null}
          </Avatar>
        }
        title={props.companyName}
        subheader={props.jobTitle}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" paragraph>
          {props.shortDesc}
        </Typography>
      </CardContent>
    </Card>
  );
}
