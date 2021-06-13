import React from "react"
import { graphql, PageProps } from "gatsby"
import { upperFirst, get, map, camelCase } from "lodash"

import sections from "../content/sections"
import { Layout } from "../components"
import WithLayout from "WithLayout"
import Main from "layouts/Main"

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query ($url: String) {
    sitePage(path: { eq: $url }) {
      id
    }
  }
`

export type AdvancedProps = {
  pageContext: any
} & PageProps

export default class Advanced extends React.Component<AdvancedProps> {
  render() {
    const children = map(
      get(this.props, "pageContext.frontmatter.sections", null),
      (section, section_idx) => {
        const component = upperFirst(camelCase(get(section, "type", null)))
        const Component = sections[component]
        return (
          <Component
            key={section_idx}
            {...this.props}
            section={section}
            site={this.props.pageContext.site}
          />
        )
      }
    )

    return (
      <WithLayout layout={Main} component={() => <div>{children}</div>} {...this.props} />
    )
  }
}
