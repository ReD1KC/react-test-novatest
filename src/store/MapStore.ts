// import { makeAutoObservable } from "mobx";

// class MapStore {
//     x: number = 0;
//     y: number = 0;
//     isDragging: boolean = false;

//     constructor() {
//         makeAutoObservable(this);
//     }

//     startDragging = () => {
//         this.isDragging = true;
//     };

//     stopDragging = () => {
//         this.isDragging = false;
//     };

//     move = (movementX: number, movementY: number) => {
//         if (this.isDragging) {
//             this.x += movementX;
//             this.y += movementY;
//         }
//     };
// }

// export const mapStore = new MapStore();
