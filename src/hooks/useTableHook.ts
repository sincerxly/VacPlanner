import { useState } from "react";
import useAddForm from "../components/elements/tableForm/addForm";
import { useData } from "../store/useData";
import { useSelectTable } from "../store/useSelectTable";
import { toast } from "react-toastify";

export const useTableHook = () => {
    const { data, setData } = useData();
    const { updateData } = useData();
    const addForm = useAddForm();
    const [isClose, setIsClose] = useState<boolean>(false);
    const [startTime, setStartTime] = useState<string>("");
    const [endTime, setEndTime] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [bgImg, setBgImg] = useState<string>("");
    const [bgColor, setBgColor] = useState<string>("");
    const { selectTable, setSelectTable } = useSelectTable();
    const notify = () => toast("테이블을 삭제할 수 없습니다!")
    const handleDeleteTable = () => {
        if (data.length < 2){
            notify()
        }else{
            if (selectTable !== null) {
                const deleted = data.filter((_, index) => index !== selectTable);
                (useData.setState as any)({ data: [] });
                deleted.forEach((item) => {
                    setData(item);
                });
                setSelectTable(null);
            }
     }
    };

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

    const handleChangeName = (newName: string) => {
        setName(newName);
        if (selectTable !== null) {
            const tableData = data[selectTable];
            if (tableData) {
                updateData(tableData.id, { name: newName });
            }
        }
    };

    const handleChangeBgColor = (newBgColor: string) => {
        setBgColor(newBgColor);
        if (selectTable !== null) {
            const tableData = data[selectTable];
            if (tableData) {
                updateData(tableData.id, { bgColor: newBgColor });
            }
        }
    };

    const handleChangeBgImg = (file: File) => {
        const previewUrl = URL.createObjectURL(file);
        setBgImg(previewUrl);
        if (selectTable !== null) {
            const tableData = data[selectTable];
            if (tableData) {
                updateData(tableData.id, { bgImg: previewUrl });
            }
        }
    };

    const handleStopClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const handleTableClick = (id: number) => {
        setSelectTable(id);
        setBgColor(data[id].bgColor);
    };

    return {
        handleDeleteTable,
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
        handleChangeBgColor,
        handleChangeBgImg,
    };
};
