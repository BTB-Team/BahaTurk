import { useAsync } from "./useAsync";
import {
  getCompany,
  getFeaturedProject,
  getGallery,
  getResidenceTypes,
} from "./projectApi";

export function useFeaturedProject() {
  const { data, loading, error } = useAsync(getFeaturedProject, []);
  return { project: data, loading, error };
}
export function useCompany() {
  return useAsync(getCompany, []).data;
}


export function useProjectResources(projectId) {
  const residences = useAsync(() => getResidenceTypes(projectId), [projectId]);
  const gallery = useAsync(() => getGallery(projectId), [projectId]);

  return {
    residenceTypes: residences.data ?? [],
    gallery: gallery.data ?? [],
    loading: residences.loading || gallery.loading,
  };
}
