/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import PasswordResetCover from "views/PasswordResetCover"
import Minimal from "layouts/Minimal"
import WithLayout from "WithLayout"

const PasswordResetCoverPage = (): JSX.Element => {
  return <WithLayout component={PasswordResetCover} layout={Minimal} />
}

export default PasswordResetCoverPage
