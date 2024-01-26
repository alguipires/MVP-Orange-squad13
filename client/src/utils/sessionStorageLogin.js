export const getSavedUser = (key) => {
  const recipesList = sessionStorage.getItem(key);
  return recipesList ? JSON.parse(recipesList) : {};
};

export const saveUser = (key, obj) => {
  sessionStorage.setItem(key, JSON.stringify(obj));
};

export const removeUser = (key) => {
  if (!key) throw new Error('Você deve fornecer uma chave válida');
  sessionStorage.removeItem(key);
};
