/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import ContactPage from "views/ContactPage"
import Main from "layouts/Main"
import WithLayout from "WithLayout"

const ContactViewPage = (): JSX.Element => {
  return <WithLayout component={ContactPage} layout={Main} />
}

export default ContactViewPage
