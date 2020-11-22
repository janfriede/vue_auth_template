import request from '@/utils/request';

export function login(data) {
  return request({
    url: 'api/auth/login',
    method: 'post',
    params: data,
  });
}

export function logout() {
  return request({
    url: 'api/auth/logout',
    method: 'get',
  });
}