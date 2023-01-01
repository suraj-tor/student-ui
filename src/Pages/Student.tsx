import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { studentReducerState } from "../redux/store";
import { CreateStudent, DeleteStudent, GetStudents } from "../redux/studentActions";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
import { StudentType } from "../redux/studentSlices";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

let initialData = {
  name: "",
  grade: "",
  division: "",
  rollNo: "",
  address: "",
  busStop: "",
  route: "",
  nameTouched: false,
  gradeTouched: false,
  divisionTouched: false,
  rollNoTouched: false,
  addressTouched: false,
  busStopTouched: false,
  routeTouched: false,
};

interface actionType {
  type: string;
  payload: any;
}

const reducer = (state: typeof initialData, action: actionType) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "grade":
      return { ...state, grade: action.payload };
    case "division":
      return { ...state, division: action.payload };
    case "rollNo":
      return { ...state, rollNo: action.payload };
    case "address":
      return { ...state, address: action.payload };
    case "busStop":
      return { ...state, busStop: action.payload };
    case "route":
      return { ...state, route: action.payload };
    case "nameTouched":
      return { ...state, nameTouched: action.payload };
    case "gradeTouched":
      return { ...state, gradeTouched: action.payload };
    case "divisionTouched":
      return { ...state, divisionTouched: action.payload };
    case "rollNoTouched":
      return { ...state, rollNoTouched: action.payload };
    case "addressTouched":
      return { ...state, addressTouched: action.payload };
    case "busStopTouched":
      return { ...state, busStopTouched: action.payload };
    case "routeTouched":
      return { ...state, routeTouched: action.payload };
    default:
      throw new Error();
  }
};

