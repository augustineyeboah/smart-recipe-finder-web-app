export const fetchRecipes = async (query) => {
  const response = await fetch(
    ${BASE_URL}?query=${query}&number=10&apiKey=${API_KEY}
  );
  return response.json();
};