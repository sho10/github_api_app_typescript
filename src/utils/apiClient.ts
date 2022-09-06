import axios from 'axios';
import config from '../config';
import qs from 'qs';

const apiClient = axios.create({
  baseURL: config.api.url,
  paramsSerializer: function (params) {
    return qs.stringify(params, {
      arrayFormat: 'brackets'
    });
  }
});

export default apiClient;
