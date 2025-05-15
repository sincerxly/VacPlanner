import { useState } from "react";
import useAddForm from "../components/elements/tableForm/addForm";
import { useData } from "../store/useData";
import { useSelectTable } from "../store/useSelectTable";

export const useTableHook = () => {
    const { data, setData } = useData();
    const addForm = useAddForm();
    const [isClose, setIsClose] = useState<boolean>(false);
    const [startTime, setStartTime] = useState<string>("");
    const [endTime, setEndTime] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [bgImg, setBgImg] = useState<string>("");
    const [bgColor, setBgColor] = useState<string>("");
    const { selectTable, setSelectTable } = useSelectTable();

    const handleDeleteTable = () => {};

    const handleAddTable = () => {
        addForm({
            name: `테이블 ${data.length + 1}`,
            bgColor,
            bgImg,
            startTime,
            endTime,
        });
    };

    const handleClose = () => {
        setIsClose((prev) => !prev);
    };

    const handleStartTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartTime(e.target.value);
    };

    const handleEndTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEndTime(e.target.value);
    };

    const { updateData } = useData();

    const handleChangeName = (newName: string) => {
        setName(newName);
        if (selectTable !== null) {
            const tableData = data[selectTable];
            if (tableData) {
                updateData(tableData.id, { name: newName });
            }
        }
    };

    const handleStopClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const handleTableClick = (id: number) => {
        setSelectTable(id);
    };

    return {
        handleChangeName,
        handleStopClick,
        handleTableClick,
        handleAddTable,
        handleClose,
        handleStartTime,
        handleEndTime,
        bgImg,
        startTime,
        endTime,
        name,
        isClose,
        bgColor,
        setBgColor,
        setName,
        setBgImg,
    };
};
