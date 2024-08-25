// import {defaultConfig} from "~/config";
//
// import AppHelper from "~/helpers/appHelper";
//
// let refreshTokenCalled = false;
// import useRefreshToken from "~/composables/useRefreshToken.js"
// export default defineNuxtPlugin((nuxtApp) => {
//   const runtimeConfig = useRuntimeConfig();
//
//
//   // const {locale: getLang} = useI18n()
//
//   const baseUrl = runtimeConfig.public.baseUrl;
//
//   async function interceptRequest(options){
//     // get token
//     const token = useCookie("token").value;
//     // get lang
//     // const lang = getLang.value || defaultConfig.lang;
//
//     const lang = useNuxtApp().$i18n.locale.value
//
//
//     options.headers = {
//       Authorization: `Bearer ${token}`,
//       "Accept-Language": lang,
//       "Content-Language": lang,
//       "locale": lang,
//       "Accept": "application/json",
//       "Content-Type": "application/json",
//       "access-key": "*Upd(?(rGk#ZMb2vb.Nd\"+*?VgF^<Vn-3:}!kUz`!GcYjJhh~!F]{8c&JZ*[",
//       ...options.headers,
//     };
//     // delete content type if the body is an object (eg. FormData)
//     if (typeof options.body === "object") {
//       if (options.headers?.["Content-Type"]) {
//         delete options.headers["Content-Type"];
//       }
//     }
//
//     return options;
//   }
//
//   // intercept response
//   async function interceptResponse(
//     response,
//     method
//   ){
//     const responseJson = await response.json();
//
//     const message = responseJson?.message;
//
//     const errors = responseJson?.errors;
//     const regex = /\/auth\/refresh/i;
//
//     if (refreshTokenCalled && regex.test(response.url) && response.status === 200 &&!AppHelper.isServer()){
//       updateToken(responseJson?.data?.access_token);
//       setTimeout(()=>{location.reload()})
//     }
//     // handle response error
//     if (!response.ok) {
//       if (response.status === 401 && isAuthenticated()){
//         if (!regex.test(response.url) && !refreshTokenCalled){
//           refreshTokenCalled = true
//           useRefreshToken()
//         }else if(regex.test(response.url) && !AppHelper.isServer()){
//           removeUserData();
//           setTimeout(()=>{location.reload()})
//         }
//       }
//
//       // show error message
//       if (!AppHelper.isServer() && response.status !== 401) {
//         if (errors && Array.isArray(errors) && errors.length) {
//           errors.forEach((err) => {
//             // @ts-ignore
//             nuxtApp.$toast.error(err);
//           });
//         } else if (message) {
//           // @ts-ignore
//           nuxtApp.$toast.error(message || nuxtApp.$i18n.t('errorHappened'));
//         }
//       }
//
//       return Promise.reject(responseJson);
//     }
//
//     // handle response success
//     if (method && method.toLowerCase() !== "get") {
//       // @ts-ignore
//       nuxtApp.$toast.success(message || nuxtApp.$i18n.t('successCall'));
//     }
//
//     return responseJson;
//   }
//
//   // intercept function
//   async function intercept(url, options = {}) {
//     // handle request
//     const requestOptions = await interceptRequest(options);
//
//
//     const response = await fetch(baseUrl + "" + url, requestOptions);
//
//     // handle response
//     const responsOption = await interceptResponse(response, options.method);
//
//     return responsOption;
//   }
//
//   return {
//     provide: {intercept},
//   };
// });
