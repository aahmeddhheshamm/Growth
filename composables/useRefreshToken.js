import {tags} from "~/constants/index.js";

export default async function useRefreshToken() {
  const {$intercept} = useNuxtApp();
  const apiRefreshToken = $intercept('v2/auth/refresh',{
    method: "POST",
  })

 const {data} = await useSSRFetch({
    fn: () => apiRefreshToken(),
    key: tags.refreshToken,
    options: {
    server:false,
      immediate:true
    },
  });



}
