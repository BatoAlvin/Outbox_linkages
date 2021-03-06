import { Box, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import styles from "../../styles/Opportunity.module.css";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#DEE6EE",
    minHeight: 330,
    // width: "100%",
    cursor: "pointer",
  },
  btn: {
    backgroundColor: "#0072a1",
    color: "white",
    marginTop: "1rem",
    "&:hover": {
      backgroundColor: "#0072a1",
    },
  },
});

function OppCard({ company, location, paragraph, deadline, job }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {job}
        </Typography>

        <Typography variant="h5" gutterBottom>
          {company}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {location}
        </Typography>

        <Typography variant="body2" gutterBottom>
          {paragraph}
        </Typography>
        <p className={styles.read}>Read more.....</p>
        <Typography variant="body2" color="secondary">
          {deadline}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default OppCard;
