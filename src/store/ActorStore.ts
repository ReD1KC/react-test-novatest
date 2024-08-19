import { makeAutoObservable } from "mobx";

class ActorStore {
  hoveredActor: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setHoveredActor(actorName: string) {
    this.hoveredActor = actorName;
  }

  clearHoveredActor() {
    this.hoveredActor = null;
  }
}

const actorStore = new ActorStore();
export default actorStore;