import { Component, State, h } from "@stencil/core";
import { MyService } from "../../services/my-service";
import { MyDataType } from "../../interfaces/my-data";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  @State() items: MyDataType[] = [];

  componentDidLoad() {
    MyService.myData.subscribe(data => {
      console.log("Received data: ", data);
      this.items = [...data];
    });
  }

  testAddData() {
    MyService.addData({
      title: "test",
      description: "test"
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-button onClick={() => this.testAddData()}>Test</ion-button>

        <ion-list>
          {this.items.map(item => (
            <ion-item>
              <ion-label>{item.title}</ion-label>
            </ion-item>
          ))}
        </ion-list>
      </ion-content>
    ];
  }
}
