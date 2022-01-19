import type { GetDataSuccessError, GetDataSuccessResult } from './interfaces';

export const getData = async <T>(
  url: string
): Promise<GetDataSuccessResult<T> | GetDataSuccessError> => {
  try {
    const response = await fetch(url);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await response.json();
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    alert(error?.message);
    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
      errorMessage: error?.message
    };
  }
};
