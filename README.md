# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

WIP

### Links

- Live Site URL: 

## My process

### Built with

- Mobile-first workflow
- [Preact](https://preactjs.com/) - JS library

### What I learned

#### Drag-drop events

| Event       | Description                                          |
| ----------- | ---------------------------------------------------- |
| `dragstart` | Fired when the drag starts                           |
| `dragend`   | Fired when the drag stops                            |
| `drag`      | As the element is being dragged around               |
| `dragenter` | When the mouse enters the boundaries of an element   |
| `dragover`  | As the element is being dragged over another element |
| `dragleave` | When the mouse exits the boundaries of an element    |
| `drop`      | Fired when the element is being dropped              |

### Continued development

### Useful resources

- [javascript - How to generate hash from timestamp? - Stack Overflow](https://stackoverflow.com/questions/32649704/how-to-generate-hash-from-timestamp)
  - `(+new Date).toString(36)`
- [Drag & Drop re-ordering using HTML and React - DEV Community](https://dev.to/colinmcd01/drag-drop-re-ordering-using-html-and-react-974)
- [Build Fails with SCSS Related Errors·Issue #1430·preactjs/preact-cli](https://github.com/preactjs/preact-cli/issues/1430)
  - `https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap`
  - `https://fonts.googleapis.com/css?family=Josefin+Sans:wght@400,700&display=swap`
- [Github Actions deploy Preactjs to Github Pages.md at master·flameddd/blog](https://github.com/flameddd/blog/blob/master/2019-12-11%EF%BC%9AGithub%20Actions%20deploy%20Preactjs%20to%20Github%20Pages.md)
  - edit `package.json`, add `build:gh` command and define path variable
  - edit GitHub Actions yaml file, change from `build` to `build:gh`
  - edit `src/manifest.json`, change icons src from `/assets/...` to `./assets/...`
  - create `preact.config.js`, detect env to decide whether use path variable
  - add `/src/baseroute.js`, path component for using
  - edit `/src/components/app.js`, import path component

## Author

- GitHub - [strike2834](https://www.your-site.com)
