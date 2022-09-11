import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        title
        description
        author
        simpleData
        complexData {
          name
          age
        }
        person {
          age
          name
        }
      }
    }
  }
`
const FetchData = () => {
  const {
    site: {
      info: { title, description },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h2>site title is: {title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default FetchData
