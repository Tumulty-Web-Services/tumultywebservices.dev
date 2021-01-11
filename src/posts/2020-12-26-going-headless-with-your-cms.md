---
title: 'Going Headless with Your CMS'
description: A headless CMS enables your company's content to more than just your website. The content can be shared across all sorts of platforms 
category: Content Management Systems
date: 2020-12-27T00:00:00Z
---

## I'm not saying take your CMS to the guillotines, I'm saying make your CMS accessible for all-sorts of software

<img src="/assets/images/guillotines.png" width="500" height="600" alt="guillotines" />

### What kind of CMS do I have now?

WordPress powers 38% of the internet, and is 63% of all CMS' are WordPress. If you are using WordPress, then you are using a traditional CMS. The same can be said if you are using Drupal or Joomla. If you aren't using one of these CMS', please shoot me an email or fill on the form on the homepage. I'd love to learn about what you are using! 

**Okay, I'm using a traditional CMS good. I don't know what that is...**

A traditional CMS (content management system) is a tool used to store content like web pages, blog posts, images, and videos, in a database and make them easily accessible. Content Management Systems make web page building easy for people who don't know how to code. That's cool, though; the web is for everyone, not just the developers. A CMS like WordPress is so widely popular that they make websites easy to publish and develop for everyone. I started my career solely developing WordPress, and I am still a massive fan of it after 10+ years in the web development business.

I learned what the CMS is good at and what it's not good at throughout the years. I even wrote a blog article on the topic ["Use WordPress For What It Is Best At"](/use-wordpress-for-what-it-is-best-at/). The main thing I am concerned about with the state of WordPress is that it is falling behind in browser performance. I spent countless hours trying to optimize the WordPress site's frontend to get good scores on [GTMetrix](https://gtmetrix.com) and [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/), and it was a painful experience. I looked to JS libraries like React to help me. If I built out a React.js website and then pulled content using WP-Rest API, I could decouple WordPress from the front end and solve my issues. 

Decoupling WordPress's frontend did help. Having it built out using a Create React App tool gave me more control over the scripts and stylesheets of the site.  When I ran the site through GTMetrix and Google Page Speed, the metrix did improve. But, there, having a React.js frontend did solve all my performance issues.  I needed to set up server configs to ensure that the server was sending up cached and minimized resources. There were a handful of plugins that claimed they'd take care of them for me, and after hours of trial and error, none of them worked. 

The only solution that made sense was the set up a custom hosting server. I picked Digital Ocean with Ubuntu and used Ngnix as the webserver. This server hosted my WordPress installation with my custom React.js theme. I was able to set up caching for resources and configured Nginx to allow some other low-level configs. However, my scores improved slightly, and I felt like I was very much out of my comfort zone and pulling in random code-snippets for docs. Through that experience, I learned that I like to push myself outside of my comfort zone. However, I also automatically mentally regulate the time and level of management of these new areas if I implement them professionally. Basically, I couldn't handle frontend development, backend development, and DevOps by myself.

That's when the JAMstack became my light at the end of the tunnel. JAMstack is all the rage for the developer community, but what business owners need to know is that you can do more with less, [very good for your digital presence](/we-are-a-jamstack-shop). Moving the site from WordPress with React.js to the JAMstack, solved all my problems.  I migrated my React.js theme to Next.js and published it on separate hosting using Vercel. Next.js is a React.js framework that [enables functionality such as server-side rendering and generating static websites](https://nextjs.org). And, Vercel is the company behind Next.js, and they offer free hosting for Next.js applications. Their hosting platform is designed for performance handing all the webserver configs I was stretching myself trying to manage. 

Now the front end of my website is a new application designed for performance 100% outside of WordPress, and the metrix is through the roof. I still had my WordPress set up to manage content, but now it would be considered headless. I only used WordPress to store and manage data and serve it over WP-Rest API. That approach is known as going headless with WordPress, meaning there isn't a front end part to the system.  Through this process, I learned that there are tools that can do everything but only do a small number of things better than others when it comes to the web. 

### What kind of CMS should I have? 

If your company has the same issues with your website as I did, I would recommend going headless with your WordPress site. WordPress Rest-API has been a part of the core of WordPress since version 4.7. So there is a strong possibility you have to tools to go headless already set up. If you aren't using WordPress 4.7, email me tumultywebservices@gmail.com, and I will get your website up to date with the latest WordPress version. You are open to many security vulnerabilities if your WordPress isn't up to date. Anyway, if you are using the latest WordPress version, you have all the tools needed to go headless. If you want to extend the power of WordPress, I would look into Advanced Custom Fields, Custom Post Types UI, and their corresponding WP-REST API plugins extensions. The combination of those plugins will make a very customizable and powerful headless CMS. 

If you are starting from scratch and want the same, a CMS backend and a performant frontend, there are plenty of CMS designed to be headless out of the box. I haven't had an opportunity to build a website with it yet, but I'm excited to try out [Sanity.io](https://sanity.io). Sanity.io is a headless CMS where you build out fields to store the data. It's not like WordPress, where there are posts and pages. With Sanity.io, there is a blank slate you decide how the content will be organized and stored. 

A couple of other headless CMSs I'd be open to checking are [Netlify CMS](https://www.netlifycms.org/) because I love everything from this company, Contentful, Butter CMS, and Directus.

### How can I go headless?

The first thing I would do is assess if you need to go headless. Does your website load faster than 3 seconds? Do you have silly loader icons spinning for minutes before the content is loaded? There is a chance your website is loading fundamental assets that are quick to put together. If you think it works just fine, then don't fix what isn't broken. 

If your website is pretty large with tons of different pages, blog posts, and all sorts of content, you are losing page-views because of its load speed. Then it's a good idea to go headless. The first step is to assess if your CMS can serve data over API routes.

* WordPress has an API, so you can go headless.
* Joomla has an API, you can go headless.
* Drupal has an API, you can go headless.

The next step is getting someone to refactor the frontend of your website into a separate application. I would recommend using [Next.js](https://nextjs.org) if you have a lot of different data sources per page and have a complicated user interface. But if you keep your site simple with text, images, videos, and fancy styling, you might want to look into a static site generator like [eleventy](https://www.11ty.dev/). Then you'll want to set your frontend code to pull data from your CMS using [Axios](https://www.npmjs.com/package/axios) or [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) from your CMS's APIs. 

These are the steps to get your started, but it isn't that simple websites are unique animals so you'll have to be critical about how your resources are served over API endpoints. If you want some help please feel free to email me at tumultywebservices@gmail.com. 

