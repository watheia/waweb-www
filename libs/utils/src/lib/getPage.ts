import { get, find, trim } from "lodash"

/**
 * Get the page at the provided `urlPath`.
 *
 * @param {Array} pages Array of page objects. All pages must have 'url' field.
 * @param {string} urlPath The url path to find the page by
 * @return {Object}
 */
export default function getPage(pages, urlPath) {
  urlPath = trim(urlPath, "/")
  urlPath = urlPath.replace(/^src\/pages\//, "")

  return find(pages, (page) => {
    const pageUrlPath = trim(get(page, "url"), "/")
    return urlPath === pageUrlPath
  })
}
