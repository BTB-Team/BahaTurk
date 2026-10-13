import { useAsync } from "./useAsync";
import {
  getCompany,
  getFeaturedProject,
  getGallery,
  getResidenceTypes,
} from "./projectApi";

/** The page shows the project flagged is_featured; no id in the URL. */
export function useFeaturedProject() {
  const { data, loading, error } = useAsync(getFeaturedProject, []);
  return { project: data, loading, error };
}

/** Company info (name...). Non-critical: callers must handle null. */
export function useCompany() {
  return useAsync(getCompany, []).data;
}

/**
 * Residence types and gallery for one project. Non-critical: if either fails
 * the matching section renders nothing instead of breaking the page.
 */
export function useProjectResources(projectId) {
  const residences = useAsync(() => getResidenceTypes(projectId), [projectId]);
  const gallery = useAsync(() => getGallery(projectId), [projectId]);

  return {
    residenceTypes: residences.data ?? [],
    gallery: gallery.data ?? [],
    loading: residences.loading || gallery.loading,
  };
}