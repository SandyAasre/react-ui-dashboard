import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";

export default function Blood() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={4} style={{ marginTop: 20 }}>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="Complete blood count (CBC)"
                control={<Checkbox color="primary" />}
                label="Complete blood count (CBC)"
                labelPlacement="Complete blood count (CBC)"
              />
              <FormControlLabel
                value="Factor V assay"
                control={<Checkbox color="primary" />}
                label="Factor V assay"
                labelPlacement="Factor V assay"
              />
              <FormControlLabel
                value="Routine Blood"
                control={<Checkbox color="primary" />}
                label="Routine Blood"
                labelPlacement="Routine Blood"
              />
              <FormControlLabel
                value="TLC"
                control={<Checkbox color="primary" />}
                label="TLC"
                labelPlacement="TLC"
              />
              <FormControlLabel
                value="APTT"
                control={<Checkbox color="primary" />}
                label="APTT"
                labelPlacement="APTT"
              />
              <FormControlLabel
                value="ANC (Blood)"
                control={<Checkbox color="primary" />}
                label="ANC (Blood)"
                labelPlacement="ANC (Blood)"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4} style={{ marginTop: 20 }}>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="Fibrinogen level"
                control={<Checkbox color="primary" />}
                label="Fibrinogen level"
                labelPlacement="Fibrinogen level"
              />
              <FormControlLabel
                value="Prothrombin time (PT or PT-INR)"
                control={<Checkbox color="primary" />}
                label="Prothrombin time (PT or PT-INR)"
                labelPlacement="Prothrombin time (PT or PT-INR)"
              />
              <FormControlLabel
                value="Haemogram"
                control={<Checkbox color="primary" />}
                label="Haemogram"
                labelPlacement="Haemogram"
              />
              <FormControlLabel
                value="CBC"
                control={<Checkbox color="primary" />}
                label="CBC"
                labelPlacement="CBC"
              />
              <FormControlLabel
                value="Blood Banking"
                control={<Checkbox color="primary" />}
                label="Blood Banking"
                labelPlacement="Blood Banking"
              />
              <FormControlLabel
                value="RBC indices"
                control={<Checkbox color="primary" />}
                label="RBC indices"
                labelPlacement="RBC indices"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4} style={{ marginTop: 20 }}>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="Platelet count"
                control={<Checkbox color="primary" />}
                label="Platelet count"
                labelPlacement="Platelet count"
              />
              <FormControlLabel
                value="Lymphocyte (Blood)"
                control={<Checkbox color="primary" />}
                label="Lymphocyte (Blood)"
                labelPlacement="Lymphocyte (Blood)"
              />
              <FormControlLabel
                value="Basophil (Blood)"
                control={<Checkbox color="primary" />}
                label="Basophil (Blood)"
                labelPlacement="Basophil (Blood)"
              />
              <FormControlLabel
                value="Total Leucocyte Count"
                control={<Checkbox color="primary" />}
                label="Total Leucocyte Count"
                labelPlacement="Total Leucocyte Count"
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
