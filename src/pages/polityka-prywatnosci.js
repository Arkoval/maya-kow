import React from "react";
import SEO from "../components/seo";
import SubpageTemplate from "../layout/SubpageTemplate";
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy'


const PrivacyPolicyPage = () => (
  <SubpageTemplate>
    <SEO title="Home" />
    <PrivacyPolicy/>
  </SubpageTemplate>
)

export default PrivacyPolicyPage;
