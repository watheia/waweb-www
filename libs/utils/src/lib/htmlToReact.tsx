import React from "react"
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser"
import ScriptTag from "react-script-tag"
import Link from "./link"
import { isEmpty, omit, map } from "lodash"

function noop() {
  return undefined
}

const convertChildren = (children: any, index: any): any[] =>
  map(children, (childNode): any => convertNodeToElement(childNode, index, noop()))

export default function htmlToReact(html) {
  if (!html) {
    return null
  }
  return ReactHtmlParser(html, {
    transform: (node, index) => {
      if (node.type === "script") {
        if (!isEmpty(node.children)) {
          return (
            <ScriptTag key={index} {...node.attribs}>
              {convertChildren(node.children, index)}
            </ScriptTag>
          )
        } else {
          return <ScriptTag key={index} {...node.attribs} />
        }
      } else if (node.type === "tag" && node.name === "a") {
        const href = node.attribs.href
        const props = omit(node.attribs, "href")
        // use Link only if there are no custom attributes like style, class, and what's not that might break react
        if (isEmpty(props)) {
          return (
            <Link key={index} to={href} {...props}>
              {convertChildren(node.children, index)}
            </Link>
          )
        }
      }
    },
  })
}
