import { useRef, useState } from "react";
import "./App.css";
import { checkUsername } from "./checkUsername";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

function LoginScreen({ setEmail }) {
  const [error, setError] = useState();
  const input = useRef(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(input.current);
    const result = await checkUsername(input.current.value);
    if (result.error) {
      setError(result);
    } else {
      setEmail(result.data);
    }
  };
  return (
    <Container>
      <Box>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={4}>
            <Paper>
              {error && <Alert severity="error">{error.data}</Alert>}
              <form onSubmit={onSubmit} noValidate autoComplete="off">
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <TextField
                      id="username"
                      label="Username"
                      inputRef={input}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={onSubmit}
                    >
                      Login!
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default LoginScreen;
