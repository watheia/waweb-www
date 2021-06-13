import { isEmpty, camelCase } from "lodash"

export default function toStyleObj(styleAttr: string): Record<string, any> {
  return styleAttr.split(";").reduce((accumulator, pair): Record<string, any> => {
    pair = pair.trim()
    if (isEmpty(pair)) {
      return accumulator
    }
    const index = pair.indexOf(":")
    if (index === -1) {
      throw new Error("Could not split style attribute into names and values")
    }
    const name = camelCase(pair.substring(0, index).trim())
    accumulator[name] = pair.substring(index + 1).trim()
    return accumulator
  }, {})
}
