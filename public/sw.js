if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>t(e,a),d={module:{uri:a},exports:c,require:r};s[a]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-3c9d0171"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/132-b38879188cf9bbf8.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/159-00025aa590e7057a.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/208-70b09a2fabba835d.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/23-193820e4cea40ad3.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/260-7bcda1366d0d126b.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/270-c189495c53473969.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/2cdf566e-f8aca1a31f0dd570.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/339-ce8f03837051e224.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/44-820d851da243aff7.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/459-c9a4bc60c3469992.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/460-e5dd4cc76267f1d8.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/481.20473c0cb5641f1f.js",revision:"20473c0cb5641f1f"},{url:"/_next/static/chunks/505-9f2dee2d6da8443f.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/506-a8c06c31b7bcd6df.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/513-30519eb6f06cca2c.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/585-38007cdb634119d6.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/587-71aba69b403e2948.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/588-65613c7a793c2806.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/693-e61096a6c48bfed2.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/715-1e21ab7df1bd7b03.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/767-2bfdc04328bc0230.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/961-48315f7ff1bd22c2.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/988-1e548376f91dfd54.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/app/_not-found-25c255b470e6b703.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/app/dashboard/page-dc836b7df97f9d64.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/app/install/page-899ab6c5045ccccd.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/app/layout-b932459819299b6d.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/app/login/page-8636d1295bbf47bd.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/app/page-b25007ad8e6ef2f6.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/app/profile/page-b4f6b19d57f7cfb4.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/app/register/page-a2dc4ab52e48b467.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/app/settings/bank-account/page-3bd5ec09e4b7b53b.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/app/settings/layout-26222bcd64a6b4f6.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/app/settings/page-1f0a90209c34cb46.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/app/validation/page-44f300e4576fb6c1.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/fcf7f9d9-018ecbe7afacad4a.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/framework-4951739b1a051b2a.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/main-223e2b7eb5bb13de.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/main-app-22297294de04b5a3.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/pages/_app-37cf284159c6f014.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/pages/_error-a0f0937dc85bbefe.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-2d9310b098bbc3cd.js",revision:"rjNtM21Jbze7Jh3NJ6GdA"},{url:"/_next/static/css/2c7005bb4dea4076.css",revision:"2c7005bb4dea4076"},{url:"/_next/static/rjNtM21Jbze7Jh3NJ6GdA/_buildManifest.js",revision:"27547323a0f1fe59a3cfecd5d501163c"},{url:"/_next/static/rjNtM21Jbze7Jh3NJ6GdA/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/alert.mp3",revision:"a53360cb103f1b50ab36f3d0bb501f62"},{url:"/icon-192x192.png",revision:"57cf60f72c1adc93c8bd76524eb801cb"},{url:"/icon-256x256.png",revision:"06efc558370d43f6f449aba56605a933"},{url:"/icon-384x384.png",revision:"12e661b83569511b7cb15f1829beb12b"},{url:"/icon-512x512.png",revision:"b5582c8b9897cc9357c3b2234f6476bc"},{url:"/icons/google.svg",revision:"686f8efa6e3e28e96d1c08399e8d353d"},{url:"/img/LogName.png",revision:"f15d7d02b0ab0a31e9ed33da7bc28528"},{url:"/manifest.json",revision:"b09f0815dc706bbfcd4a6d4a87c3f4d9"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:t})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&t&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:t})=>"1"===e.headers.get("RSC")&&t&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
