import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Divider from "@material-ui/core/Divider";
import { Input } from "../../style/Input";
import { Label } from "../../style/Label";
import { Button } from "../../style/Button";
import { Table } from "../../style/Modal";
import { FaEdit } from "react-icons/fa";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SimpleModal = ({ value }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
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
      <h4 style={{ color: "#2196F3" }}>Add/Edit Issue</h4>
      <Divider />
      <div>
        <Table>
          <tr>
            <th>
              <Label display="inline">Type : Problem</Label>
            </th>
            <td>
              {" "}
              <Input height="40px" display="inline" />{" "}
            </td>
          </tr>
          <tr>
            <th>
              <Label display="inline">Title:</Label>
            </th>
            <td>
              {" "}
              <Input height="40px" display="inline" />{" "}
            </td>
          </tr>
          <tr>
            <th>
              <Label display="inline">Coding:</Label>
            </th>
            <td>
              {" "}
              <Input height="60px" display="inline" />
              <div style={{ display: "block", margin: "5px" }}>
                <Button
                  height="fit-content"
                  padding="5px 10px"
                  borderRadius="5px"
                >
                  Add
                </Button>{" "}
                <Button
                  height="fit-content"
                  padding="5px 10px"
                  borderRadius="5px"
                >
                  Remove
                </Button>
              </div>
            </td>
          </tr>
          <tr>
            <th>
              <Label display="inline">Begin Date:</Label>
            </th>
            <td>
              {" "}
              <Input height="40px" display="inline" />{" "}
            </td>
          </tr>
          <tr>
            <th>
              <Label display="inline">End Date:</Label>
            </th>
            <td>
              {" "}
              <Input height="40px" display="inline" />{" "}
            </td>
          </tr>
        </Table>
        <Button
          float="right"
          margin="30px"
          padding="10px 25px"
          height="fit-content"
          borderRadius="20px"
        >
          Save
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Button borderRadius="30px" padding="5px 20px" height="fit-content" onClick={handleOpen} >
        + Add
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{ outline: "none !important" }}
      >
        {body}
      </Modal>
    </div>
  );
};

export default SimpleModal;
