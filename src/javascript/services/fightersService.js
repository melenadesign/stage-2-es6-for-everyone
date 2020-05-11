import { callApi } from '../helpers/apiHelper';

class FighterService {
  async getFighters() {
    try {
      const endpoint = 'fighters.json';
      const apiResult = await callApi(endpoint, 'GET');

      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(id) {
    // todo: implement this method
    // endpoint - `details/fighter/${id}.json`;
    try {
      const fighterEndpoint = `details/fighter/${id}.json`;
      const fighterResult = await callApi(fighterEndpoint, 'GET');
      console.log(fighterResult);//debug
      return fighterResult;
    } catch (error) {
      throw error;
    }


  }
}

export const fighterService = new FighterService();
