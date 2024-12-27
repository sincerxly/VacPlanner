export class Form {
  id: number;
  name: string;
  bgColor: string;
  bgImg: string;
  startTime: string;
  endTime: string;

  constructor(
    id: number,
    name: string,
    bgColor: string,
    bgImg: string,
    startTime: string,
    endTime: string
  ) {
    this.id = id;
    this.name = name;
    this.bgColor = bgColor;
    this.bgImg = bgImg;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
