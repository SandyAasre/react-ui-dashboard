import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Paper, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { ModalButton } from "../../style/ModalButton";


function getModalStyle() {
  const top = 50 ;
  const left = 45 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    marginLeft: 100,
    width: 700,
    height: 600,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #808080",
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: 0,
  },
  heading: {
    color: "#0389fb",
    fontSize: 15,
    fontFamily: "Arial",
    display: "flex",
    paddingBottom: 10,
    paddingLeft: 10,
  },
  sample: {
    backgroundColor: "#03b3fb",
    fontSize: 8,
    fontWeight: "Bold",
    paddingTop: 5,
    margin: 10,
    height: 20,
    width: 160,
    color: "white",
    borderRadius: 20,
    "&:hover": {
      backgroundColor: "#0389fb",
      color: "white",
    },
  },
  column: {
    marginLeft: 25,
    borderBottom: "0.5px solid #808080",
  },
  box1: {
    display: "block",
    float: "right",
    textAlign: "center",
    marginBottom: 10,
    height: 50,
    borderRight: "none",
    border: ".5px solid #808080",
    borderRadius: 0,
    width: 145,
    boxShadow: "none",
  },
  box2: {
    display: "block",
    float: "right",
    textAlign: "center",
    marginBottom: 10,
    height: 60,
    marginTop: -5,
    border: ".5px solid #808080",
    borderRadius: 0,
    width: 155,
    backgroundColor: "#666666",
    boxShadow: "none",
  },
  box3: {
    display: "block",
    float: "right",
    marginBottom: 10,
    height: 50,
    borderLeft: "none",
    border: ".5px solid #808080",
    borderRadius: 0,
    width: 165,
    boxShadow: "none",
  },

  Button1: {
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    width: 100,
    textTransform: "none",
    Display: "Block",
    float: "right",
    height: 30,
    fontSize: 10,
    fontWeight: "Bold",
    marginTop: -15,
    margin: 6,
    marginRight: 10,
    "&:hover": {
      backgroundColor: "#03b3fb",
      color: "white",
    },
  },
  Button2: {
    backgroundColor: "#03b3fb",
    borderRadius: 20,
    color: "White",
    width: 100,
    Display: "Block",
    float: "right",
    textTransform: "none",
    fontWeight: "Bold",
    height: 30,
    fontSize: 10,
    marginTop: -15,
    marginRight: 20,
    margin: 6,
    "&:hover": {
      backgroundColor: "#0389fb",
      color: "white",
    },
  },
}));

