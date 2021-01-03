---
title: 'Making Your Company Website A Progressive Web App'
description: If you want to stand out on the web and on a smartphone make your site a progressive web app.
date: 2020-12-09T00:00:00Z
---

## Do you want to provide your customers a great experience on your website? Then you need a progressive web application.

![progress web application](/assets/images/PWA.png)
<sup>By [Diego González-Zúñiga](https://github.com/webmaxru/progressive-web-apps-logo), [CC0](https://commons.wikimedia.org/w/index.php?curid=86444196)</sup>

### What is a PWA?

Before we jump into how making your customers happy, we need to get the horse before the carriage. What is a PWA? PWA stands for a progressive web application, and it is a website that uses bleeding-edge web technologies to provide users an enhanced web experience.  

A non-PWA, a.k.a, a regular website, can look pretty, load quickly, and handle complex user interaction. What a non-PWA website can't do is act like a mobile app or a desktop application.

**A PWA can act like both a mobile and desktop application.**

According to the [google documentation](https://web.dev/what-are-pwas/)

"Progressive Web Apps are web applications that have been designed so they are capable, reliable, and installable."

The *keyword here* is **INSTALLABLE.** 

Making your website installable is cool because your users now can download your website like they would download a mobile app or desktop app. They are free from having to use a browser to access the site.

A good example of websites that are downloadable PWAs are [weather.com](https://weather.com) and [smashingmagazine.com](https://smashingmagazine.com).  If you go to either one of these websites, take a look at the small icon on the right side of the browser bar.

![install app](/assets/images/install-app.png)

If you click that the icon the site will automatically download on your desktop. I stronly recommend you try this now (on both your computer and/or smartphone). 

**Non-PWA sites don't have this feature.**

This installable feature gives your website the capability to act as a mobile or desktop application.

I'll mention this because it is super important. Because of this "installable" feature, you can make your website available from the Google Play Store or iTunes App Store and have it downloadable like a native mobile application.

### Benefits

As a web developer, by nature, I am a builder who likes to see how people interact with what I build. Making a PWA is great because I am building an app with a technical foundation that enables new customer expectations. PWAs are designed to grow and expand based on customer and business needs.

*Let me explain why*

![customer workflow](/assets/images/customer-workflow.jpg)
<sup>Image provided by [web.dev](https://web.dev/drive-business-success/)</sup>

Early in my career, I was a UX researcher.  I didn't know what that was at the time, but essentially my job was to call users and ask them how we could improve my company's e-commerce website.  The two things I learned, which is common knowledge at this point, are that our users didn't like slow page speeds and used our site primarily on their smartphones. 

At the time, I know the marketing and IT departments were considering making a mobile version of their e-commerce. Ultimately, they decided not to because of the cost but did hire a CSS pro to make the site more responsive.  If PWAs were a thing back then and I had the skills I do now, I would have suggested I rebuild their site using PWA as a ton of money.

PWA's by nature are blazing fast and designed to be mobile-first applications.  As a developer building a PWA you need to build the project using a tool provided by Google called [Lighthouse](https://developers.google.com/web/tools/lighthouse).

Lighthouse is the primary tool a developer will use to develop a PWA. From experience, I learned it's a harsh and critical tool if you don't know what you're doing, but will ultimately make your site better. The tool analyzes your site and pulls out features that are slowing it down such as images, JS & CSS files. If items that are slowing your site down are fixed and verified by Lighthouse, then you can't start to develop the site as a PWA. It's a huge challenge for developers to incorporate various resources and then optimize them to be liked by Lighthouse.  However, once you get everything fixed, your site is now optimized for performance. Then Lighthouse gives you a set of criteria to make it a PWA, which is light years easier than making your site run at super-human speeds.

Suppose you can manage to fix all the items that are slowing your site down. Then you can start the configuration process for your site to be a mobile-first site. What I mean by a mobile-first application is that it's installable and works as a mobile app. The PWA configuration process doesn't include making all the site elements responsive but handles more under the hood logistics, like making your site installable and giving it a clickable icon.


### Cost Effective: Mobile & Web Experience

I've been asked if there is a cost-effective way to make our website a mobile app. Until PWAs were a thing, I'd say no, and hiring a mobile developer is often very expensive. The project then becomes null, and I lose out on the opportunity to build something cool and earn extra money. I am very grateful for PWAs because now, when asked, "Can you make our website a mobile app?" I can say yes.

Pricing out the cost of building a website and a mobile app would be difficult because I would need to know the project's details. However, I can safely say it would be expensive because you are paying for two products - a website and a mobile app if you are considering a website and a mobile app, research into a PWA first because it could save your company lots of money. You are no longer paying for two products, but one [product with unique configurations](/we-are-a-jamstack-shop/) to make it act like a website and a mobile app.

If you were to ask me to build you a PWA, I would have to factor in the time and effort of building out the site, which is more expensive than a regular website but drastically less expensive than building a website and a mobile app.

### Challenges

Now that I sang the praises of PWAs let's discuss some drawbacks (no piece of tech is perfect, trust me). So here is a shortlist of reasons why a PWA might be a bad idea.

1. So there is another benefit to PWAs that is way too technical to go into depth but putting briefly, PWAs also work offline. Having your website work normally when a user has a slow internet connection is fantastic. However, this is also a drawback for the customer interacting with your site offline—the reason being is caching. Caching is a technical concept that allows the browser to store a website's contents on your machine. PWAs take advantage of this to enable the user to access regardless of internet speed.

    [Web developers love caching](https://developer-kaustubh.medium.com/how-caching-works-e474e288c21d) and, at the same time, find it challenging to manage. The copy of the website stored in cache doesn't always have the latest version of the content. It could be stored in cache on Tuesday, and you can add a new product on Wednesday. If the user accessed the site on Tuesday and then interacted with it on Thursday offline, well, the copy of the website they'll be looking at is the one from Tuesday. So the trouble with the offline features of PWAs is keeping content up to date for users.

2. Your marketing guys aren't going to like it. With all these offline capabilities and caching, PWAs will have trouble interacting with 3rd party marketing services like Google Analytics and HubSpot. Now that you have this whole new market base with offline users interacting with your site offline, those marketing tools can't capture that data -- they need internet access to work. So with a PWA, just know there is a big segment of your customer base that is untrackable. I'm confident that tools will get onboard with PWAs, but they need some time to develop their technology to interface with them properly.

So with all this out on the table, is a PWA right for your company?  I would say if you want to keep your online presence up to date and provide an AMAZING customer experience than yes! If you care more about whether your marketing guys are happy than no.
