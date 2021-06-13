import React from "react"
import { get } from "lodash"
import moment from "moment-strftime"

import { Link, withPrefix } from "@waweb/utils"
import BlogPostCategories from "./BlogPostCategories"

export default class BlogPostFeedItem extends React.Component {
  render() {
    let blog_feed_section = get(this.props, "blog_feed_section", null)
    let post = get(this.props, "post_page", null)
    return (
      <article className="cell">
        <div className="card">
          {get(post, "frontmatter.image", null) && (
            <Link
              className="card__media card__media--top"
              to={withPrefix(get(post, "url", null))}
            >
              <img
                src={withPrefix(get(post, "frontmatter.image", null))}
                alt={get(post, "frontmatter.image_alt", null)}
              />
            </Link>
          )}
          <div className="card__body">
            <header className="card__header">
              {get(post, "frontmatter.categories", null) && (
                <BlogPostCategories
                  {...this.props}
                  categories={get(post, "frontmatter.categories", null)}
                  container_class={"card__meta"}
                />
              )}
              {get(blog_feed_section, "title", null) ? (
                <h3 className="h4 card__title">
                  <Link to={withPrefix(get(post, "url", null))}>
                    {get(post, "frontmatter.title", null)}
                  </Link>
                </h3>
              ) : (
                <h2 className="h4 card__title">
                  <Link to={withPrefix(get(post, "url", null))}>
                    {get(post, "frontmatter.title", null)}
                  </Link>
                </h2>
              )}
            </header>
            {get(post, "frontmatter.excerpt", null) && (
              <div className="card__copy">
                <p>{get(post, "frontmatter.excerpt", null)}</p>
              </div>
            )}
            <footer className="card__footer">
              <span>
                On{" "}
                <time
                  dateTime={moment(get(post, "frontmatter.date", null)).strftime(
                    "%Y-%m-%d %H:%M"
                  )}
                >
                  {moment(get(post, "frontmatter.date", null)).strftime("%B %d, %Y")}
                </time>
              </span>
              {get(post, "frontmatter.author", null) &&
                (() => {
                  let author = get(post, "frontmatter.author", null)
                  return author.link ? (
                    <span>
                      {" "}
                      by{" "}
                      <Link to={withPrefix(author.link)}>
                        {author.first_name} {author.last_name}
                      </Link>
                    </span>
                  ) : (
                    <span>
                      {" "}
                      by {author.first_name} {author.last_name}
                    </span>
                  )
                })()}
            </footer>
          </div>
        </div>
      </article>
    )
  }
}
