import { httpClient, HttpMethod } from '@activepieces/pieces-common';
import { DolibarrAuthType } from '../auth';

export async function dolibarrRequest<T = any>({
  auth,
  method,
  endpoint,
  body,
  queryParams,
}: {
  auth: DolibarrAuthType;
  method: HttpMethod;
  endpoint: string;
  body?: Record<string, unknown>;
  queryParams?: Record<string, string>;
}): Promise<T> {
  const response = await httpClient.sendRequest<T>({
    method,
    url: `${auth.base_url}${endpoint}`,
    headers: { DOLAPIKEY: auth.api_key },
    body,
    queryParams,
  });
  return response.body;
}
