/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/posts/route";
exports.ids = ["app/api/posts/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.js&appDir=%2FVolumes%2FWebsites%2Fnexify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FWebsites%2Fnexify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.js&appDir=%2FVolumes%2FWebsites%2Fnexify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FWebsites%2Fnexify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Volumes_Websites_nexify_app_api_posts_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/posts/route.js */ \"(rsc)/./app/api/posts/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/posts/route\",\n        pathname: \"/api/posts\",\n        filename: \"route\",\n        bundlePath: \"app/api/posts/route\"\n    },\n    resolvedPagePath: \"/Volumes/Websites/nexify/app/api/posts/route.js\",\n    nextConfigOutput,\n    userland: _Volumes_Websites_nexify_app_api_posts_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwb3N0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcG9zdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwb3N0cyUyRnJvdXRlLmpzJmFwcERpcj0lMkZWb2x1bWVzJTJGV2Vic2l0ZXMlMkZuZXhpZnklMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlZvbHVtZXMlMkZXZWJzaXRlcyUyRm5leGlmeSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDRDtBQUM1RTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vP2ZmY2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Wb2x1bWVzL1dlYnNpdGVzL25leGlmeS9hcHAvYXBpL3Bvc3RzL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wb3N0cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Bvc3RzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9wb3N0cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Wb2x1bWVzL1dlYnNpdGVzL25leGlmeS9hcHAvYXBpL3Bvc3RzL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.js&appDir=%2FVolumes%2FWebsites%2Fnexify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FWebsites%2Fnexify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/posts/route.js":
/*!********************************!*\
  !*** ./app/api/posts/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\nasync function GET(req) {\n    const posts = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findMany({\n        select: {\n            fullname: true,\n            shortBio: true,\n            avatar: true,\n            normalPost: {\n                select: {\n                    id: true,\n                    title: true,\n                    content: true,\n                    likes: true,\n                    createdAt: true,\n                    comments: {\n                        select: {\n                            id: true,\n                            message: true\n                        }\n                    }\n                }\n            },\n            projPost: {\n                select: {\n                    id: true,\n                    title: true,\n                    content: true,\n                    submissionDate: true,\n                    techStack: true,\n                    likes: true,\n                    createdAt: true,\n                    comments: {\n                        select: {\n                            id: true,\n                            message: true\n                        }\n                    }\n                }\n            },\n            jobPost: {\n                select: {\n                    id: true,\n                    company: true,\n                    joiningDate: true,\n                    role: true,\n                    salary: true,\n                    location: true,\n                    title: true,\n                    content: true,\n                    likes: true,\n                    createdAt: true,\n                    comments: {\n                        select: {\n                            id: true,\n                            message: true\n                        }\n                    }\n                }\n            }\n        }\n    });\n    const formattedPosts = posts.map((user)=>{\n        const allPosts = [\n            ...user.normalPost.map((post)=>({\n                    ...post,\n                    type: 1,\n                    author: {\n                        avatar: user.avatar,\n                        name: user.fullname,\n                        title: user.shortBio\n                    },\n                    comments: post.comments.length,\n                    image: \"\"\n                })),\n            ...user.projPost.map((post)=>({\n                    ...post,\n                    type: 2,\n                    author: {\n                        avatar: user.avatar,\n                        name: user.fullname,\n                        title: user.shortBio\n                    },\n                    comments: post.comments.length,\n                    image: \"https://images.unsplash.com/photo-1731432248686-af238c870acc?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\"\n                })),\n            ...user.jobPost.map((post)=>({\n                    ...post,\n                    type: 3,\n                    author: {\n                        avatar: user.avatar,\n                        name: user.fullname,\n                        title: user.shortBio\n                    },\n                    comments: post.comments.length,\n                    image: \"\"\n                }))\n        ];\n        return allPosts;\n    }).flat();\n    // Sort the merged posts by createdAt in descending order (latest posts first)\n    const sortedPosts = formattedPosts.sort((a, b)=>{\n        const dateA = new Date(a.createdAt);\n        const dateB = new Date(b.createdAt);\n        if (dateA && dateB) {\n            return dateB - dateA; // Sort in descending order\n        }\n        return 0; // If no valid date, leave as is\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n        formattedPosts: sortedPosts\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Bvc3RzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrQztBQUNTO0FBRXBDLGVBQWVFLElBQUlDLEdBQUc7SUFDM0IsTUFBTUMsUUFBUSxNQUFNSixtREFBTUEsQ0FBQ0ssSUFBSSxDQUFDQyxRQUFRLENBQUM7UUFDdkNDLFFBQVE7WUFDTkMsVUFBVTtZQUNWQyxVQUFVO1lBQ1ZDLFFBQVE7WUFDUkMsWUFBWTtnQkFDVkosUUFBUTtvQkFDTkssSUFBSTtvQkFDSkMsT0FBTztvQkFDUEMsU0FBUztvQkFDVEMsT0FBTztvQkFDUEMsV0FBVztvQkFDWEMsVUFBVTt3QkFDUlYsUUFBUTs0QkFBRUssSUFBSTs0QkFBTU0sU0FBUzt3QkFBSztvQkFDcEM7Z0JBQ0Y7WUFDRjtZQUNBQyxVQUFVO2dCQUNSWixRQUFRO29CQUNOSyxJQUFJO29CQUNKQyxPQUFPO29CQUNQQyxTQUFTO29CQUNUTSxnQkFBZ0I7b0JBQ2hCQyxXQUFXO29CQUNYTixPQUFPO29CQUNQQyxXQUFXO29CQUNYQyxVQUFVO3dCQUNSVixRQUFROzRCQUFFSyxJQUFJOzRCQUFNTSxTQUFTO3dCQUFLO29CQUNwQztnQkFDRjtZQUNGO1lBQ0FJLFNBQVM7Z0JBQ1BmLFFBQVE7b0JBQ05LLElBQUk7b0JBQ0pXLFNBQVM7b0JBQ1RDLGFBQWE7b0JBQ2JDLE1BQU07b0JBQ05DLFFBQVE7b0JBQ1JDLFVBQVU7b0JBQ1ZkLE9BQU87b0JBQ1BDLFNBQVM7b0JBQ1RDLE9BQU87b0JBQ1BDLFdBQVc7b0JBQ1hDLFVBQVU7d0JBQ1JWLFFBQVE7NEJBQUVLLElBQUk7NEJBQU1NLFNBQVM7d0JBQUs7b0JBQ3BDO2dCQUNGO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsTUFBTVUsaUJBQWlCeEIsTUFBTXlCLEdBQUcsQ0FBQyxDQUFDeEI7UUFDaEMsTUFBTXlCLFdBQVc7ZUFDWnpCLEtBQUtNLFVBQVUsQ0FBQ2tCLEdBQUcsQ0FBQyxDQUFDRSxPQUFVO29CQUNoQyxHQUFHQSxJQUFJO29CQUNQQyxNQUFNO29CQUNOQyxRQUFRO3dCQUNOdkIsUUFBUUwsS0FBS0ssTUFBTTt3QkFDbkJ3QixNQUFNN0IsS0FBS0csUUFBUTt3QkFDbkJLLE9BQU9SLEtBQUtJLFFBQVE7b0JBQ3RCO29CQUNBUSxVQUFVYyxLQUFLZCxRQUFRLENBQUNrQixNQUFNO29CQUM5QkMsT0FBTztnQkFDVDtlQUNHL0IsS0FBS2MsUUFBUSxDQUFDVSxHQUFHLENBQUMsQ0FBQ0UsT0FBVTtvQkFDOUIsR0FBR0EsSUFBSTtvQkFDUEMsTUFBTTtvQkFDTkMsUUFBUTt3QkFDTnZCLFFBQVFMLEtBQUtLLE1BQU07d0JBQ25Cd0IsTUFBTTdCLEtBQUtHLFFBQVE7d0JBQ25CSyxPQUFPUixLQUFLSSxRQUFRO29CQUN0QjtvQkFDQVEsVUFBVWMsS0FBS2QsUUFBUSxDQUFDa0IsTUFBTTtvQkFDOUJDLE9BQU87Z0JBQ1Q7ZUFDRy9CLEtBQUtpQixPQUFPLENBQUNPLEdBQUcsQ0FBQyxDQUFDRSxPQUFVO29CQUM3QixHQUFHQSxJQUFJO29CQUNQQyxNQUFNO29CQUNOQyxRQUFRO3dCQUNOdkIsUUFBUUwsS0FBS0ssTUFBTTt3QkFDbkJ3QixNQUFNN0IsS0FBS0csUUFBUTt3QkFDbkJLLE9BQU9SLEtBQUtJLFFBQVE7b0JBQ3RCO29CQUNBUSxVQUFVYyxLQUFLZCxRQUFRLENBQUNrQixNQUFNO29CQUM5QkMsT0FBTztnQkFDVDtTQUNEO1FBRUQsT0FBT047SUFDVCxHQUFHTyxJQUFJO0lBRVAsOEVBQThFO0lBQzlFLE1BQU1DLGNBQWNWLGVBQWVXLElBQUksQ0FBQyxDQUFDQyxHQUFHQztRQUMxQyxNQUFNQyxRQUFRLElBQUlDLEtBQUtILEVBQUV4QixTQUFTO1FBQ2xDLE1BQU00QixRQUFRLElBQUlELEtBQUtGLEVBQUV6QixTQUFTO1FBRWxDLElBQUkwQixTQUFTRSxPQUFPO1lBQ2xCLE9BQU9BLFFBQVFGLE9BQU8sMkJBQTJCO1FBQ25EO1FBQ0EsT0FBTyxHQUFHLGdDQUFnQztJQUM1QztJQUVBLE9BQU96QyxxREFBWUEsQ0FBQzRDLElBQUksQ0FBQztRQUFFakIsZ0JBQWdCVTtJQUFZO0FBQ3pEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2FwaS9wb3N0cy9yb3V0ZS5qcz84MmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoe1xuICAgIHNlbGVjdDoge1xuICAgICAgZnVsbG5hbWU6IHRydWUsXG4gICAgICBzaG9ydEJpbzogdHJ1ZSxcbiAgICAgIGF2YXRhcjogdHJ1ZSwgLy8gQXNzdW1pbmcgYXZhdGFyIGlzIHBhcnQgb2YgdGhlIFVzZXIgbW9kZWxcbiAgICAgIG5vcm1hbFBvc3Q6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgdGl0bGU6IHRydWUsXG4gICAgICAgICAgY29udGVudDogdHJ1ZSxcbiAgICAgICAgICBsaWtlczogdHJ1ZSxcbiAgICAgICAgICBjcmVhdGVkQXQ6IHRydWUsXG4gICAgICAgICAgY29tbWVudHM6IHtcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbWVzc2FnZTogdHJ1ZSB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb2pQb3N0OiB7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgIHRpdGxlOiB0cnVlLFxuICAgICAgICAgIGNvbnRlbnQ6IHRydWUsXG4gICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHRydWUsXG4gICAgICAgICAgdGVjaFN0YWNrOiB0cnVlLFxuICAgICAgICAgIGxpa2VzOiB0cnVlLFxuICAgICAgICAgIGNyZWF0ZWRBdDogdHJ1ZSxcbiAgICAgICAgICBjb21tZW50czoge1xuICAgICAgICAgICAgc2VsZWN0OiB7IGlkOiB0cnVlLCBtZXNzYWdlOiB0cnVlIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgam9iUG9zdDoge1xuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICBjb21wYW55OiB0cnVlLFxuICAgICAgICAgIGpvaW5pbmdEYXRlOiB0cnVlLFxuICAgICAgICAgIHJvbGU6IHRydWUsXG4gICAgICAgICAgc2FsYXJ5OiB0cnVlLFxuICAgICAgICAgIGxvY2F0aW9uOiB0cnVlLFxuICAgICAgICAgIHRpdGxlOiB0cnVlLFxuICAgICAgICAgIGNvbnRlbnQ6IHRydWUsXG4gICAgICAgICAgbGlrZXM6IHRydWUsXG4gICAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxuICAgICAgICAgIGNvbW1lbnRzOiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIG1lc3NhZ2U6IHRydWUgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGZvcm1hdHRlZFBvc3RzID0gcG9zdHMubWFwKCh1c2VyKSA9PiB7XG4gICAgY29uc3QgYWxsUG9zdHMgPSBbXG4gICAgICAuLi51c2VyLm5vcm1hbFBvc3QubWFwKChwb3N0KSA9PiAoe1xuICAgICAgICAuLi5wb3N0LFxuICAgICAgICB0eXBlOiAxLCAvLyBOb3JtYWwgcG9zdCB0eXBlXG4gICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgIGF2YXRhcjogdXNlci5hdmF0YXIsXG4gICAgICAgICAgbmFtZTogdXNlci5mdWxsbmFtZSxcbiAgICAgICAgICB0aXRsZTogdXNlci5zaG9ydEJpbyxcbiAgICAgICAgfSxcbiAgICAgICAgY29tbWVudHM6IHBvc3QuY29tbWVudHMubGVuZ3RoLFxuICAgICAgICBpbWFnZTogXCJcIiwgLy8gQWRkIGltYWdlIGZpZWxkIGlmIG5lZWRlZFxuICAgICAgfSkpLFxuICAgICAgLi4udXNlci5wcm9qUG9zdC5tYXAoKHBvc3QpID0+ICh7XG4gICAgICAgIC4uLnBvc3QsXG4gICAgICAgIHR5cGU6IDIsIC8vIFByb2plY3QgcG9zdCB0eXBlXG4gICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgIGF2YXRhcjogdXNlci5hdmF0YXIsXG4gICAgICAgICAgbmFtZTogdXNlci5mdWxsbmFtZSxcbiAgICAgICAgICB0aXRsZTogdXNlci5zaG9ydEJpbyxcbiAgICAgICAgfSxcbiAgICAgICAgY29tbWVudHM6IHBvc3QuY29tbWVudHMubGVuZ3RoLFxuICAgICAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTczMTQzMjI0ODY4Ni1hZjIzOGM4NzBhY2M/cT04MCZ3PTQxNDAmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsIC8vIFNhbXBsZSBpbWFnZSBmb3IgcHJvamVjdCBwb3N0XG4gICAgICB9KSksXG4gICAgICAuLi51c2VyLmpvYlBvc3QubWFwKChwb3N0KSA9PiAoe1xuICAgICAgICAuLi5wb3N0LFxuICAgICAgICB0eXBlOiAzLCAvLyBKb2IgcG9zdCB0eXBlXG4gICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgIGF2YXRhcjogdXNlci5hdmF0YXIsXG4gICAgICAgICAgbmFtZTogdXNlci5mdWxsbmFtZSxcbiAgICAgICAgICB0aXRsZTogdXNlci5zaG9ydEJpbyxcbiAgICAgICAgfSxcbiAgICAgICAgY29tbWVudHM6IHBvc3QuY29tbWVudHMubGVuZ3RoLFxuICAgICAgICBpbWFnZTogXCJcIiwgLy8gQWRkIGltYWdlIGZpZWxkIGlmIG5lZWRlZFxuICAgICAgfSkpXG4gICAgXTtcblxuICAgIHJldHVybiBhbGxQb3N0cztcbiAgfSkuZmxhdCgpO1xuXG4gIC8vIFNvcnQgdGhlIG1lcmdlZCBwb3N0cyBieSBjcmVhdGVkQXQgaW4gZGVzY2VuZGluZyBvcmRlciAobGF0ZXN0IHBvc3RzIGZpcnN0KVxuICBjb25zdCBzb3J0ZWRQb3N0cyA9IGZvcm1hdHRlZFBvc3RzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGEuY3JlYXRlZEF0KTtcbiAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGIuY3JlYXRlZEF0KTtcblxuICAgIGlmIChkYXRlQSAmJiBkYXRlQikge1xuICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7IC8vIFNvcnQgaW4gZGVzY2VuZGluZyBvcmRlclxuICAgIH1cbiAgICByZXR1cm4gMDsgLy8gSWYgbm8gdmFsaWQgZGF0ZSwgbGVhdmUgYXMgaXNcbiAgfSk7XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZm9ybWF0dGVkUG9zdHM6IHNvcnRlZFBvc3RzIH0pO1xufSJdLCJuYW1lcyI6WyJwcmlzbWEiLCJOZXh0UmVzcG9uc2UiLCJHRVQiLCJyZXEiLCJwb3N0cyIsInVzZXIiLCJmaW5kTWFueSIsInNlbGVjdCIsImZ1bGxuYW1lIiwic2hvcnRCaW8iLCJhdmF0YXIiLCJub3JtYWxQb3N0IiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJsaWtlcyIsImNyZWF0ZWRBdCIsImNvbW1lbnRzIiwibWVzc2FnZSIsInByb2pQb3N0Iiwic3VibWlzc2lvbkRhdGUiLCJ0ZWNoU3RhY2siLCJqb2JQb3N0IiwiY29tcGFueSIsImpvaW5pbmdEYXRlIiwicm9sZSIsInNhbGFyeSIsImxvY2F0aW9uIiwiZm9ybWF0dGVkUG9zdHMiLCJtYXAiLCJhbGxQb3N0cyIsInBvc3QiLCJ0eXBlIiwiYXV0aG9yIiwibmFtZSIsImxlbmd0aCIsImltYWdlIiwiZmxhdCIsInNvcnRlZFBvc3RzIiwic29ydCIsImEiLCJiIiwiZGF0ZUEiLCJEYXRlIiwiZGF0ZUIiLCJqc29uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/posts/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) {\n    global.prisma = prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxTQUFTQyxPQUFPRCxNQUFNLElBQUksSUFBSUQsd0RBQVlBO0FBRWhELElBQUlHLElBQXFDLEVBQUU7SUFDekNELE9BQU9ELE1BQU0sR0FBR0E7QUFDbEI7QUFFQSxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9wcmlzbWEuanM/NzUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gZ2xvYmFsLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgZ2xvYmFsLnByaXNtYSA9IHByaXNtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJwcm9jZXNzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.js&appDir=%2FVolumes%2FWebsites%2Fnexify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FWebsites%2Fnexify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();