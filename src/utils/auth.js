import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return localStorage.getItem('user_token')
  // return Cookies.get(TokenKey)
}

export function setToken(token) {
  return localStorage.setItem('user_token',token)
  // return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem('user_token')
  // return Cookies.remove(TokenKey)
}
