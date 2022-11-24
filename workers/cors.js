// Reference: https://developers.cloudflare.com/workers/examples/cors-header-proxy
// Uses Cloudflare worker on Cloudflare hosted DNS w/super.so site using custom domain
// 1. Create service worker called "cors" - https://developers.cloudflare.com/workers/platform/services
// 2. Connect domain in Clouflare for super.so site - https://developers.cloudflare.com/workers/platform/routing/custom-domains
// 3. Create route for worker to use - https://developers.cloudflare.com/workers/platform/routes/#matching-behavior
// 4. Add custom variables for ALLOWED_ORIGINS & CONTENT_POLICY, or update the code below with hard coded info. See ./.env for examples
// 5. Add the below code to the worker and deploy

// Header constants
const allowedOrigins = process.env.ALLOWED_ORIGINS;
const contentPolicy = process.env.CONTENT_POLICY;
const allowedMethods = "GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH"
const allowedHeaders = "Accept, Origin, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
const referrerPolicy = "strict-origin-when-cross-origin" // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy

// Set default headers
const corsHeaders = {
  "Access-Control-Allow-Origin": allowedOrigins,
  "Access-Control-Allow-Headers": allowedHeaders,
  "Access-Control-Allow-Methods": allowedMethods,
  "Referrer-Policy": referrerPolicy,
  "Access-Control-Max-Age": "86400",
  "Content-Security-Policy": contentPolicy,
  "Access-Control-Request-Headers": allowedHeaders,
}
const newRequestInit = {
    // Change headers, note this method will erase existing headers
    headers: corsHeaders,
  };

addEventListener('fetch', event => {
  event.passThroughOnException();
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const newRequest = new Request(request, newRequestInit);
  // Set Request CORS headers
  newRequest.headers.set("Access-Control-Allow-Origin", allowedOrigins)
  newRequest.headers.set("Access-Control-Allow-Headers", allowedHeaders)
  newRequest.headers.set("Access-Control-Request-Methods", allowedMethods)
  newRequest.headers.set("Access-Control-Allow-Methods", allowedMethods)
  newRequest.headers.set("Referrer-Policy", referrerPolicy)
  newRequest.headers.set("Content-Security-Policy", contentPolicy)
  newRequest.headers.set("Access-Control-Request-Headers", allowedHeaders)
  newRequest.headers.set("Access-Control-Max-Age", 86400)
  console.log("New request headers have been set.")
  const response = await fetch(newRequest);

  // Clone the response so that it's no longer immutable
  const newResponse = new Response(response.body, response);

  // Set Response CORS headers
  newResponse.headers.set("Access-Control-Allow-Origin", allowedOrigins)
  newResponse.headers.set("Access-Control-Allow-Headers", allowedHeaders)
  newResponse.headers.set("Access-Control-Request-Methods", allowedMethods)
  newResponse.headers.set("Access-Control-Allow-Methods", allowedMethods)
  newResponse.headers.set("Referrer-Policy", referrerPolicy)
  newResponse.headers.set("Content-Security-Policy", contentPolicy)
  newResponse.headers.set("Access-Control-Request-Headers", allowedHeaders)
  newResponse.headers.set("Access-Control-Max-Age", 86400)
  console.log("New response headers have been set.")
  return newResponse;
}
