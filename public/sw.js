if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-b0a6e652"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/WH8xyCn6p-2jXSRHNR0E3/_buildManifest.js",revision:"ef5620e296a179c61b1bf6845604a71e"},{url:"/_next/static/WH8xyCn6p-2jXSRHNR0E3/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/140.80bfc814164c86c7.js",revision:"80bfc814164c86c7"},{url:"/_next/static/chunks/376-8a9586e7e5b28e09.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/382-4d3b8e36f81f73de.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/3a9a90d7-8886f84893c3ddf8.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/423-c1e0a3e80d7c274b.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/499-8be9ba853baef8ed.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/586-94df6ee4a1622969.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/708-64eb940813f77624.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/725-8c53fc2905fc1f90.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/961-d5943eeacfee6e28.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/app/_not-found-6e52e07ef7a2a43b.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/app/dashboard/page-2a00eeaf861289f9.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/app/layout-ac47314bfcf267ff.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/app/login/page-6c2d501412627839.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/app/page-c253fea48d4af5f7.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/app/profile/page-51092d2f0a6c8b6d.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/framework-510ec8ffd65e1d01.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/main-app-cddec9bab3dfedf1.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/main-bdbb68dacbc15c9a.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/pages/_app-06bc8a7c7a7ad710.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/pages/_error-426fb73ad2111367.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d914ead227b6379b.js",revision:"WH8xyCn6p-2jXSRHNR0E3"},{url:"/_next/static/css/5c243440127cc6e5.css",revision:"5c243440127cc6e5"},{url:"/icon-192x192.png",revision:"12fd3cc70f6145b29d17cb4d91188ed2"},{url:"/icon-256x256.png",revision:"15589f5acaf4d18ed0f432b909ff12e1"},{url:"/icon-384x384.png",revision:"537d2e4475766608ee553d02aac95129"},{url:"/icon-512x512.png",revision:"6742319cd1bab509ac83498fd08fe365"},{url:"/icons/google.svg",revision:"686f8efa6e3e28e96d1c08399e8d353d"},{url:"/manifest.json",revision:"c2955241b5be1cda10aeaac0b3199cff"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
