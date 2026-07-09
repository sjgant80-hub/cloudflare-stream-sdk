/**
 * cloudflare-stream-sdk TypeScript declarations
 */
export interface CloudflareStreamOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class CloudflareStream {
  constructor(options?: CloudflareStreamOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default CloudflareStream;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
