---
title: 'Handeling unexpected moving page elements'
description: How to handle unexpected HTML element shifts and improving Google's Core Vital metric, Cumulative Layout Shift
category: Site Optimization
date: 2021-01-16T00:00:00Z
---

## Wait, I was about to click that, where did it go?

<img src="/assets/images/handeling-shifting-elements.jpg" width="600" height="400" alt="handeling shifting elements" />

When elements on a webpage disappear or move places unexpectedly, it can throw the user for a loop. For example, say your reading a blog article, and then all of a sudden, an advertisement pops up and throws the text you were reading off the screen?

If you are like most people, you'll lose interest in the content of your reading. A trigger will go off in your brain, saying something wrong with this site and inherently the content. You lose trust with the site and don't go back.

How the content of a web page is displayed is just as important as the content's substance. 

Google's mission is to index the world's information, and as a bonus mission, they want to organize valuable information over spam information. The Google Core Vital Metric, Cumulative Layout Shift (CLS), measures the stability of a web page's content by totaling how it shifts across its layout. However, any element that doesn't change within 500ms of a user's input isn't recorded. Overall, the CLS looks at how much content moves within a viewport and the distance that content moves.

Here are a handful of reasons elements shift unexpectedly, cause poor CLS metrics

* Images without proper dimensions
* Handling iframes and embedded widgets
* Dynamic content
* Web fonts

### Images without proper dimension

It's a good rule always to include a ```width``` and a ```height``` attribute to an image or a video. Another good rule is to provide space around an element using aspect ratio boxes written in CSS. Following these two rules, the browser can allocate the correct amount of space in the DOM while the image loads.

#### A trip down memory lane...

Back when the internet was still young, web developers added ```width``` and ``` height``` attributes to an ```<img>``` to allocate space on the page between the image started to render. The process of giving space on the page beforehand was a way to minimize the page's reflow and re-layout.

Things changed with responsive web design hit the scene. The developer started to omit the ```width``` and ```height``` attributes from elements and began using CSS to resize images. They would often set the image's width to ```100%``` in CSS so the image would automatically resize depending on the device.

The drawback to using CSS to set the image width/height is the page didn't have allocated space for the image to load once it started downloading. The browser wasn't able to determine the image's dimensions. The page's reflow would change a whole-hell-of-a lot when the image finished downloading and appeared on the screen. The reflow would cause moving text and lead to a poor user experience.

**Aspect ratios come in to save the day...**

Expressed with two numbers separated by a colon, looking something like this (16:9), really means width to height ratio (width: height). In olden times, setting the width and height of an image will let the browser know the amount of space it needs to set aside in the page for the image to render.

#### Today...

Modern browsers don't handle images like that anymore. Modern browsers set a default aspect ratio of an image based on its width and height; this prevents any layout shifts.

**How this works..**

You set up an image like so

```<img
    src="cool-person.jpg"
    alt="cool person with a gameboy"
    width="750"
    height="350"
/>
```

Then underneath the hood, every browser has a User-agent stylesheet, which according to the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade#user-agent_stylesheets) is "The browser has a basic style sheet that gives a default style to any document. These style sheets are named user-agent stylesheets. Some browsers use actual style sheets for this purpose, while others simulate them in code, but the end result is the same."

The user-agent stylesheet has a default image property that sets the aspect ratio. It looks something like this...

```
img {
    aspect-ratio: attr(width) / attr(height)
}
```

The ```aspect-ratio``` on this ```img``` tag calculates the aspect ratio based on the image before it has loaded in the browser. For example, when the user requests a page with an image that is 100% width. That information is passed to the User-agent stylesheet before the page is loaded. Then what is returned is the aspect ratio of that image based on the screen size. So that image with the 100% width has the correct height based on the current browser width.

#### Responsive images

A new feature of modern browsers is the ```srcset``` attribute for images. This attribute allows you to load a list of images with different width or height properties, and depending on the screen size, the appropriate image with the correct width is loaded.

The code looks something like this...

```
<img
    width="500"
    height="600"
    src="high-school-photo.jpg"
    alt="john doe senior year photo"
    srcset="high-school-photo-100.jpg 100w,
        high-school-photo-200.jpg 200w,
        high-school-photo-300.jpg 300w"
/> 
```

### Handling iframes and embedded widgets

Adding a Youtube video, a Google map, or tweets to a page are an example of embedding web content. You can accomplish the following ways: 

1. Using a combination of HTML and JS fallbacks
2. An HTML snippet
3. ```iframes```

Taking outside content and embedding it in a webpage can lead to unexpected layout shifts. The browser doesn't understand the widget's aspect ratio before rendering and doesn't reserve enough space for the embedded to fill up.

There is a work-around for this issue by calculating enough space for the embed with a placeholder.

To do this, you must...

1. Get the width/height of the embed beforehand
2. Then create a placeholder for the iframe that is set to fully formed embedded widget dimensions

### Dynamic content

Some examples of dynamic content that could potentially disrupt the CLS are

1. Subscription pop-ups
2. GDPR notices
3. Alert boxes 

If you are the site owner of a marketing website, then you can't get away from these things. The best approach to handling these dynamic pieces of content is to reserve enough space in the viewport in advance for these elements.

You can do this be setting specific element sizes to a ```div``` where the content will be loaded. 

### Web fonts

You can handle web fonts from affecting the CLS in two ways: 

1. Add a fallback font that will load font before the new font downloads and takes its place
2. Add "invisible" text to the page and when the font downloads and that font to the invisible text and then make it visible

To execute these task you have two options

1. ```font-display``` allows you tom modify the rendering behavior of custom fonts with the following values: auto, swap, block, fallback, and optional. 
2. Baked into the browser is the [Font Loading API]. The Font Loading API has a single task to reduce the time it takes to download fonts.

<hr/>

<sup>As I mentioned before, I am studying Google's [Web.dev](https://web.dev) documentation to understand how to make high performing web pages. These posts are my way to making sense of the documentation. Please do to think that I am passing this content off as something from the top of my brain or from my personal experience. I am not siting the content of this article as my own work. This content is a study on the documentation provided by Google. I have about 11 more articles studying Google's documentation. Then I'll switch gears and start writing more unique content.</sup>