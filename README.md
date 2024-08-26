#  Table of Contents
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [High-Level Description](#high-level-description)
- [Backend Routes](#backend-routes)
- [Frontend Routes](#frontend-routes)
- [Static and Dynamic Routes](#static-and-dynamic-routes)
- [Blog Data Storage](#blog-data-storage)

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
