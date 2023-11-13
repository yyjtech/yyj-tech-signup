import { graphql, useStaticQuery } from "gatsby"

export const useContent = type => {
  const { yaml } = useStaticQuery(
    graphql`
      query SiteQuery {
        yaml: contentsYaml {
          homepage {
            title
            intro
            history
            historyLink

            signupForm {
              title
              redirectUrl
              cocDescription
              cocValues
              terms
              buttonLabel
              media {
                publicURL
                childImageSharp {
                  gatsbyImageData(width: 80, quality: 90, placeholder: BLURRED)
                }
              }
            }

            backgrounds {
              author
              sourceUrl
              media {
                publicURL
                childImageSharp {
                  gatsbyImageData(quality: 80, placeholder: DOMINANT_COLOR)
                }
              }
            }

            channelStewards {
              name
              bio
              dmURL
              username
              imageURL
              joinYear
              channels
            }
            
          }

          
        }

        
      }
    `
  )

  return yaml
}

export default useContent
