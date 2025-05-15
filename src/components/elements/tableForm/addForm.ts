import { Form } from ".";
import { useData } from "../../../store/useData";
import { FormType } from "../../../types/formType";

const useAddForm = () => {
    const { data, setData } = useData();

    const addForm = ({
        name,
        bgColor,
        bgImg,
        startTime,
        endTime,
    }: FormType) => {
        const id = data.length;
        const newForm = new Form(id, name, bgColor, bgImg, startTime, endTime);
        setData(newForm);
    };

    return addForm;
};

export default useAddForm;
