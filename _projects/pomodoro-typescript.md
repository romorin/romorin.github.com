---
layout: project
title: Pomodoro using Typescript
creation-date: 16/10/22
types: [freeCodeCamp,frontend]
techs: [html,css,typescript]
#todo
screenshots: [pomodoro-screenshot.png]
github: https://github.com/romorin/fcc-calc
codepen: http://codepen.io/romorin/pen/bZmXpg/
live: http://romorin.com/calc/
---

A simple pomodoro counter. It counts a certain work, then pause period. With a minimalist theme, it supports editing the length or the naming of each period, and a reset button.

Wanted to reuse the code of the Angular2 [version](projects/pomdoro-angular.html) using vanilla Typescript only. What is nice is that I have been able to reuse the core code from the last project, proving it was nicely designed. Had to add manual updating of the display after each events and attaching the buttons to the controller. The only changes I had to make was relating to the construction of the app. For now, I use manual dependency injection (I have also seen it called pure DI), and a possible update left is finding the way to make the core code IOC agnostic and be able to use the one we prefer without adding annotations everywhere. Fun question, and bought a book to learn more, [Dependency Injection in .NET](https://www.manning.com/books/dependency-injection-in-dot-net).
