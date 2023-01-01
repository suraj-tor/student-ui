import { Dispatch } from "@reduxjs/toolkit";
import Data from "../Axios/server";
import { studentAction } from "./studentSlices";

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

export const RetrieveStudent = (id:number) => {
  return async (dispatch:Dispatch) => {
    try {
      const res = await Data.retrieveStudent(id);
      dispatch(studentAction.retrieveStudent(res));
    } catch (error) {
      console.log("something went wrong", error);
    }
  }
}