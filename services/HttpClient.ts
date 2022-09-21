import axios, { AxiosError } from 'axios';

type ClientResponse = {
  success: boolean;
  data?: any;
  message?: string;
  retry?: boolean;
  isPending?: boolean;
};

class HttpClient {
  private client = axios.create({
    baseURL: 'http://3.234.140.146/api',
    headers: {
      'content-type': 'application/json',
    },
  });

  private refreshToken: string = '';

  constructor() {}

  public hasToken = () => {
    return this.refreshToken !== '';
  };

  public get = async (url: string, data?: any): Promise<ClientResponse> => {
    try {
      const resData = await this.client.get(url, data);
      return {
        success: true,
        data: resData.data,
      };
    } catch (err) {
      const result = await this.handleError(err as AxiosError);
      if (result.retry) {
        try {
          const retryResult = await this.get(url, data);
          return {
            success: true,
            data: retryResult.data,
          };
        } catch (err) {
          return await this.handleError(err as AxiosError);
        }
      }
      return result;
    }
  };

  public post = async (url: string, data?: any): Promise<ClientResponse> => {
    try {
      const resData = await this.client.post(url, data);
      return {
        success: true,
        data: resData,
      };
    } catch (err) {
      const result = await this.handleError(err as AxiosError);
      if (result.retry) {
        try {
          const retryResult = await this.post(url, data);
          return {
            success: true,
            data: retryResult.data,
          };
        } catch (err) {
          return await this.handleError(err as AxiosError);
        }
      }
      return result;
    }
  };

  public delete = async (url: string, data?: any): Promise<ClientResponse> => {
    try {
      const resData = await this.client.delete(url, data);
      return {
        success: true,
        data: resData,
      };
    } catch (err) {
      const result = await this.handleError(err as AxiosError);
      if (result.retry) {
        try {
          const retryResult = await this.delete(url, data);
          return {
            success: true,
            data: retryResult.data,
          };
        } catch (err) {
          return await this.handleError(err as AxiosError);
        }
      }
      return result;
    }
  };

  public put = async (url: string, data?: any): Promise<ClientResponse> => {
    try {
      const resData = await this.client.put(url, data);
      return {
        success: true,
        data: resData,
      };
    } catch (err) {
      const result = await this.handleError(err as AxiosError);
      if (result.retry) {
        try {
          const retryResult = await this.put(url, data);
          return {
            success: true,
            data: retryResult.data,
          };
        } catch (err) {
          return await this.handleError(err as AxiosError);
        }
      }
      return result;
    }
  };

  private handleError = async (err: AxiosError): Promise<ClientResponse> => {
    const response = err?.response;
    if (!response) {
      return {
        success: false,
        message: 'Unable to connect to server',
      };
    }
    switch (response.status) {
      case 400:
      case 401:
      case 404:
        return {
          success: false,
          message: (response.data as any).detail,
        };
      case 403:
        await this.refreshAccessToken();
        return {
          success: false,
          retry: true,
        };
      case 407:
        window.location.href = '/confirm';
        return {
          success: false,
        };
      case 500:
        return {
          success: false,
          message: (response.data as any).detail,
        };
      case 0:
        return {
          success: false,
          message: 'Unable to connect to server',
        };
      default:
        console.log('Un catched error:', response);
        return {
          success: false,
        };
    }
  };

  private refreshAccessToken = async () => {
    this.client.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${this.refreshToken}`;
    const result = await this.get('/auth/refresh');

    if (!result.success) {
      this.setTokens('', '');
    }
    this.setTokens(result.data['access_token'], result.data['refresh_token']);
  };

  public setTokens = (accessToken: string, refreshToken: string) => {
    this.client.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${accessToken}`;
    this.refreshToken = refreshToken;
    window.localStorage.setItem('accessToken', accessToken);
    window.localStorage.setItem('refreshToken', refreshToken);
  };
}

export default new HttpClient();
