import { useFeaturedProject } from "./data/hooks";
import DataState from "../../components/ui/project-ui/DataState";
import ProjectContent from "./ProjectContent";

export default function Projects() {
  const { project, loading, error } = useFeaturedProject();

  return (
    <DataState loading={loading} error={error} isEmpty={!project}>
      {project && <ProjectContent project={project} />}
    </DataState>
  );
}
