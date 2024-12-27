import { Form } from ".";
import { useData } from "../../../../store/useData";

export const addForm = (
  id: number,
  name: string,
  bgColor: string,
  bgImg: string,
  startTime: string,
  endTime: string
) => {
  const { setData } = useData();
  const newForm = new Form(id, name, bgColor, bgImg, startTime, endTime);
  setData(newForm);
};
