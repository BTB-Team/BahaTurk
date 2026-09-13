import { useEffect, useState } from "react";
import { getData } from "../api/client";

/**
 * Lightweight one-off fetch hook for endpoints that don't need
 * global/shared state. For data shared across many components
 * (company info, projects, residences), prefer a zustand store instead.
 */
export function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getData(endpoint)
      .then((result) => {
        if (!cancelled) setData(result);
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [endpoint]);

  return { data, loading, error };
}
