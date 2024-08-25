
export default function useFetch({queryFn, queryKey, enabled}) {
  return useQuery({
    queryKey: queryKey,
    queryFn,
    refetchOnWindowFocus: false,
    enabled: enabled ?? true,
  });
}
