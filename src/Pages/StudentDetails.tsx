import { Box, Button, Card, CardActions, CardContent, CardMedia, Modal, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { studentReducerState } from "../redux/store";
import { DetailsStudent } from "../redux/studentActions";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const StudentDetails = () => {
  const { id } = useParams<{ id: string }>();
  let studentId: number = parseInt(id as string);
  const dispatch = useAppDispatch();
  const studentData = useAppSelector(studentReducerState);

  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(DetailsStudent(studentId));
  }, [dispatch, studentId]);

  return (
    <Box my={5} marginRight={2}>
      {studentData.students.map((student) => (
        <Card key={student.student_id} sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image="https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png" title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${student.name.charAt(0).toUpperCase()}${student.name.slice(1)}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Class: ${student.grade} - ${student.division.toUpperCase()}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Roll No.: ${student.roll_no}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Address: ${student.address}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Bus Stop: ${student.bus_stop}`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={handleOpen} size="small">
              Edit
            </Button>
            <Button size="small">Delete</Button>
          </CardActions>
        </Card>
      ))}
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default StudentDetails;
