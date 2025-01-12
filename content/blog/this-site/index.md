---
title: How I Built this Site
date: "2025-01-12T22:12:03.284Z"
description: "A guide about how I made this website with Gatsby/React."
featuredImage: "./cloud-and-computer.webp"
---

I have had the idea of remaking my own website in the back of my mind for some time. I finally decided to do it on Christmas Eve, and this time, I decided to go for Gatsby. In this post, I'll explain why this was the best option in many aspects, including economics.

![Clouds and Code](./banner.jpg "AI generated computer in the cloud")

### The old page

I made my old page with a template from [HTML5 UP](https://html5up.net/hyperspace). It was great, very responsive, I liked it a lot. I recommend these templates to anybody looking to make something simple, but I wanted a little bit more. 

[Link to my old page repo.](https://github.com/jorgesoft/jorgesilva.pro.old)

### Finding the right tech

All I wanted to do new was the ability to have multiple pages and an easy-to-maintain blog. Didn’t have to search much to find about Gatsby. They even have a [template to create a static blog site](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog) that’s basically what I implemented in my site.

To install it, I used the following commands:

```
# You need to install node first
sudo npm install -g gatsby-cli
gatsby new jorgesilva-pro-v2 https://github.com/gatsbyjs/gatsby-starter-blog
cd jorgesilva-pro-v2 
```

Now, the other two packages that I used the most are Bootstrap and Bootswatch. Bootstrap is a powerful framework to buid responsible sites, with a prebuilt grid system and components that make building sites fast and easy. Bootswatch provides themes for Bootstrap. It’s crazy how someone who knows nothing of frontend development has made people say “wow this is pretty website” by only using these two tools. 

### How Gatsby works

I won’t cover all the details, only the main features of this template that I’m using and at a high level. First, the template has this src directory with the following content:

```
/jorgesilva-pro-v2/src
├── components
│   ├── bio.js
│   └── …
├── images
├── pages
│   ├── blog.js
│   ├── index.js
│   ├── 404.js
│   └── …
├── templates
│   └── blog-post.js
├── style.css
└── normalize.css
```
The components directory is to have reusable React components. You can see the bio.js component at the end of each blog post. Pages directory is cool; whatever file you have there will be a static page. For example, blog is jorgesilva.pro/blog, index.js is the home page, and 404.js is the page that loads for 404 errors. The templates directory has templates for “dynamic” pages; blog-post.js is the template that will load for each blog entry that I have, which also works in a very cool way.

### How the blog feature works

There’s this directory content/blog in the template where we have our blog posts:

```
/home/jorges/jorgesilva-pro-v2/content
└── blog
    ├── hello-world
    │   ├── index.md
    │   └── salty_egg.jpg
    └── this-site
        ├── cloud-and-computer.webp
        └── index.md
```
The functionality is that each directory inside the blog directory will be a URL that loads a blog post. For example, the hello-world directory will make the blog post jorgesilva.pro/hello-world, and the content is in index.md and includes the salty_egg.jpg image. So, to make this blog entry, I basically made the this-site directory and wrote what you are reading in the index.md page. Very cool right?

### Hosting

I’m using Azure Static Web Apps to host this page. Their free tier for personal projects is very easy to use and connects easily with GitHub Actions CI/CD. I plan to do a more detailed post about it. I have my domain jorgesilva.pro managed in Azure, and with an Office 365 subscription for my public email of contact@jorgesilva.pro. All this serves as a very good practice tenant for Azure/Office services. 

# Conclusion

So far I like this a lot. Again, very easy to customize pages and manage a blog that doesn’t take a lot of maintenance and doesn’t cost me much money. I would 100% recommend this solution to anybody looking for something similar. 