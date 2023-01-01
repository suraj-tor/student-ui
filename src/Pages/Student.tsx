import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { studentReducerState } from "../redux/store";
import { GetStudents } from "../redux/studentActions";

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

  console.log(students.map((item) => item));

  return <div>Student</div>;
};

export default Student;
