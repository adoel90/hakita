

/*


    ````````````````````````````````````
    https://codesandbox.io/s/zr1mjxxpq4

*/



import React from "react";
// import PropTypes from "prop-types";
import { Checkbox } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";


import { red, lightBlue, cyan, green } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => {
  console.log(theme);

  return {
    root: {
      color: theme.status.danger,
      "&$checked": {
        color: theme.status.slow
      }
    },
    checked: {}
  };
});

let CustomCheckbox = props => {
    
  const classes = useStyles();
  console.log(classes);
  return (
    <Checkbox
      defaultChecked
      classes={{
        root: classes.root,
        checked: classes.checked
      }}
    />
  );
};

// CustomCheckbox.propTypes = {
//   classes: PropTypes.object.isRequired
// };

const theme = createMuiTheme({
  status: {
    // My business variables
    danger: red[500],
    slow: green[700]
  },
  otherCustomVars: {
    width: 90
  }
});

function ComponentCheckbox() {
  return (
    <ThemeProvider theme={theme}>
      <CustomCheckbox />
    </ThemeProvider>
  );
}

export default ComponentCheckbox;
