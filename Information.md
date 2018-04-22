# Information
This guide is meant to give a detailed description on the technology stack used and an indepth explanation for anything notable.

## Table of Contents

  1. [Skadoosh](#skadoosh)
      1. [Why?](#why?)
  2. [Technology Stack](#technology-stack)
      1. [Front-end](#front-end)
      2. [Back-end](#back-end)
  3. [Server hosting](#server-hosting)
  4. [Conventions](#conventions)
  5. [Version Control](#version-control)
  6. [Editors](#editors)
  7. [Terminals](#terminals)
  8. [Communication](#communication)
  9. [Mockup](#mockup)
  10. [Task Board](#task-board)
  11. [Documents](#documents)
  12. [Development Process](#development-process)

## Skadoosh
Skadoosh is a web application built on top of the UCSC's class searching API with support for tracking major and GE requirements, scheduling classes, login system, class and professor rating system with user reviews. 

Skadoosh's foremost purpose is to help the user build their schedule faster and view it visually better than the current way in UCSC's portal.

### Why?
The school's class search API at https://pisa.ucsc.edu/class_search/ has a few problems. First, it does not allow the user to compare their schedule or build their schedule, which can waste the user's time if they do not plan carefully. Second, it loses the previous format data when a user attempts to return to the search form, either through the web browser's back functionality or a return to the original url (https://pisa.ucsc.edu/class_search/). 

The user interface in MyUCSC portal that has a schedule builder is unintuitive, buggy, and something from the early 2000s. The portal overall has an incredibly high delay (in seconds) when navigating the site, submitting data, or using any basic functionality really.

## Technology Stack
### Front-end
The front-end will be constructed using React as the main front-end framework. We will use Redux as our state manager.

### Back-end
The back-end will be use the Django framework, repurposed into a REST API. PostgreSQL will handle the client's data, credentionals, and sessions.

## Server hosting
We will use two servers to host our web application. One server will handle the client interface (front-end: ui). The second server will be our REST API. We host these two servers on Heroku, a cloud platform.

## Conventions
For the front-end/js/react, we will follow [Airbnb's conventions.](https://github.com/airbnb/javascript/tree/master/react) 

For the back-end/python, we will follow [PEP 8 -- Style Guide for Python Code.](https://www.python.org/dev/peps/pep-0008/) 

## Version Control
We use git and its popular associated web solution Github to handle our version control 

Github: https://github.com/hueyjj/Skadoosh

We highly recommend Mac and Windows users to use [Source Tree](https://www.sourcetreeapp.com/) for interfacing with git.

## Editors
We recommend Visual Studio code, Atom, and Sublime Text to develop Skadoosh. We strongly feel that the communities supporting these editors makes Skadoosh development a first-class citizen: javascript and jsx support, built-in terminals, web previews.

## Terminals
We recommend to use the built-in terminal support in [Editors](#Editors). Otherwise [git-bash](https://git-scm.com/downloads) is the next recommendation.

## Communication
We will communicate using mobile phone texting, Discord (VoIP application), and in-person meetings.

## Mockup
We will use our rudimentary paint skill to create a sketch of our idea. Then, use Figma (a web application for mockups) to create a substantiated version of our sketches. 

## Task Board
The tasks will be split up and available on the shared Trello, a web-based project management application.

## Documents
Available under the shared google drive folder.

## Development Process
We use the Scrum process, an agile framework, for this software development.
