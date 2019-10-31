---
path: "/portfolio/eloqua"
type: "frontend backend production"
order: 101
name: "Eloqua Speech Listening App"
intro: "Listen to great speeches on your smartphone."
pics:
  [
    ../../images/projects/eloqua/speaker-list.png,
    ../../images/projects/eloqua/category-list.png,
    ../../images/projects/eloqua/filtered-by-ctg.png,
    ../../images/projects/eloqua/script.png,
  ]
madeFor: "Open Source"
url: "//speech-pwa.web.app"
code: "//github.com/laylapku/eloqua-pwa"
desc: "Creator/senior developer of React PWA Eloqua, made in collaboration with my protégée—junior developer Layla. Highlights: full player control from notification, many-to-many relationship data on Firestore, filter thru speaker/topic/keyword, playlist, favlist, loop, playback speed switch, dark mode."
highlights:
  [
    "Multilayered many-to-many relationship data stored on Firebase Firestore for real-time content updates",
    "Full player control from notification with Media Session API",
    "State management with React Hooks and Context API (replacing Redux)",
    "Speeches filterable by speaker, theme, or just a custom keyword",
    "Common features like playlist, favorites list, loop toggle, playback speed switch, dark mode",
  ]
techs: ["React", "Firebase", "Redux", "MaterialUI"]
testimonial:
  {
    text: "Sean opened the doors for me to pursue my new career in web development. He’s been providing constant support in the process of building Eloqua - an app of our joint effort. I’m impressed by the flexibility and tenacity he showed throughout this journey. He has the patience to clarify my silly doubts as a beginner, and the ingenuity to tackle tricky problems. Eloqua would be impossible without Sean’s close instruction and supervision.",
    avatar: ../../images/layla.jpg,
    person: "Layla",
    position: "Web Developer",
    company: "Part-time Freelancer",
  }
featured: true
---

## Table of Contents

- [Introduction](#introduction)
- [Speeches Views](#speeches-views)
- [Playing Bar](#playing-bar)
- [Script Views](#script-views)
- [Playlist Views](#playlist-views)
- [Favorites Views](#favorites-views)
- [Notification Controls](#notification-controls)
- [Dark Mode](#dark-mode)
- [Acknowledgment](#acknowledgment)

## Introduction

The Eloqua app offers, in both audio and text, great speeches in history from 30+ public figures, including politicians, entrepreneurs, authors, celebrities, etc., covering a wide range of themes.

## Speeches View

Find a speech by its speaker, theme or do a keyword search, click on title to play it or add it to playlist queue or favorites list.

![Speeches View](../../images/projects/eloqua/speech-list.png "Speeches View")

## Playing Bar

Skip Next, Pause/Resume, Go to Playlist, or View Speech Script from the Playing Bar which is present most of the times.

![Playing Bar](../../images/projects/eloqua/playingbar.png "Playing Bar")

## Script View

Click the title area of the playing bar to view the script text of currently playing speech.
Extended control features like loop toggle and playback speed switch are also in this view.

![Script View](../../images/projects/eloqua/script.png "Script View")

## Playlist View:

Showing the queued speeches to be played.
You can remove any/all speech(es) from the playlist or add one/all to the favorites list.

![Playlist](../../images/projects/eloqua/playlist.png "Playlist")

## Favorites View:

List of your favorite speeches list for easier access.

![Favorites View](../../images/projects/eloqua/favorites.png "Favorites View")

## Notification Controls

View, play/resume, rewind/fast forward, go to previous/next from the notification bar or even lockscreen of your smartphone with Eloqua running in background.

![Notification Controls](../../images/projects/eloqua/media-session.png "Notification Controls")

## Dark Mode:

Don’t forget to take better care of your eyes. Toggle dark mode in the Settings View for the optimal bedtime reading experience.

![Dark Mode](../../images/projects/eloqua/dark-mode.png "Dark Mode")

## Acknowledgment

Eloqua is a collaborative effort between myself, as creator-director-senior developer, and my protégée, as junior developer [Layla](https://github.com/laylapku/).

##### Libraries

- [react](https://github.com/facebook/react/)
- [react-player](https://github.com/facebook/react/)
- [material-ui](https://github.com/mui-org/material-ui)
- [redux](https://github.com/reduxjs/redux)
