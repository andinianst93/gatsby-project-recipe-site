import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const RecipesList = ({ recipes = [] }) => {
  return (
    <Wrapper className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, media, prepTime, cookTime } = recipe
        const pathToImage = getImage(media)
        const slug = slugify(title, { lower: true })
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h2>{title}</h2>
            <p>
              Prep: {prepTime} min | Cook: {cookTime} min
            </p>
          </Link>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h2 {
    font-size: 1.25rem;
    margin-bottom: 0;
    margin-top: 0.25rem;
    line-height: 1;
    color: var(--textColor);
    font-weight: 600;
  }
`

export default RecipesList
