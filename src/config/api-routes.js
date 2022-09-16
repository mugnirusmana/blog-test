import { Service } from './index';

const APIROUTE = {
  DASHBOARD: {

  },
  TERM_AND_CONDITION: {
    GET: {
      URL: Service.BASE_API + 'api/term-and-condition',
      METHOD: 'GET',
    },
    CREATE: {
      URL: Service.BASE_API + 'api/term-and-condition/create',
      METHOD: 'GET',
    },
  },
  BLOG: {
    GET: {
      URL: Service.BASE_API,
      METHOD: 'GET',
    },
    CREATE: {
      URL: Service.BASE_API,
      METHOD: 'POST',
    },
    UPDATE: {
      URL: Service.BASE_API + ':id',
      METHOD: 'PUT',
    },
    DETAIL: {
      URL: Service.BASE_API + ':id',
      METHOD: 'DELETE',
    },
    REMOVE: {
      URL: Service.BASE_API + ':id',
      METHOD: 'DELETE',
    }
  }
}

export default APIROUTE;
