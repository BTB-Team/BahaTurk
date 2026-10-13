/**
 * The ONLY place in the project page that knows where data comes from.
 * Today: db.json (imported the same way Residences.jsx does).
 * Later (admin panel/backend): replace the bodies below with fetch() calls;
 * the hooks and sections stay exactly as they are.
 *
 * Functions are async on purpose so swapping to fetch() changes nothing for callers.
 */
import db from "../../../../db.json";
import { assetUrl } from "./assetUrl";

// Clone so a component can never mutate the shared db.json module.
const clone = (value) => structuredClone(value);

export async function getFeaturedProject() {
  const project = (db.projects ?? []).find((item) => item.is_featured);
  if (!project) return null;
  return { ...clone(project), cover_image: assetUrl(project.cover_image) };
}

export async function getCompany() {
  return db.company ? clone(db.company) : null;
}

export async function getResidenceTypes(projectId) {
  return clone((db.residence_types ?? []).filter((item) => item.project_id === projectId));
}

export async function getGallery(projectId) {
  return clone((db.project_gallery ?? []).filter((item) => item.project_id === projectId)).map(
    (image) => ({ ...image, image_url: assetUrl(image.image_url) })
  );
}