export default function Medication() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={11}
          style={{
            borderBottom: ".5px solid #808080",
            paddingTop: 20,
            paddingLeft: 40,
          }}
        >
          <Typography style={{ color: "#0389fb", fontWeight: 300 }}>
            Prescription Confirmation
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          style={{ paddingTop: 20, borderBottom: ".5px solid #808080" }}
        >
          <span style={{ fontWeight: "bolder" }}>X</span>
        </Grid>
        <Grid item xs={11} className={classes.column}>
          <Typography style={{ padding: 10, fontSize: 15, fontWeight: "bold" }}>
            Medication samples and coupons delivered right to your office.{" "}
            <span style={{ color: "#0389fb" }}>Free. Easy. Fast.</span>
          </Typography>

          <Typography
            style={{
              fontSize: 10,
              fontWeight: 2,
              paddingLeft: 10,
              marginTop: -10,
            }}
          >
            Request multiple products from a variety of suppliers, prescription
            saving cards, and get access to vouchers.
            <br /> Want to see the samples available to you? Find out now!
          </Typography>
          <Button className={classes.sample}>
            Learn more at sample center
          </Button>
        </Grid>
        <Grid
          container
          spacing={0}
          style={{
            borderBottom: ".5px solid #808080",
            margin: 25,
            marginTop: 0,
            marginBottom: 15,
          }}
        >
          <Grid item xs={4}>
            <Typography
              style={{
                padding: 10,
                fontSize: 13,
                fontWeight: "bold",
                paddingLeft: 20,
              }}
            >
              Pick Up Location
              <br />
              <span style={{ fontWeight: 10, marginTop: 5 }}>
                Phone: 703-205-7034
                <br />
                Fax: 703-205-7035
              </span>
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography
              style={{
                padding: 10,
                fontSize: 13,
                fontWeight: "bold",
                paddingLeft: 20,
              }}
            >
              VA Pharmacy 10.6MU
              <br />
              <span style={{ fontWeight: 10, marginTop: 5 }}>
                7723 Jefferson Davis Highway
                <br />
                Arlington, VA 22201
              </span>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          style={{
            borderBottom: ".5px solid #808080",
            margin: 25,
            marginTop: -20,
            paddingBottom: 15,
          }}
        >
          <Grid item xs={4}>
            <Typography
              style={{
                padding: 10,
                fontSize: 13,
                fontWeight: "bold",
                paddingLeft: 20,
              }}
            >
              Prescriptions Sent
              <br />
              <span style={{ fontWeight: 6, marginTop: 5, color: "#0389fb" }}>
                Brilinta 90 MG Oral Tablet
              </span>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              style={{
                padding: 10,
                fontSize: 13,
                fontWeight: "bold",
                paddingLeft: 20,
              }}
            >
              Status
              <br />
              <span style={{ fontWeight: 10, marginTop: 5, color: "green" }}>
                Sent Successfully
              </span>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              style={{
                padding: 10,
                fontSize: 13,
                fontWeight: "bold",
                paddingLeft: 20,
              }}
            >
              Coupon
              <br />
              <span style={{ fontWeight: 10, marginTop: 5, color: "green" }}>
                Coupon/Guide Available
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.box3}>
              <Typography
                style={{
                  fontSize: 6,
                  display: "flex",
                  alignContent: "flex-start",
                  fontWeight: "600",
                  borderBottom: "0.1px dotted gray",
                  margin: 5,
                  marginTop: 5,
                }}
              >
                This is your estimated price.
                <br />
                The pharmacy will provide exact pricing.
              </Typography>
              <Grid
                container
                spacing={0}
                style={{ fontSize: 7, margin: 5, fontWeight: "Bold" }}
              >
                <Grid item xs={3}>
                  Member ID
                </Grid>
                <Grid item xs={3}>
                  Group
                </Grid>
                <Grid item xs={3}>
                  Bin
                </Grid>
                <Grid item xs={3}>
                  PCN
                </Grid>
              </Grid>
              <Grid
                container
                spacing={0}
                style={{
                  fontSize: 7,
                  marginLeft: 5,
                  marginTop: -4,
                  paddingTop: 0,
                  fontWeight: "Bold",
                }}
              >
                <Grid item xs={3}>
                  KH391737
                </Grid>
                <Grid item xs={3}>
                  DR75
                </Grid>
                <Grid item xs={3}>
                  015843
                </Grid>
                <Grid item xs={3}>
                  GDC
                </Grid>
              </Grid>
            </Paper>

            <Paper className={classes.box2}>
              <Typography
                style={{ fontSize: 7, color: "white", paddingTop: 13 }}
              >
                Discounted price with this coupon
              </Typography>
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <Typography
                    style={{
                      fontSize: 25,
                      fontWeight: "Bold",
                      color: "white",
                      Display: "Flex",
                      marginLeft: 20,
                    }}
                  >
                    $7.86
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    style={{
                      fontSize: 8,
                      paddingTop: 9,
                      paddingLeft: 4,
                      margin: 8,
                      fontWeight: "Bold",
                      color: "white",
                    }}
                  >
                    at ShopRite
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper className={classes.box1}>
              <Typography
                style={{
                  fontSize: 15,
                  marginTop: 10,
                  fontWeight: "Bold",
                }}
              >
                Brilliant 90 MG
              </Typography>
              <Typography
                style={{
                  fontSize: 8,
                  margin: 0,
                  fontWeight: "500",
                }}
              >
                50 tablets
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          style={{
            borderBottom: ".5px solid #808080",
            margin: 25,
            marginTop: -25,
            paddingBottom: 15,
          }}
        >
          <Grid item xs={4}>
            <Typography
              style={{
                padding: 10,
                fontSize: 13,
                fontWeight: "bold",
                paddingLeft: 20,
              }}
            >
              Prescriptions Sent
              <br />
              <span style={{ fontWeight: 6, marginTop: 5, color: "#0389fb" }}>
                Brilinta 90 MG Oral Tablet
              </span>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              style={{
                padding: 10,
                fontSize: 13,
                fontWeight: "bold",
                paddingLeft: 20,
              }}
            >
              Status
              <br />
              <span style={{ fontWeight: 10, marginTop: 5, color: "green" }}>
                Sent Successfully
              </span>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              style={{
                padding: 10,
                fontSize: 13,
                fontWeight: "bold",
                paddingLeft: 20,
              }}
            >
              Coupon
              <br />
              <span style={{ fontWeight: 10, marginTop: 5, color: "green" }}>
                Coupon/Guide Available
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.box3}>
              <Typography
                style={{
                  fontSize: 6,
                  display: "flex",
                  alignContent: "flex-start",
                  fontWeight: "600",
                  borderBottom: "0.1px dotted gray",
                  margin: 5,
                  marginTop: 5,
                }}
              >
                This is your estimated price.
                <br />
                The pharmacy will provide exact pricing.
              </Typography>
              <Grid
                container
                spacing={0}
                style={{ fontSize: 7, margin: 5, fontWeight: "Bold" }}
              >
                <Grid item xs={3}>
                  Member ID
                </Grid>
                <Grid item xs={3}>
                  Group
                </Grid>
                <Grid item xs={3}>
                  Bin
                </Grid>
                <Grid item xs={3}>
                  PCN
                </Grid>
              </Grid>
              <Grid
                container
                spacing={0}
                style={{
                  fontSize: 7,
                  marginLeft: 5,
                  marginTop: -4,
                  paddingTop: 0,
                  fontWeight: "Bold",
                }}
              >
                <Grid item xs={3}>
                  KH391737
                </Grid>
                <Grid item xs={3}>
                  DR75
                </Grid>
                <Grid item xs={3}>
                  015843
                </Grid>
                <Grid item xs={3}>
                  GDC
                </Grid>
              </Grid>
            </Paper>

            <Paper className={classes.box2}>
              <Typography
                style={{ fontSize: 8, color: "white", paddingTop: 10 }}
              >
                Discounted price with this coupon
              </Typography>
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <Typography
                    style={{
                      fontSize: 25,
                      fontWeight: "Bold",
                      color: "white",
                      Display: "Flex",
                      marginLeft: 20,
                    }}
                  >
                    $7.86
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    style={{
                      fontSize: 8,
                      paddingTop: 9,
                      paddingLeft: 4,
                      margin: 8,
                      fontWeight: "Bold",
                      color: "white",
                    }}
                  >
                    at ShopRite
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper className={classes.box1}>
              <Typography
                style={{
                  fontSize: 15,
                  marginTop: 10,
                  fontWeight: "Bold",
                }}
              >
                Brilliant 90 MG
              </Typography>
              <Typography
                style={{
                  fontSize: 8,
                  margin: 0,
                  fontWeight: "500",
                }}
              >
                50 tablets
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.Button2}>Send</Button>
          <Button className={classes.Button1}>Print Summary</Button>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <div>
      <ModalButton
        height="fit-content"
        padding="5px 20px"
        borderRadius="20px"
        onClick={handleOpen}
      >
        Process Medications
      </ModalButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
