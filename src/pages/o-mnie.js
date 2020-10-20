import React from "react"
import AboutSubPageOne from "../components/About/AboutSubPageOne"
import AboutSubPageTwo from "../components/About/AboutSubPageTwo"
import SEO from "../components/seo"
import SubpageTemplate from "../layout/SubpageTemplate"

const AboutMePage = () => (
  <SubpageTemplate>
    <SEO title="Home" />
    <AboutSubPageOne/>
    <AboutSubPageTwo/>
  </SubpageTemplate>
)

export default AboutMePage;
