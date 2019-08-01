export function setLoginData(data) {
  return {
    type: 'userLogin',
    payload: {
      ...data,
      isUserLoggedIn: true
    }
  }
}
