import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";

export default function BloodTest() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={4} style={{ marginTop: 20 }}>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="Coronary angiogram"
                control={<Checkbox color="primary" />}
                label="Coronary angiogram"
                labelPlacement="Coronary angiogram"
              />
              <FormControlLabel
                value="Cross Match (Panel)"
                control={<Checkbox color="primary" />}
                label="Cross Match (Panel)"
                labelPlacement="Cross Match (Panel)"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4} style={{ marginTop: 20 }}>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="Echocardiogram"
                control={<Checkbox color="primary" />}
                label="Echocardiogram"
                labelPlacement="Echocardiogram"
              />
              <FormControlLabel
                value="Differential Count"
                control={<Checkbox color="primary" />}
                label="Differential Count"
                labelPlacement="Differential Count"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4} style={{ marginTop: 20 }}>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="Stress test"
                control={<Checkbox color="primary" />}
                label="Stress test"
                labelPlacement="Stress test"
              />
              <FormControlLabel
                value="Lymphocyte (Blood)"
                control={<Checkbox color="primary" />}
                label="Lymphocyte (Blood)"
                labelPlacement="Lymphocyte (Blood)"
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
