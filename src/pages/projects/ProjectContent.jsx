import { useCompany, useProjectResources } from "./data/hooks";
import ProjectHero from "./sections/ProjectHero";
import ProjectCard from "./sections/ProjectCard";
import ProjectOverview from "./sections/ProjectOverview";
import FloorConfiguration from "./sections/FloorConfiguration";
import ProjectGallery from "./sections/ProjectGallery";
import LegalAssurance from "./sections/LegalAssurance";
import ProjectCTA from "./sections/ProjectCTA";

export default function ProjectContent({ project }) {
  const company = useCompany();
  const { residenceTypes, gallery } = useProjectResources(project.id);

  return (
    <div>
      <ProjectHero />
      <ProjectCard project={project} />
      <ProjectOverview project={project} company={company} />
      <FloorConfiguration residenceTypes={residenceTypes} />
      <ProjectGallery images={gallery} />
      <LegalAssurance legal={project.legal_assurance} />
      <ProjectCTA project={project} />
    </div>
  );
}
