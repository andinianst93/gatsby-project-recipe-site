import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"
const Contact = ({ data }) => {
  const getRecipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="Contact Us" />
      <Wrapper className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h1>Want to get in touch?</h1>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo
              bespoke mlkshk intelligentsia edison bulb synth.
            </p>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo
              bespoke mlkshk intelligentsia edison bulb synth. Cardigan prism
              bicycle rights put a bird on it deep v.
            </p>
            <p>
              Hashtag swag health goth air plant, raclette listicle fingerstache
              cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xvoyzleb"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
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

export default Contact
