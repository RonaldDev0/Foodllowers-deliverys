if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-b0a6e652"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/NyRa0H0DdSR4UCrcbW0N9/_buildManifest.js",revision:"cba88b726ead01bdd3acdd1e53bb1051"},{url:"/_next/static/NyRa0H0DdSR4UCrcbW0N9/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/105-d976672f6219b582.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/136-4233ab7b0b5b63c9.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/140.80bfc814164c86c7.js",revision:"80bfc814164c86c7"},{url:"/_next/static/chunks/20-7dc38452f56853f9.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/277-185cceaced489d7f.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/301-3ae5c037416b047d.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/309-9b0217590c1a9588.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/327-78cea17e67ecec07.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/383-aebaa66e9eb26bea.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/413-b64ed85868145baa.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/546-edaa1d8116afb5fa.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/570-0eaad19df17aeb26.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/682-8439f16b1da2d5b9.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/715-a863dc0b7b76ff35.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/717-80b78209cb519819.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/80-d3dca71a28fd1a58.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/907-04c91a90ae160dba.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/93-ade1f1c9f0f278f2.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/app/_not-found-7248c51787f51531.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/app/dashboard/page-0cdccf9dc36d8fac.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/app/layout-4e264968c14f852d.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/app/login/page-519686f953e680e3.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/app/page-633f483b8a9aa434.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/app/profile/page-dcfc7cf22af830a9.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/app/register/page-7265728cc104f9c6.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/app/settings/bank-account/page-190fdb73762c3ce9.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/app/settings/layout-c5fa135089444b94.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/app/settings/page-a249e9461eec5139.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/app/validation/page-d2007cd8763ad01c.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/db7c4082-0b4eb84a4cf0e9a1.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/framework-510ec8ffd65e1d01.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/main-523454fd90d192ff.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/main-app-c61cfc72230ac5d8.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/pages/_app-8af6cebd9d341231.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/pages/_error-a90cb9d271c89e6e.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-0b0883de41df4c8f.js",revision:"NyRa0H0DdSR4UCrcbW0N9"},{url:"/_next/static/css/1ae0b7b2941d24dd.css",revision:"1ae0b7b2941d24dd"},{url:"/icon-192x192.png",revision:"12fd3cc70f6145b29d17cb4d91188ed2"},{url:"/icon-256x256.png",revision:"15589f5acaf4d18ed0f432b909ff12e1"},{url:"/icon-384x384.png",revision:"537d2e4475766608ee553d02aac95129"},{url:"/icon-512x512.png",revision:"6742319cd1bab509ac83498fd08fe365"},{url:"/icons/google.svg",revision:"686f8efa6e3e28e96d1c08399e8d353d"},{url:"/manifest.json",revision:"c2955241b5be1cda10aeaac0b3199cff"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
