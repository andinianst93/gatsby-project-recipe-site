import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"
const About = ({ data }) => {
  const getRecipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="About Us" description="We are Simply Recipes!" />
      <Wrapper className="page">
        <section className="about-page">
          <article>
            <h1>I'm baby coloring book poke taxidermy</h1>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <p>This is from Udemy. Using Gatsby.</p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="person pouring salt in bowl"
            className="about-img"
            placeholder="tracedSVG"
          ></StaticImage>
        </section>
        <section className="featured-recipes">
          <h2 className="title-awesomesouce">Look at This Awesomesouce!</h2>
          <RecipesList recipes={getRecipes} />
        </section>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        media {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

const Wrapper = styled.main`
  h1 {
    font-size: 2.3rem;
  }
  .title-awesomesouce {
    font-size: 1.25rem;
    text-align: center;
  }
`

export default About
