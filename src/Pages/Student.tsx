import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { studentReducerState } from "../redux/store";
import { GetStudents } from "../redux/studentActions";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";

const Student = () => {
  const dispatch = useAppDispatch();
  const { students } = useAppSelector(studentReducerState);

  useEffect(() => {
      try {
        dispatch(GetStudents());
      } catch (error) {
        throw new Error("Failed to get the data");
      }
  }, [dispatch]);

  return (
    <>
      <Box my={5} marginRight={2}>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 575 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow sx={{backgroundColor:'black'}}>
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
                {students.map((element) => (
                  <TableRow>
                    <TableCell>{`${element.name.charAt(0).toUpperCase()}${element.name.slice(1)}`}</TableCell>
                    <TableCell>{element.grade}</TableCell>
                    <TableCell>{element.division}</TableCell>
                    <TableCell>{element.roll_no}</TableCell>
                    <TableCell>{element.address}</TableCell>
                    <TableCell>{element.bus_stop}</TableCell>
                    <TableCell>
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
