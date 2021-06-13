import { trim, split, filter, isEqual } from "lodash"

/**
 * Get all the pages located under the provided `urlPath`, not including the
 * index page. I.e.: All pages having their URLs start with `urlPath` excluding
 * the page having its URL equal to `urlPath`.
 *
 * @example
 * pages => [
 *   {url: '/'},
 *   {url: '/about'},
 *   {url: '/posts'},
 *   {url: '/posts/hello'},
 *   {url: '/posts/world'}
 * ]
 *
 * getPages(pages, /posts')
 * => [
 *   {url: '/posts/hello'},
 *   {url: '/posts/world'}
 * ]
 *
 *
 * @param {Array} pages Array of page objects. All pages must have 'url' field.
 * @param {string} urlPath The url path to filter pages by
 * @return {Array}
 */
export default function getPages(pages: any, urlPath: any) {
  urlPath = trim(urlPath, "/")
  const urlPathParts = split(urlPath, "/")
  return filter(pages, (page) => {
    const pageUrlPath = trim(page.url, "/")
    const pageUrlParts = split(pageUrlPath, "/")
    return (
      pageUrlParts.length > urlPathParts.length &&
      isEqual(pageUrlParts.slice(0, urlPathParts.length), urlPathParts)
    )
  })
}
