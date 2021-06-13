import { withPrefix as gatsbyWithPrefix } from "gatsby"
import { startsWith } from "lodash"

export default function withPrefix(url: string) {
  if (!url) {
    return url
  }

  if (startsWith(url, "#") || startsWith(url, "http://") || startsWith(url, "https://")) {
    return url
  }
  return gatsbyWithPrefix(url)
}
