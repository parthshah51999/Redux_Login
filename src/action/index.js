export const setLoginData = data => (
    {
      type: 'userLogin',
      payload: {
        ...data,
        isUserLoggedIn: true,
      },
    }
  ),
  logoutUser = () => (
    {
      type: 'userLogout',
      payload: {
        isUserLoggedIn: false,
      },
    }
  );
