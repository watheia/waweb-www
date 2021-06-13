/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import Documentation from "views/Documentation"
import DocsLayout from "layouts/DocsLayout"
import WithLayout from "WithLayout"

const DocumentationPage = (): JSX.Element => {
  return <WithLayout component={Documentation} layout={DocsLayout} />
}

export default DocumentationPage
