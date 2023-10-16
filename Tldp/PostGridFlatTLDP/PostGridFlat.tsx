import { CSSObject, keyframes } from '@emotion/react'
import { Link } from 'gatsby'
import './PostGridFlat.scss'
import { BgImage } from 'gbimage-bridge'
import { getImage } from 'gatsby-plugin-image'

const gridCSS: CSSObject = {
  margin: 'auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: '90rem',
  // height: 30em;
  width: '100%',

  padding: 0,
}
const pulse = keyframes`
0%{
  box-shadow: 0px 0px 5px 0px rgba(87, 186, 106, .3);
}
65%{
  box-shadow: 0px 0px 5px 8px rgba(87, 186, 106, .3);
}
90%{
  box-shadow: 0px 0px 5px 8px rgba(87, 186, 106, 0);
}
`

interface OwnProps {
  posts: any
}
export default function PostGridFlat({ posts }: OwnProps) {
  return (
    <div css={gridCSS}>
      {posts
        .filter((post) => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          const image = post.frontmatter.image.childImageSharp
          const gatsbyImage = getImage(image)
          const postDate = new Date(post.frontmatter.date)

          const tomorrow = new Date()
          // Make keep current day as an upcoming day
          postDate.setDate(postDate.getDate() + 1)
          const isUpcoming = tomorrow < postDate

          const options = {
            weekday: isUpcoming ? 'short' : void 0,
            year: isUpcoming ? void 0 : 'numeric',
            month: 'short',
            day: isUpcoming ? 'numeric' : void 0,
          }
          // @ts-ignore
          const displayDate = new Date(
            post.frontmatter.date
          ).toLocaleDateString(post.frontmatter.language, options)

          return (
            <Link
              className={'post'}
              to={`${post.frontmatter.path}#content`}
              key={post.id}
            >
              <div className={'postHead'}>
                <span className="postTitle">{post.frontmatter.title}</span>
                <span
                  className="postSubtitle"
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>{post.frontmatter.subtitle} </div>

                  <div
                    css={{
                      display: 'flex',
                      alignItems: 'center',
                      color: isUpcoming ? 'rgb(87, 186, 106)' : '',
                      fontWeight: isUpcoming ? 600 : 400,
                    }}
                  >
                    {isUpcoming && (
                      <div
                        css={{
                          width: '10px',
                          height: '10px',
                          fontSize: '0',
                          backgroundColor: 'rgb(87, 186, 106)',
                          border: '0',
                          borderRadius: '100px',
                          // margin: '18px',
                          marginRight: '10px',
                          outline: 'none',
                          animationName: `${pulse}`,
                          animationDuration: '1.5s',
                          animationIterationCount: 'infinite',
                          animationTimingFunction: 'linear',
                        }}
                      ></div>
                    )}
                    {displayDate}{' '}
                  </div>
                </span>
              </div>
              <BgImage image={gatsbyImage} className={'postPicture'} />
            </Link>
          )
        })}
    </div>
  )
}
