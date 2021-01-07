---
title: 'Use WordPress For What It Is Best At'
description: Wordpress is the king of the web for a reason. It's an amazing content management system. But, I'd never use it for building web pages.
category: Content Management Systems
date: 2020-12-15T00:00:00Z
---

## WordPress is the king of the web for a reason. It's a fantastic content management system. But, I'd never use it for building web pages.

![Wordpress logo](/assets/images/wordPressLogo.png)

### Why Wordpress is a great CMS

I've worked with marketing teams who swear by WordPress. They swear by WordPress because when they are handed down some new content from the higher-ups, and with ease, they publish a stylish, SEO-friendly blog post. 

And when they need to publish custom posts with a unique set of data, thanks to [Advanced Custom Fields](https://www.advancedcustomfields.com/), WordPress is easily extendable.

Yeah, WordPress is the swiss army knife of the internet.

WordPress provides everything a website manager needs to design, develop, and publish a website.  When you start managing a website having everything you need in one system is excellent. However, you'll soon learn that WordPress is great at some things and poor at other things. From my experience, what WordPress is great at is managing dynamic types of content and what its not good at is create browser-optimized and highly performing web pages.

### The good aspects - managing content

<u>**WordPress is a great content management system**</u>, mainly because it's easy to get started, easy to use, and easy to customize. The website admin wins because, in addition to being easy to use,  WordPress is also easy to develop. It's not hard for website admins to get in and build out customizable features. With plugins like Advanced Custom Fields, Custom Post Types, and the baked-in-to-WordPress Gutenburg editor, a website administrator can create a truly unique website.

Just take a look at the [library of WordPress plugins](https://wordpress.org/plugins/) available to the public (some are premium, but most of them are free). The possibilities are endless. You may be asking yourself, how come there are so many plugins out there?  Well, that has to do with the philosophy behind the technology. WordPress is an [open source](https://opensource.org/) platform. And, open-source means that the codebase is open to the public. The result of this philosophy has propelled WordPress to the top website builder on the Internet.

At this point, WordPress is a monolithic piece of software that can continually grow based on you the user's needs. However, WordPress's size and scale is the very thing that makes it poor when it comes to browser performance.


### The bad aspects - building webpages

If you run a WordPress against Google's Lighthouse or GTMetrix, you'll most certainly get a failing grade. These analysis tools want to see minified HTML, modular CSS, and non-block JavaScript. Sadly, WordPress isn't designed for all that out of the box. Sure, there are plugins out there to try and solve this problem. But installing yet another program is going against what these website metrics want. They want simple, fully built webpages, and they want to interpret the page's meaning and index them. The browser wants simple, purely made pages, and you can't get pure by installing another plugin.

So why doesn't WordPress have the ability to make simple HTML/CSS pages? That has to do with its architecture. WordPress pages are dynamic and built at the time the user requests them. To elaborate, when a user visits a blog page on a WordPress site, the user clicks the link to the page. Then the request is sent over the network. Once the request hits the server where the WordPress codebase is hosted, then another process is triggered. What happens now is WordPress maps together all the page's content together and then sends it back to the user.  This process can happen in milliseconds, or sometimes this process can take several minutes. Often when this process is happening, the user is left staring at a page loader. It's this process that makes WordPress not great for making webpages.

### How to use Wordpress for what its good at

So what should your business do if they are losing customers to a slow WordPress site? Well, it's simple, don't get rid of WordPress and use it only as your content management system. Then have a highly-trained front end web developer rebuild your site using the latest web technologies. You can host your WordPress site on a sub-domain and your site's front end on the main domain. You may ask yourself how something like this work can? The answer is APIs! That's an entirely different and deep subject, too much for this article. Here's a good article to read about [why your company should be using APIs](/why-your-company-needs-an-api/).

I'll leave you with a secret tip. You'll need a JAMstack developer to get all this done. The reason being, a JAMstack developer understands how to bring different technologies together using APIs to create a truly customizable and dynamic application. A JAMstack developer will build a static version of your website, using either Next.js or 11ty, and then build custom APIs to interface with your WordPress content. That way, Google and, by extension, your customers will like your fast website. And your content managers or website managers will appreciate the fact they don't need to learn a piece of software to manage the website. I think using this approach. You'll be able to utilize WordPress what it is good at and scratch what it isn't good at.