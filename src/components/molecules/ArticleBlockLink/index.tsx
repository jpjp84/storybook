import React from "react"
import { Link } from "gatsby"
import { NotionNode } from "notion"

interface ArticleBlockLinkProps extends Pick<NotionNode, "title" | "excerpt"> {
  link: string;
  icon: string;
}

const ArticleBlockLink: React.FC<ArticleBlockLinkProps> = ({ link, title, excerpt, icon }) => (
  <div className="box">
    <article className="media">
      <figure className="media-left">
        <p className="is-size-3">{icon}</p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>
              <Link to={link}>{title}</Link>
            </strong>
            <p>{excerpt}</p>
          </p>
        </div>
      </div>
    </article>
  </div>
)

export default ArticleBlockLink
