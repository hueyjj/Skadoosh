# Skadoosh

For team members, refer to [Information.md](https://github.com/hueyjj/Skadoosh/blob/master/Information.md) and [Developing.md](https://github.com/hueyjj/Skadoosh/blob/master/Developing.md) as the main guides.


## Installation
```sh
git clone https://github.com/hueyjj/skadoosh
cd skadoosh
npm install
```
Then
```sh
npm run dev
```
or 
```sh
npm run serve
```

Access the application at https://localhost:3000

## Server
Skadoosh is meant to be used in conjunction with [MangoMountain](https://github.com/hueyjj/MangoMountain), a django server. Please the instructions there to setup the server.

## Skadoosh
Skadoosh is a web application built on top of the UCSC's class searching API with support for tracking major and GE requirements, scheduling classes, login system, class and professor rating system with user reviews. 

Skadoosh's foremost purpose is to help the user build their schedule faster and view it visually better than the current way in UCSC's portal.

### Why?
The school's class search API at https://pisa.ucsc.edu/class_search/ has a few problems. First, it does not allow the user to compare their schedule or build their schedule, which can waste the user's time if they do not plan carefully. Second, it loses the previous format data when a user attempts to return to the search form, either through the web browser's back functionality or a return to the original url (https://pisa.ucsc.edu/class_search/). 

The user interface in MyUCSC portal that has a schedule builder is unintuitive, buggy, and something from the early 2000s. The portal overall has an incredibly high delay (in seconds) when navigating the site, submitting data, or using any basic functionality really.

## Documentation
Documentation can be found locally when the repo is cloned. The index.html can be found at Skadoosh/docs/index.html. Please use a webbrowser to view the html contents.

## Screenshots
Homepage
![Homepage](https://raw.githubusercontent.com/hueyjj/Skadoosh/master/screenshots/Homepage.PNG)

Signup
![Signup](https://raw.githubusercontent.com/hueyjj/Skadoosh/master/screenshots/Signup.PNG)

Calendar
![Calendar](https://raw.githubusercontent.com/hueyjj/Skadoosh/master/screenshots/Calendar.PNG)

Review
![Review](https://raw.githubusercontent.com/hueyjj/Skadoosh/master/screenshots/Review.PNG)

Search
![Search](https://raw.githubusercontent.com/hueyjj/Skadoosh/master/screenshots/Search.PNG)