import "./App.css";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

function Page({ email }) {
  return (
    <Container>
      <Box>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={8}>
            <Paper>Your email address is: {email}</Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Page;
