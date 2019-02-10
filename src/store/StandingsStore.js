import { observable, action } from 'mobx';
import axios from 'axios';

export default class StandingsStore {
  @observable standings = [];
  @observable standingsState = 'pending'; // 'pending' / 'done' / 'error'
  @observable selectValues = {};

  // Fetch standings by league, venue, season, conference
  @action
  fetchStandings(league, venue, season, conference) {
    this.standingsState = 'pending';
    let parameters;
    if (conference === undefined) {
      console.log('no conference, league: ', league);
      parameters = `${league}/standings/${venue}/${season}`;
    } else {
      console.log('conference defined, league: ', league);
      parameters = `${league}/standings/${venue}/${season}/${conference}`;
    }
    console.log('axios.get: ', process.env.REACT_APP_API_URL + parameters);
    axios
      .get(process.env.REACT_APP_API_URL + parameters)
      .then(response => response.data)
      .then(this.fetchStandingsSuccess)
      .catch(this.fetchStandingsError);
  }

  @action.bound
  fetchStandingsSuccess(standings) {
    this.standings = standings;
    this.standingsState = 'done';
  }

  @action.bound
  fetchStandingsError(error) {
    this.standingsState = 'error';
  }

  @action
  updateSelect() {}
}
