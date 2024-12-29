import { useData } from "../../../../store/useData";
import { Form } from ".";

const useAddForm = () => {
  const { data, setData } = useData();

  const addForm = (
    name: string,
    bgColor: string,
    bgImg: string,
    startTime: string,
    endTime: string
  ) => {
    const id = data.length;
    const newForm = new Form(id, name, bgColor, bgImg, startTime, endTime);
    setData(newForm);
  };

  return addForm;
};

export default useAddForm;
