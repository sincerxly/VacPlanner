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
    const notify = () => toast("테이블을 삭제할 수 없습니다!");
    const startError = () => toast("종료 시간보다 늦을 수 없습니다!");
    const endError = () => toast("시작 시간보다 빠를 수 없습니다!");
    
    const handleDeleteTable = () => {
        if (data.length < 2) {
            notify();
        } else {
            if (selectTable !== null) {
                const deleted = data.filter(
                    (_, index) => index !== selectTable
                );
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
            bgColor : "transparent",
            bgImg : "",
            startTime,
            endTime,
        });
    };

    const handleClose = () => {
        setIsClose((prev) => !prev);
    };

    const handleStartTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value < endTime) {
            startError();
            return; 
        } else {
            const value = e.target.value;
            setStartTime(value);
            if (selectTable !== null) {
                const tableData = data[selectTable];
                if (tableData) {
                    updateData(tableData.id, { startTime: value });
                }
            }
        }
    };

    const handleEndTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value < startTime) {
            endError();
            return; 
        } else {
            const value = e.target.value;
            setEndTime(value);
            if (selectTable !== null) {
                const tableData = data[selectTable];
                if (tableData) {
                    updateData(tableData.id, { endTime: value });
                }
            }
        }
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
        setName(data[id].name);
        setBgColor(data[id].bgColor);
        setStartTime(data[id].startTime);
        setEndTime(data[id].endTime);
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
