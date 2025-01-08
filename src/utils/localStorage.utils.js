export const getUserFromLocalStorage = () => {
  const user = window.localStorage.getItem("loggedNoteappuser");
  return user ? JSON.parse(user) : null;
};
