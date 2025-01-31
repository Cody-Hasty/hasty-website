import fs from "fs"
import promptSync from 'prompt-sync';

const prompt = promptSync()
const existingPostSlugs = fs.readdirSync("_posts").map(post => post.replace(".md", ""))

console.log("-------------------------------------------------")
console.log("Creating a new blog post. Please fill in the following information or leave blank to complete later.")
console.log("-------------------------------------------------")

let blogPageSlug = prompt("Enter the slug of the new blog post: ").replace(/ /g, "-").toLowerCase()

while (existingPostSlugs.includes(blogPageSlug)) {
  console.error("A blog post with this slug already exists. Please choose a different slug.")
  blogPageSlug = prompt("Enter the slug of the new blog post: ").replace(/ /g, "-").toLowerCase()
}

fs.mkdirSync(`public/images/blog/${blogPageSlug}/`, { recursive: true })

const BLOG_PAGE_TITLE = prompt("Enter the title of the new blog post: ")
const BLOG_PAGE_EXCERPT = prompt("Enter the excerpt of the new blog post: ")
const BLOG_PAGE_IMAGE = prompt("Enter the image of the new blog post (relative to public/images): ")
const BLOG_PAGE_TAGS = prompt("Enter the tags of the new blog post (separated with commas): ").replace(/ /g, "").split(",").map(tag => `"${tag}"`).join(", ")

const NEW_BLOG_POST_PATH = `_posts/${blogPageSlug}.md`

fs.writeFileSync(NEW_BLOG_POST_PATH, `---
title: "${BLOG_PAGE_TITLE}"
excerpt: "${BLOG_PAGE_EXCERPT}"
blogImage: "${BLOG_PAGE_IMAGE}"
date: "${new Date().toISOString()}"
ogImage:
  url: "${BLOG_PAGE_IMAGE}"
tags: [${BLOG_PAGE_TAGS}]
---

# Table of Contents
- [Table of Contents](#table-of-contents)

`)

console.log("-------------------------------------------------")
console.log(`New blog post created at ${NEW_BLOG_POST_PATH}`)
console.log("-------------------------------------------------")
