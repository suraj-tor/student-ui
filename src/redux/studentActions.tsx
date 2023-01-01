import { Dispatch } from "@reduxjs/toolkit";
import Data from "../Axios/server";
import { studentAction, StudentType } from "./studentSlices";

export const GetStudents = () => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await Data.getStudent();
      dispatch(studentAction.getStudent(res));
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
};

export const DetailsStudent = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await Data.retrieveStudent(id);
      dispatch(studentAction.retrieveOneStudent(res));
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
};

export const CreateStudent = (data: StudentType) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await Data.createStudent(data);
      dispatch(studentAction.createStudent(res));
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
};

export const DeleteStudent = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await Data.deleteStudent(id);
      dispatch(studentAction.removeStudent(res));
      dispatch(GetStudents() as any);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
};

export const EditStudent = (id: number, data:StudentType) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await Data.updateStudent(id, data);
      dispatch(studentAction.updateStudent(res));
      dispatch(GetStudents() as any);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
};
