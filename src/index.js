/**
 * cloudflare-stream-sdk · sovereign wrapper for Cloudflare Stream
 * Video
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://developers.cloudflare.com/stream/
 * Homepage: https://www.cloudflare.com/products/cloudflare-stream/
 */

export class CloudflareStream {
  constructor({ apiKey, baseURL = 'https://www.cloudflare.com/products/cloudflare-stream/', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://developers.cloudflare.com/stream/. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('cloudflare-stream ' + res.status);
    return res.json();
  }
}

export default CloudflareStream;

// Metadata
export const meta = {
  "name": "Cloudflare Stream",
  "category": "Video",
  "homepage": "https://www.cloudflare.com/products/cloudflare-stream/",
  "docs_url": "https://developers.cloudflare.com/stream/",
  "endpoints_count": 0
};
