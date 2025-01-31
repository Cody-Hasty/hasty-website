---
title: "Read Me: A Hasty Blog"
excerpt: "Putting text on the page: api, design, and delivery. Here's a few considerations I took when developing this blog."
blogImage: "/images/thumbnail.png"
date: "2024-08-22T08:00:00.000Z"
ogImage:
  url: "/images/thumbnail.png"
tags: ["typescript", "design", "nextjs", "tailwindcss"]
---

#  Table of Contents
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [High-Level Description](#high-level-description)
- [Backend Routes](#backend-routes)
- [Frontend Routes](#frontend-routes)
- [Static and Dynamic Routes](#static-and-dynamic-routes)
- [Blog Data Storage](#blog-data-storage)
- [Visual Design](#visual-design)

#  Installation
- Install npm packages with `npm install`
- Run the website with `npm run dev` and visit [http://localhost:3000](http://localhost:3000)

**Production Link:** https://www.hastycreations.com/

#  High-Level Description
>  _Hasty Creations_ is a full-stack application built using Typescript Next.js. Each of the frontend routes are passed through a page building model that renders functional hook-based React components. The styling is done with a combination of TailwindCSS and Bootstrap components.

#  Backend Routes
| Method | Route                  | Description                                                    |
| ------ | ---------------------- | -------------------------------------------------------------- |
| `POST` | `/api/email`           | Takes an email as a parameter and sends it to my email address |
| `GET`  | `/api/github/projects` | Returns a list of the projects that I have on Github           |
| `GET`  | `/api/github/user`     | Returns my Github user information                             |

#  Frontend Routes
| Route               | Description                                                            |
| ------------------- | ---------------------------------------------------------------------- |
| `/`                 | Homepage                                                               |
| `/about/experience` | Timeline view of my career with a resume available for download        |
| `/about/github`     | List of my current Github projects with some information               |
| `/blog`             | Landing page for the website blog with a list of all the current posts |
| `/blog/[slug]`      | Specific blog page based on the `slug` parameter                        |
| `/contact`          | Provides an email form to send a message                               |

# Static and Dynamic Routes
> I broke down the routes while developing the website to lean into the static and dynamic route generation from the Next.js framework. The Blog required the use of static props in order to support the  generation of statically paginated blog posts.

![Static and Dynamic Routes](/images/blog/blog-read-me/static-dynamic-routing.png)

#  Blog Data Storage
> Each blog page is stored as a markdown document in the website repository. The site works by gathering a collection of the documents inside the _posts directory on the server's side during startup and paginating them for delivery on the blog index page. The `react-markdown`, `remark-gfm`, and `rehype-slug` npm packages work together to parse the markdown and format it into html on the page.

#  Visual Design
> For the theme, I went to ChatGPT and ran some visual ideas through DALL-E for inspiration. I started with a vague idea of what I was looking for - a colorful and rounded visual of the San Francisco skyline at sunset in some capacity.

![DALLE original ui idea](/images/blog/blog-read-me/website-ui-2-dalle.png)

> This was a nice point to start at, but the background contrasted too heavily with the text that I wanted to display. I ran it again with this in mind.

![DALLE second ui idea](/images/blog/blog-read-me/website-ui-dalle.png)

> At this point, I decided to keep the middle body portion and rounded floating navbar with a background spilling to the sides and below the content. However, the background was still overly complicated and distracted from the page itself. Taking a step back, coming up with a simplified thumbnail first and reverse engineering a design style made sense.

![DALLE thumbnail idea](/images/blog/blog-read-me/thumbnail-dalle.png)

> I really liked the color scheme here, but there's still way too many lines for this to look pleasant at the default thumbnail size.

![DALLE final thumbnail idea](/images/blog/blog-read-me/thumbnail-2-dalle.png)

> This was the ultimate winner. The gradient from a dark navy blue to a brilliant orange provided a simple color palette to follow and the visual of the sun rising over the ~~Golden~~ Navy Blue Gate Bridge was an excellent background to use for the page. I wanted some more control over the final appearance and a vector form of the image that would scale well, so I moved this project over to GIMP for a (somewhat tedious) tracing of the portions that I wanted from the original.

![Traced SVG image](/images/blog/blog-read-me/svg-trace.png)

> Voilà! No more strange AI characters and only 1 sun. The image was only 18 kb, and I could scale it up without any loading delay for the website background. With the gamma layer saved, the only other thing I needed was the color gradient, which would show right through the transparency. This was added to the website CSS along with a couple of shooting stars to balance the darker top portion of the page theme's gradient on longer pages.

![Figma Diagram](/images/blog/blog-read-me/figma-design.png)
> Finally, I transferred this design into a Figma diagram so I could see the final effect and plan the responsive views visually. I also ran a quick DALLE for a favicon, which was far simpler with the feel of the website already figured out. I also took the thumbnail that DALLE generated and replaced the strange AI character with "HC" for Hasty Creations in the font that seemed the most fitting. (This ended up being the "Delius Swash Caps" font, which provides an alternate font family for the page headers and navbar website name.)
