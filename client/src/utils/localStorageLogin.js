export const getSavedUser = (key) => {
  const recipesList = localStorage.getItem(key);
  return recipesList ? JSON.parse(recipesList) : {};
};

export const saveUser = (key, obj) => {
  localStorage.setItem(key, JSON.stringify(obj));
};

export const removeUser = (key) => {
  if (!key) throw new Error('Você deve fornecer uma chave válida');
  localStorage.clear(key);
};
