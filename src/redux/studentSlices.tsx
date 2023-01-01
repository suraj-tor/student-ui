import { createSlice } from "@reduxjs/toolkit";

export interface StudentType {
  student_id: number;
  name: string;
  grade: number;
  division: string;
  roll_no: number;
  address: string;
  bus_stop: string;
  route_id: number;
}

export const StudentState: StudentType[] = [
  {
    student_id: 0,
    name: "",
    grade: 0,
    division: "",
    roll_no: 0,
    address: "",
    bus_stop: "",
    route_id: 0,
  },
];

const studentReducer = createSlice({
  name: "student",
  initialState: StudentState,
  reducers: {
    getStudent(state, action) {
      return [...action.payload];
    },
    retrieveStudent(state, action) {
      return [...action.payload];
    },
  },
});

export const studentAction = studentReducer.actions;

export default studentReducer;
