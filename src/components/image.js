import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
  query Images {
    image: file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid(quality:100){
          ...GatsbyImageSharpFluid
  
        }
      }
    }
  }
`
)

 return <Img fluid={data.image.childImageSharp.fluid} alt={'Magdalena Kowalska photo'} />

}
export default Image;