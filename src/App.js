import { API_URL } from "./config";

// get all categories
const getAllCategories = async () => {
  const response = await fetch(API_URL + "categories.php");
  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    `Ошибка по адресу ${response.url}, статус ошибки ${response.status}`
  );
};

const getProductsByCategoryName = async (name) => {
  const response = await fetch(API_URL + `filter.php?c=${name}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    `Ошибка по адресу ${response.url}, статус ошибки ${response.status}`
  );
};

const getProductById = async (id) => {
  const response = await fetch(API_URL + `lookup.php?i=${id}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    `Ошибка по адресу ${response.url}, статус ошибки ${response.status}`
  );
};



export { getAllCategories, getProductsByCategoryName, getProductById };
