/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */

export const useHttp = () => {
  const getMethod = async (url: string, accessToken?: string) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: accessToken ?? '',
      },
    };

    const response = await fetch(url, options);
    return Promise.resolve(response);
  };

  return {
    getMethod,
  };
};
