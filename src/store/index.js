import StandingsStore from './StandingsStore';

class RootStore {
  constructor() {
    this.standingsStore = new StandingsStore();
  }
}

const rootStore = (window.store = new RootStore());

export default rootStore;
