import marked from "marked"
import htmlToReact from "./htmlToReact"

export default function markdownify(markdown: any): any {
  if (!markdown) {
    return null
  }
  return htmlToReact(marked(markdown))
}
