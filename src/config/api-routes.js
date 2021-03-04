import { Service } from './index';

const APIROUTE = {
  DASHBOARD: {

  },
  TERM_AND_CONDITION: {
    GET: {
      URL: Service + 'api/term-and-condition',
      METHOD: 'GET',
    },
    CREATE: {
      URL: Service + 'api/term-and-condition/create',
      METHOD: 'GET',
    },
  }
}

export default APIROUTE;
