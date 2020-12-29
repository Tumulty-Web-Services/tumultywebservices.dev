---
title: 'Based on my understanding of Google's Core Web Vitals. What is Largest Contentful Paint?'
description: Largest Contentful Paint is how Google's Core Web Vitals measure the time it takes for the content of a web page to come visible to the user.
date: 2020-01-06T00:00:00Z
---


## Social media push

--- create a company page, and push this article on my linkedin, and state "If you visit a website and you see a spinning loader of death or it takes more than 3 seconds to load, I'm won't say its a bad company, but they clearly don't care about providing their customers a great way to get their content on the web. I'm here to fix websites that use spinning loaders of death and website that take more than 3 seconds to load! Here's an article I recently wrote on the subject. 

## From what I've gathered so far, Largest Conteful Piant is the time it takes for the web page's content to reach your eyes upon request.


### In the past, fixing slow loading websites have been an issue

Historically, it's been a challenge for web developers to measure how quickly the main content of a web page loads and is visible to users.

Older metrics like load or DOMContentLoaded are not good because they don't necessarily coresspon to what the user sees on the their screen. And newer, user-centric performance metrics like First Contentful Paint(FCP) only capture the very beginning of the loading experience. If a page shows a splash screen or displays a loading indicator, this moment is not very relevant to the user. 

In the past, we've recommended performance metrics like First Meaningful Paint (FMP) and Speed Index (SI) (both available in Lighthousse) to help capture more of the loading experience after the intial paint, but these metrics are complex, hard to explain, and often wrong-meaning they still do not indentify when the main content of the page has loaded. 

Sometimes simpler is better. Based on discussions in the W3C Web Performance Working Group, and research done at Google, we've found that a more accure way to measure when the main content of a page is loaded is to look at when the largest element is rendered.


### So what is LCP?

https://web.dev/optimize-lcp/
https://web.dev/lcp/