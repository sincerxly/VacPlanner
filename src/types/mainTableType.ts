import { DataItem } from "../store/useData";

export interface MainTableType{
    isConfirm : boolean,
    data : DataItem[],
    mainContainerRef : React.RefObject<HTMLDivElement>,
    handleTableClick : (id:number)=>void
}