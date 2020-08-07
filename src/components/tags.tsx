import React from "react"
import Link from "next/link"
import blogStyles from "../../styles/blog.module.css"

export default ({tags}) => {
  const tagArr = tags.split(",")

  return (
    tagArr.map(tag => (
      <span className={blogStyles.tag}>
        <Link href={`/tags/[tagName]`} as={`/tags/${tag}`} passHref prefetch={false}>
          <a>{tag}</a>
        </Link>
      </span>
    ))
  )
}
