---
title: 'What are Web Components?'
description: In short, web components are a set of different tools that give the developer to ability to create custom elements that are reusable.
category: Web Development
date: 2021-01-23T00:00:00Z
---

## In short, web components are a set of different tools that give the developer to ability to create custom elements that are reusable.

### From a Birds-eye view

The benefit of using [React.js](https://reactjs.org) and [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/), is that it allows you to create code that can be reused freely through out an application. However, without those modern tools creating reusable elements just using HTML and an associated stylesheet and script is SUPER HARD.

**In comes, web components...**

Web components are made up of three technologies, when used togother, will allow you to create reusable components of complex site elements.

* Custom Elements API
* Shadow DOM
* HTML templates

### Custom Elements API

The Custom Elements API allows the developer to create custom elements that [encapsulates any functionality on an HTML document](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).

Creating a custom element starts with ```CustomElementRegistry``` object, which allows the developer to register a custom element and return new information on that element.

To get things start you use ```CustomElementRegistry.define()```.

This method takes in two arguments:

* A label for your custom element as a string

```CustomElementRegistry.define('first-web-component')```

* An class name that contains the functionality that'll be applied to the element

```
class FirstComponent extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

  }
}

CustomElementRegistry.define('first-web-component', FirstComponent,...)
```
* The third option is an object that contains an extends property with an DOM element as its value 

```CustomElementRegistry.define('first-web-component', FirstComponent,{ extends: 'p'})```

That's sort of an overview of Custom Elements API. I plan to report my findings when I begin building apps with it.

### Shadow DOM

https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM

### HTML Templates

https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots