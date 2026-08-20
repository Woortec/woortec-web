import { buildAgenciaSocialImage, contentType, size } from "./social-image";

export const runtime = "edge";
export { size, contentType };

export default function OpenGraphImage() {
  return buildAgenciaSocialImage();
}
