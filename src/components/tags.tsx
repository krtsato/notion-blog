import React from "react"
import Link from "next/link"

export default (tags) => (
  tags.map(tag => (
    <Link href={`/tags/[tagName]`} as={`/tags/${tag}`} passHref prefetch={false}>
      <a>{tag}</a>
    </Link>
    )
  )
)