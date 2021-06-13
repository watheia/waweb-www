import { compact } from "lodash"

export default function pathJoin(...pathParts: any[]): string {
  const result = compact(pathParts)
    .join("/")
    .replace(/\/{2,}/g, "/")
  return result || "."
}
