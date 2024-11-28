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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

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

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FVolumes%2FWebsites%2Fnexify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FWebsites%2Fnexify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FVolumes%2FWebsites%2Fnexify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FWebsites%2Fnexify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Volumes_Websites_nexify_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Volumes/Websites/nexify/app/api/auth/[...nextauth]/route.js\",\n    nextConfigOutput,\n    userland: _Volumes_Websites_nexify_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZWb2x1bWVzJTJGV2Vic2l0ZXMlMkZuZXhpZnklMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlZvbHVtZXMlMkZXZWJzaXRlcyUyRm5leGlmeSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDWTtBQUN6RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vPzYwYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Wb2x1bWVzL1dlYnNpdGVzL25leGlmeS9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVm9sdW1lcy9XZWJzaXRlcy9uZXhpZnkvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FVolumes%2FWebsites%2Fnexify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FWebsites%2Fnexify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/auth/[...nextauth]/options.js":
/*!***********************************************!*\
  !*** ./app/api/auth/[...nextauth]/options.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"credentials\",\n            credentials: {},\n            async authorize (credentials) {\n                const { rollno, password } = credentials;\n                // Validate input\n                if (!rollno || !password) {\n                    throw new Error(JSON.stringify({\n                        status: 400,\n                        message: \"Roll number and password are required\"\n                    }));\n                }\n                // Find user by roll number\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n                    where: {\n                        rollno\n                    }\n                }).catch(()=>null);\n                if (!user) {\n                    throw new Error(JSON.stringify({\n                        status: 404,\n                        message: \"User not found\"\n                    }));\n                }\n                // Validate password\n                const isPasswordValid = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(password, user.password);\n                if (!isPasswordValid) {\n                    throw new Error(JSON.stringify({\n                        status: 401,\n                        message: \"Invalid credentials\"\n                    }));\n                }\n                // Return user data\n                return user;\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    jwt: {\n        secret: process.env.NEXTAUTH_SECRET\n    },\n    callbacks: {\n        async jwt ({ user, token }) {\n            if (user) {\n                token.userId = user.id;\n                token.fullname = user.fullname;\n                token.rollno = user.rollno;\n                token.email = user.email;\n                token.mobileNo = user.mobileNo;\n                token.experiences = user.experiences || [];\n                token.skills = user.skills || [];\n                token.projects = user.projects || [];\n                token.followers = user.followers || [];\n                token.following = user.following || [];\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.data = {\n                    id: token.userId,\n                    fullname: token.fullname,\n                    rollno: token.rollno,\n                    email: token.email,\n                    mobileNo: token.mobileNo,\n                    experiences: token.experiences,\n                    skills: token.skills,\n                    projects: token.projects,\n                    followers: token.followers,\n                    following: token.following\n                };\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/Auth/SignIn\",\n        signUp: \"/Auth/SignUp\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9vcHRpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtDO0FBQ2dDO0FBQ3RDO0FBRXJCLE1BQU1HLGNBQWM7SUFDdkJDLFdBQVc7UUFDUEgsMkVBQW1CQSxDQUFDO1lBQ2hCSSxNQUFNO1lBQ05DLGFBQWEsQ0FBQztZQUNkLE1BQU1DLFdBQVVELFdBQVc7Z0JBQ3ZCLE1BQU0sRUFBRUUsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0g7Z0JBRTdCLGlCQUFpQjtnQkFDakIsSUFBSSxDQUFDRSxVQUFVLENBQUNDLFVBQVU7b0JBQ3RCLE1BQU0sSUFBSUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO3dCQUMzQkMsUUFBUTt3QkFDUkMsU0FBUztvQkFDYjtnQkFDSjtnQkFFQSwyQkFBMkI7Z0JBQzNCLE1BQU1DLE9BQU8sTUFBTWYsbURBQU1BLENBQUNlLElBQUksQ0FBQ0MsVUFBVSxDQUFDO29CQUN0Q0MsT0FBTzt3QkFBRVQ7b0JBQU87Z0JBQ3BCLEdBQUdVLEtBQUssQ0FBQyxJQUFNO2dCQUVmLElBQUksQ0FBQ0gsTUFBTTtvQkFDUCxNQUFNLElBQUlMLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt3QkFDM0JDLFFBQVE7d0JBQ1JDLFNBQVM7b0JBQ2I7Z0JBQ0o7Z0JBRUEsb0JBQW9CO2dCQUNwQixNQUFNSyxrQkFBa0IsTUFBTWpCLHFEQUFjLENBQUNPLFVBQVVNLEtBQUtOLFFBQVE7Z0JBQ3BFLElBQUksQ0FBQ1UsaUJBQWlCO29CQUNsQixNQUFNLElBQUlULE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt3QkFDM0JDLFFBQVE7d0JBQ1JDLFNBQVM7b0JBQ2I7Z0JBQ0o7Z0JBRUEsbUJBQW1CO2dCQUNuQixPQUFPQztZQUNYO1FBQ0o7S0FDSDtJQUNETSxTQUFTO1FBQ0xDLFVBQVU7SUFDZDtJQUNBQyxLQUFLO1FBQ0RDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUN2QztJQUNBQyxXQUFXO1FBQ1AsTUFBTUwsS0FBSSxFQUFFUixJQUFJLEVBQUVjLEtBQUssRUFBRTtZQUNyQixJQUFJZCxNQUFNO2dCQUNOYyxNQUFNQyxNQUFNLEdBQUdmLEtBQUtnQixFQUFFO2dCQUN0QkYsTUFBTUcsUUFBUSxHQUFHakIsS0FBS2lCLFFBQVE7Z0JBQzlCSCxNQUFNckIsTUFBTSxHQUFHTyxLQUFLUCxNQUFNO2dCQUMxQnFCLE1BQU1JLEtBQUssR0FBR2xCLEtBQUtrQixLQUFLO2dCQUN4QkosTUFBTUssUUFBUSxHQUFHbkIsS0FBS21CLFFBQVE7Z0JBQzlCTCxNQUFNTSxXQUFXLEdBQUdwQixLQUFLb0IsV0FBVyxJQUFJLEVBQUU7Z0JBQzFDTixNQUFNTyxNQUFNLEdBQUdyQixLQUFLcUIsTUFBTSxJQUFJLEVBQUU7Z0JBQ2hDUCxNQUFNUSxRQUFRLEdBQUd0QixLQUFLc0IsUUFBUSxJQUFJLEVBQUU7Z0JBQ3BDUixNQUFNUyxTQUFTLEdBQUd2QixLQUFLdUIsU0FBUyxJQUFJLEVBQUU7Z0JBQ3RDVCxNQUFNVSxTQUFTLEdBQUd4QixLQUFLd0IsU0FBUyxJQUFJLEVBQUU7WUFDMUM7WUFDQSxPQUFPVjtRQUNYO1FBQ0EsTUFBTVIsU0FBUSxFQUFFQSxPQUFPLEVBQUVRLEtBQUssRUFBRTtZQUM1QixJQUFJQSxPQUFPO2dCQUNQUixRQUFRbUIsSUFBSSxHQUFHO29CQUNYVCxJQUFJRixNQUFNQyxNQUFNO29CQUNoQkUsVUFBVUgsTUFBTUcsUUFBUTtvQkFDeEJ4QixRQUFRcUIsTUFBTXJCLE1BQU07b0JBQ3BCeUIsT0FBT0osTUFBTUksS0FBSztvQkFDbEJDLFVBQVVMLE1BQU1LLFFBQVE7b0JBQ3hCQyxhQUFhTixNQUFNTSxXQUFXO29CQUM5QkMsUUFBUVAsTUFBTU8sTUFBTTtvQkFDcEJDLFVBQVVSLE1BQU1RLFFBQVE7b0JBQ3hCQyxXQUFXVCxNQUFNUyxTQUFTO29CQUMxQkMsV0FBV1YsTUFBTVUsU0FBUztnQkFDOUI7WUFDSjtZQUNBLE9BQU9sQjtRQUNYO0lBQ0o7SUFDQW9CLE9BQU87UUFDSEMsUUFBUTtRQUNSQyxRQUFRO0lBQ1o7SUFDQW5CLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUN2QyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vb3B0aW9ucy5qcz83YTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJjcmVkZW50aWFsc1wiLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IHt9LFxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyByb2xsbm8sIHBhc3N3b3JkIH0gPSBjcmVkZW50aWFscztcblxuICAgICAgICAgICAgICAgIC8vIFZhbGlkYXRlIGlucHV0XG4gICAgICAgICAgICAgICAgaWYgKCFyb2xsbm8gfHwgIXBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUm9sbCBudW1iZXIgYW5kIHBhc3N3b3JkIGFyZSByZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRmluZCB1c2VyIGJ5IHJvbGwgbnVtYmVyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyByb2xsbm8gfSxcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiBudWxsKTtcblxuICAgICAgICAgICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA0MDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlVzZXIgbm90IGZvdW5kXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBWYWxpZGF0ZSBwYXNzd29yZFxuICAgICAgICAgICAgICAgIGNvbnN0IGlzUGFzc3dvcmRWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUGFzc3dvcmRWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA0MDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkludmFsaWQgY3JlZGVudGlhbHNcIixcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJldHVybiB1c2VyIGRhdGFcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBzZXNzaW9uOiB7XG4gICAgICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICAgIH0sXG4gICAgand0OiB7XG4gICAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxuICAgIH0sXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGFzeW5jIGp3dCh7IHVzZXIsIHRva2VuIH0pIHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgdG9rZW4udXNlcklkID0gdXNlci5pZDtcbiAgICAgICAgICAgICAgICB0b2tlbi5mdWxsbmFtZSA9IHVzZXIuZnVsbG5hbWU7XG4gICAgICAgICAgICAgICAgdG9rZW4ucm9sbG5vID0gdXNlci5yb2xsbm87XG4gICAgICAgICAgICAgICAgdG9rZW4uZW1haWwgPSB1c2VyLmVtYWlsO1xuICAgICAgICAgICAgICAgIHRva2VuLm1vYmlsZU5vID0gdXNlci5tb2JpbGVObztcbiAgICAgICAgICAgICAgICB0b2tlbi5leHBlcmllbmNlcyA9IHVzZXIuZXhwZXJpZW5jZXMgfHwgW107XG4gICAgICAgICAgICAgICAgdG9rZW4uc2tpbGxzID0gdXNlci5za2lsbHMgfHwgW107XG4gICAgICAgICAgICAgICAgdG9rZW4ucHJvamVjdHMgPSB1c2VyLnByb2plY3RzIHx8IFtdO1xuICAgICAgICAgICAgICAgIHRva2VuLmZvbGxvd2VycyA9IHVzZXIuZm9sbG93ZXJzIHx8IFtdO1xuICAgICAgICAgICAgICAgIHRva2VuLmZvbGxvd2luZyA9IHVzZXIuZm9sbG93aW5nIHx8IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgc2Vzc2lvbi5kYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogdG9rZW4udXNlcklkLFxuICAgICAgICAgICAgICAgICAgICBmdWxsbmFtZTogdG9rZW4uZnVsbG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHJvbGxubzogdG9rZW4ucm9sbG5vLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdG9rZW4uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZU5vOiB0b2tlbi5tb2JpbGVObyxcbiAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZXM6IHRva2VuLmV4cGVyaWVuY2VzLFxuICAgICAgICAgICAgICAgICAgICBza2lsbHM6IHRva2VuLnNraWxscyxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHM6IHRva2VuLnByb2plY3RzLFxuICAgICAgICAgICAgICAgICAgICBmb2xsb3dlcnM6IHRva2VuLmZvbGxvd2VycyxcbiAgICAgICAgICAgICAgICAgICAgZm9sbG93aW5nOiB0b2tlbi5mb2xsb3dpbmcsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgcGFnZXM6IHtcbiAgICAgICAgc2lnbkluOiBcIi9BdXRoL1NpZ25JblwiLFxuICAgICAgICBzaWduVXA6IFwiL0F1dGgvU2lnblVwXCIsXG4gICAgfSxcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbn07Il0sIm5hbWVzIjpbInByaXNtYSIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImF1dGhvcml6ZSIsInJvbGxubyIsInBhc3N3b3JkIiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwibWVzc2FnZSIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJjYXRjaCIsImlzUGFzc3dvcmRWYWxpZCIsImNvbXBhcmUiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJqd3QiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiY2FsbGJhY2tzIiwidG9rZW4iLCJ1c2VySWQiLCJpZCIsImZ1bGxuYW1lIiwiZW1haWwiLCJtb2JpbGVObyIsImV4cGVyaWVuY2VzIiwic2tpbGxzIiwicHJvamVjdHMiLCJmb2xsb3dlcnMiLCJmb2xsb3dpbmciLCJkYXRhIiwicGFnZXMiLCJzaWduSW4iLCJzaWduVXAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/options.js\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ \"(rsc)/./app/api/auth/[...nextauth]/options.js\");\n\n\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_options__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNDO0FBQ0U7QUFHeEMsTUFBTUUsVUFBVUYsMERBQVFBLENBQUNDLGlEQUFXQTtBQUVNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/ZGExYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aC9uZXh0XCI7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCIuL29wdGlvbnNcIjtcblxuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH0iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FVolumes%2FWebsites%2Fnexify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FWebsites%2Fnexify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();