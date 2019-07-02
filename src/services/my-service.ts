import { BehaviorSubject } from "rxjs";
import { MyDataType } from "../interfaces/my-data";

class MyServiceController {
  public myData: BehaviorSubject<MyDataType[]> = new BehaviorSubject<MyDataType[]>([]);
  private testStorage: MyDataType[] = []; // Just for testing

  constructor() {}

  load(): void {
    this.myData.next(this.testStorage);
  }

  addData(data): void {
    this.testStorage.push(data);
    this.myData.next(this.testStorage);
  }
}

export const MyService = new MyServiceController();