const Student = () => {
  const studentdispatch = useAppDispatch();
  const { students } = useAppSelector(studentReducerState);

  useEffect(() => {
    try {
      studentdispatch(GetStudents());
    } catch (error) {
      throw new Error("Failed to get the data");
    }
  }, [studentdispatch]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Form Handle
  const [state, dispatch] = useReducer(reducer, initialData);
  const handleName = (event: any) => {
    dispatch({ type: "name", payload: event.target.value });
    dispatch({ type: "nameTouched", payload: true });
  };
  const handleGrade = (event: any) => {
    dispatch({ type: "grade", payload: event.target.value });
    dispatch({ type: "gradeTouched", payload: true });
  };
  const handleDivision = (event: any) => {
    dispatch({ type: "division", payload: event.target.value });
    dispatch({ type: "divisionTouched", payload: true });
  };
  const handleRollNo = (event: any) => {
    dispatch({ type: "rollNo", payload: event.target.value });
    dispatch({ type: "rollNoTouched", payload: true });
  };
  const handleAddress = (event: any) => {
    dispatch({ type: "address", payload: event.target.value });
    dispatch({ type: "addressTouched", payload: true });
  };
  const handleBusStop = (event: any) => {
    dispatch({ type: "busStop", payload: event.target.value });
    dispatch({ type: "busStopTouched", payload: true });
  };
  const handleRoute = (event: any) => {
    dispatch({ type: "route", payload: event.target.value });
    dispatch({ type: "routeTouched", payload: true });
  };

  // valid
  const validName = state.name.trim() !== "";
  const validGrade = state.grade !== ("" || 0);
  const validDivision = state.division.trim() !== "";
  const validRollNo = state.rollNo !== ("" || 0);
  const validAddress = state.address.trim() !== "";
  const validBusStop = state.busStop.trim() !== "";
  const validRoute = state.route !== ("" || 0);

  // Invalid
  const invalidName: boolean = !validName && state.nameTouched;
  const invalidGrade: boolean = !validGrade && state.gradeTouched;
  const invalidDivision: boolean = !validDivision && state.divisionTouched;
  const invalidRollNo: boolean = !validRollNo && state.rollNoTouched;
  const invalidAddress: boolean = !validAddress && state.addressTouched;
  const invalidBusStop: boolean = !validBusStop && state.busStopTouched;
  const invalidRoute: boolean = !validRoute && state.routeTouched;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch({ type: "nameTouched", payload: true });
    dispatch({ type: "gradeTouched", payload: true });
    dispatch({ type: "divisionTouched", payload: true });
    dispatch({ type: "rollNoTouched", payload: true });
    dispatch({ type: "addressTouched", payload: true });
    dispatch({ type: "busStopTouched", payload: true });
    dispatch({ type: "routeTouched", payload: true });
    if (!validName || !validGrade || !validDivision || !validRollNo || !validAddress || !validBusStop || !validRoute) {
      return;
    }

    const newStudent: StudentType = {
      name: state.name,
      grade: parseInt(state.grade),
      division: state.division,
      roll_no: parseInt(state.rollNo),
      address: state.address,
      bus_stop: state.busStop,
      route_id: state.route,
    };

    studentdispatch(CreateStudent(newStudent));
    console.log(newStudent);
    dispatch({ type: "nameTouched", payload: false });
    dispatch({ type: "gradeTouched", payload: false });
    dispatch({ type: "divisionTouched", payload: false });
    dispatch({ type: "rollNoTouched", payload: false });
    dispatch({ type: "addressTouched", payload: false });
    dispatch({ type: "busStopTouched", payload: false });
    dispatch({ type: "routeTouched", payload: false });
    setOpen(false);
  };

  return (
    <>
      <Box my={2} marginRight={2} sx={{ float: "right" }} onClick={handleClickOpen}>
        <Button variant="contained">Add Student</Button>
      </Box>

      {/* Add student Form */}
      <Box component={"form"}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Student Details</DialogTitle>
          <DialogContent>
            <TextField onChange={handleName} onBlur={handleName} error={invalidName} value={state.name} margin="dense" id="name" label="Name" type="text" fullWidth variant="standard" />
            <TextField onChange={handleGrade} onBlur={handleGrade} error={invalidGrade} value={state.grade} margin="dense" id="grade" label="Grade" type="number" variant="standard" />
            <TextField onChange={handleDivision} onBlur={handleDivision} error={invalidDivision} value={state.division} sx={{ mx: 3 }} margin="dense" id="division" label="Division" type="text" variant="standard" />
            <TextField onChange={handleRollNo} onBlur={handleRollNo} error={invalidRollNo} value={state.rollNo} margin="dense" id="rollNo" label="Roll No." type="number" variant="standard" />
            <TextField onChange={handleAddress} onBlur={handleAddress} error={invalidAddress} value={state.address} margin="dense" id="address" label="Address" type="text" variant="standard" />
            <TextField onChange={handleBusStop} onBlur={handleBusStop} error={invalidBusStop} value={state.busStop} sx={{ mx: 3 }} margin="dense" id="bustStop" label="Bus Stop" type="text" variant="standard" />
            <FormControl variant="standard" sx={{ my: 1, minWidth: 170 }}>
              <InputLabel id="select-label">Route</InputLabel>
              <Select labelId="select-label" id="demo" error={invalidRoute} value={state.route} label="Route" onBlur={handleRoute} onChange={handleRoute}>
                {students.map((element, index) => (
                  <MenuItem key={index} value={element.route_id}>{`Route - ${element.route_id}`}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </Box>

      {/* Table */}
      <Box mb={5} marginRight={2}>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 520 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "black" }}>
                  <TableCell>Name</TableCell>
                  <TableCell>Grade</TableCell>
                  <TableCell>Division</TableCell>
                  <TableCell>Roll No.</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Bus Stop</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((element, index) => (
                  <TableRow key={index}>
                    <TableCell>{`${element.name.charAt(0).toUpperCase()}${element.name.slice(1)}`}</TableCell>
                    <TableCell>{element.grade}</TableCell>
                    <TableCell>{element.division}</TableCell>
                    <TableCell>{element.roll_no}</TableCell>
                    <TableCell>{element.address}</TableCell>
                    <TableCell>{element.bus_stop}</TableCell>
                    <TableCell sx={{ alignContent: "center", alignItems: "center" }}>
                      <Button onClick={() => studentdispatch(DeleteStudent(element.student_id as number))}>
                        <DeleteForeverIcon />
                      </Button>
                      <Link to={`${element.student_id}`} style={{ textDecoration: "none" }}>
                        <LaunchIcon />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
};

export default Student;
