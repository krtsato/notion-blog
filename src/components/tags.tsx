import React from "react"
import Link from "next/link"
import blogStyles from "../styles/blog.module.css"
import {getTagLink} from "../../src/lib/blog-helpers"

export default ({tags}) => (
  tags.map(tag => (
    <span className={blogStyles.tag} key={tag}>
      <Link href="/blog/tags/[tag]`" as={getTagLink(tag)}>
        <a>{tag}</a>
      </Link>
    </span>
  ))
)
