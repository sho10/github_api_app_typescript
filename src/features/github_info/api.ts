import apiClient from '../../utils/apiClient';

export const fetchGitHubRequest = async (searchInput: string) => {
  const response = await apiClient.get(`${searchInput}/repos`);
  return response.data;
};
