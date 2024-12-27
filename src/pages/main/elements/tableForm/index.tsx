import React from "react";
import { useData } from "../../../../store/useData";

export const TableForm: React.FC = () => {
  const { data, setData } = useData();

  class Form {
    id: number;
    name: string;
    detail: string;
    bgColor: string;
    bgImg: string;
    startTime: string;
    endTime: string;
    isSelected: boolean;

    constructor() {
      this.id = data.length;
      this.name;
      this.bgColor;
      this.bgImg;
      this.startTime;
      this.endTime;
      this.isSelected = false;
    }
  }

  const form = new Form();
  const addForm = () => {
    setData(form);
  };
};
