import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Pages/Header";
import Student from "./Pages/Student";
import BusRoute from "./Pages/BusRoute";
import Driver from "./Pages/Driver";
import Vehicle from "./Pages/Vehicle";
import { Grid, Box, Stack, Button } from "@mui/material";
import StudentDetails from "./Pages/StudentDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box>
            <Stack spacing={5} mt={5} sx={{ alignItems: "center" }}>
              <Link style={{textDecoration:'none'}} to={"student/"}>
                <Button variant="contained" color="warning" sx={{ width: 200 }} size="large">
                  Students
                </Button>
              </Link>
              <Link style={{textDecoration:'none'}} to={"route/"}>
                <Button variant="contained" color="success" sx={{ width: 200 }} size="large">
                  Routes
                </Button>
              </Link>
              <Link style={{textDecoration:'none'}} to={"driver/"}>
                <Button variant="contained" color="secondary" sx={{ width: 200 }} size="large">
                  Driver
                </Button>
              </Link>
              <Link style={{textDecoration:'none'}} to={"vehicle/"}>
                <Button variant="contained" color="error" sx={{ width: 200 }} size="large">
                  Buses
                </Button>
              </Link>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="student/" index element={<Student />} />
            <Route path={`student/:id/`} index element={<StudentDetails />} />
            <Route path="route/" index element={<BusRoute />} />
            <Route path="driver/" index element={<Driver />} />
            <Route path="vehicle/" index element={<Vehicle />} />
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
