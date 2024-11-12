const getQueries = async (queryType = null, queryUser = null) => {
  try {
    const response = await api.get(`/management-team/queries`, {
      params: { queryType, queryUser },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error getting catalog:", error.response.data);
      throw new Error("Catalog fetch failed: " + error.response.data.message);
    } else {
      console.error("Unexpected Error:", error);
      throw new Error(error.message);
    }
  }
};
