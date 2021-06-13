import { trim, get, startsWith } from "lodash"

export default function getData(siteData, dataPath) {
  dataPath = trim(dataPath, "/")
  if (startsWith(dataPath, "src/data/")) {
    dataPath = dataPath.replace("src/data/", "")
  }
  // remove extension
  dataPath = dataPath.replace(/\.\w+$/, "")
  const path = dataPath.split("/")
  return get(siteData, path)
}
