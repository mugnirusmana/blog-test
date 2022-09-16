import axios from 'axios';
import { APIROUTE } from './../config';

export const getBlog = () => {
    return axios({
      url: APIROUTE.BLOG.GET.URL,
      method: APIROUTE.BLOG.GET.METHOD,
    });
}

export const createBlog = (params) => {
    return axios({
      url: APIROUTE.BLOG.CREATE.URL,
      method: APIROUTE.BLOG.CREATE.METHOD,
      params: params,
    });
}

export const editBlog = (params, id) => {
    return axios({
      url: APIROUTE.BLOG.UPDATE.URL.replace(':id',id),
      method: APIROUTE.BLOG.UPDATE.METHOD,
      params: params,
    });
}

export const detailBlog = (id) => {
    return axios({
      url: APIROUTE.BLOG.UPDATE.URL.replace(':id',id),
      method: APIROUTE.BLOG.UPDATE.METHOD,
    });
}

export const removeBlog = (id) => {
    return axios({
      url: APIROUTE.BLOG.REMOVE.URL.replace(':id',id),
      method: APIROUTE.BLOG.REMOVE.METHOD,
    });
}