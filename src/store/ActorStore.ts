import { makeAutoObservable } from "mobx";

class ActorStore {
  hoveredActorId: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setHoveredActorId(id: string | null) {
    this.hoveredActorId = id;
  }
}

const actorStore = new ActorStore();
export default actorStore;