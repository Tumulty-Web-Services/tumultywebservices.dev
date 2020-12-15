---
title: 'Use WordPress For What It Is Best At'
description: Wordpress is the king of the web for a reason. It's an amazing content management system. But, I'd never use it for building web pages.
date: 2020-12-16T00:00:00Z
---

## Wordpress is the king of the web for a reason. It's an amazing content management system. But, I'd never use it for building web pages.

### Why Wordpress is a great CMS

I've worked with marketing teams who swear by Wordpress. They swear by Wordpress, because when they are handed down some new content from the higher-ups, and with ease they publish a stylish, seo-friendly blog post. 

And, when they need to publish custom posts with a unique set a data, thanks to [Advanced Custom Fields](https://www.advancedcustomfields.com/), Wordpress is easily extenable. 

Yeah, WordPress is the swiss army knife of the internet.

Sadly, as a swiss arm knife some of its features have become bloated and dull over time. This article is writen to describe what its good at, what you shouldn't use it for, and how we can get your current Wordpress website set up for perforamnce and for the future.

#### So, let's start with what Wordpress is good at

<u>**Wordpress is a great content management system**</u>, mainly because its easy to get started, easy to use, and easy to customize. The users win, because in addition to being easy to use for them its easy to developed. It's not hard for software engineers to get in and build out customizable features. With some knowledge of PHP & MySQL, an software engineer can build some really fantastic programs onto of Wordpress.

Just take a look at the [library of WordPress plugins](https://wordpress.org/plugins/), that list is made up of niche pieces of software designed to customize Wordpress. So, how can everyone build on top of Wordpress? Well, that has to due with the philosophy behind the technology. Wordpress is an [open source](https://opensource.org/) platform. And, open source meens that the codebase is open to the public to work on. The result of this philosophy has propelled Wordpress to the top website builder on the Internet.

For all its development leaps and hurders at this point WordPress has become a monolith. Its great for teams to produce content, but when it comes making fast high performant web pages its almost impossible. 

You run a Wordpress against Google's Lighthouse or GTMetrix you'll most certainly get a failing grade. These analysis tools want to see minified HTML, modular CSS, and non-block JavaScript. Sadly, WordPress isn't designed for it, and you can just install a plugin to fix the issue. Sure, there are plugins out there to try and solve this problem. But installing, yet another program, is going against what these website metrix wants. They want simple fully built webpages and they want to clearly interpret the page's meaning and index them. Wordpress pages are dynamic and built at request by the user. Sure it's easy for content publishers to create content, but its the browsers, and by extension the user suffers. 

### Why you shouldn't build your website using it

The main problem with WordPress websites is that they are slow. The reason why WordPress sites are slow is that everything is put together last minute. When a user visits the website, WordPress will put all the page contents (images, text, page animation, etc.) together at the time of the request. The user is left staring a loader while the browser makes a request to the server to find the text, images, videos and layout.
 
Since pages are made upon request, Wordpress is also hackable. 

### What you should be building your site with

So what should your business do if they are losing customers to a slow WordPress site. Well, its simple don't get rid of WordPress and use it only as your content management system. Then have a highly-trianed front end web developer rebuild your site using the latest web technologies. The front end of your site will become its own entity.

You'll need a JAMstack developer to execute such a diabolical plan. Reason being, a JAMstack developer understands how to bring in all different technologies to create a try customizable and dynamic application. A JAMstack developer will probably buil a static website, using React.js or 11ty, and then build custom APIs to interface with your WordPress' content. That way Google and by extension your customers will like your fast website and your marketing teams will like the fact that their workful isn't disrupted. You can still build a monolthic WordPress website and main tain the speed a basic, yet dynamic, HTML/CSS website.