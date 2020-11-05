---
path: "/portfolio/eloqua"
type: "frontend mobile backend production"
order: 100
name: "Eloqua Speech Player"
intro: "Listen to great speeches on your smartphone. Porting in progress from PWA to React Native App."
pics:
  [
    ../../images/projects/eloqua/explore.png,
    ../../images/projects/eloqua/transcript.png,
    ../../images/projects/eloqua/speakers.png,
    ../../images/projects/eloqua/categories.png,
    ../../images/projects/eloqua/playlist.png,
    ../../images/projects/eloqua/notification.png,
  ]
madeFor: "Open Source"
links: [{ label: "Original PWA version", url: "//speech-pwa.web.app" }]
code: { label: "GitHub", url: "//github.com/ilovepku/EloquaNative" }
desc: "Creator/senior developer of React PWA Eloqua, made in collaboration with my protégée—junior developer Layla. Highlights: full player control from notification, many-to-many relationship data on Firestore, filter thru speaker/topic/keyword, playlist, favlist, loop, playback speed switch, dark mode."
highlights:
  [
    "Porting in progress to React Native + Typescript w/ PostgresSQL + GraphQL on Hasura Cloud",
    "Multilayered many-to-many relationship data stored on Firebase Firestore for real-time content updates",
    "Full player control from notification with Media Session API",
    "State management with React Hooks and Context API (replacing Redux)",
    "Speeches filterable by speaker, theme, or just a custom keyword",
    "Common features like playlist, favorites list, loop toggle, playback speed switch, dark mode",
  ]
techs:
  [
    "ReactNative",
    "ReactNavigation",
    "Redux",
    "PostgreSQL",
    "GraphQL",
    "TypeScript",
    "Tailwind",
    "React",
    "Firebase",
    "JavaScript",
    "MaterialUI",
  ]
testimonial:
  {
    text: "Sean introduced me to the wonderful world of coding and provided constant support in the building of Eloqua, a speech listening PWA of our joint effort. Sean's mentoring and assistance were instrumental in my landing my first developer job in Germany.",
    avatar: ../../images/layla.jpg,
    person: "Layla",
    position: "Junior Software Developer",
    company: "Futurice GmbH",
  }
featured: true
---

## Table of Contents

- [Introduction](#introduction)
- [Speeches View](#speeches-view)
- [Playing Bar](#playing-bar)
- [Script View](#script-view)
- [Playlist View](#playlist-view)
- [Favorites View](#favorites-view)
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

## Playlist View

Showing the queued speeches to be played.
You can remove any/all speech(es) from the playlist or add one/all to the favorites list.

![Playlist](../../images/projects/eloqua/pwa-playlist.png "Playlist")

## Favorites View

List of your favorite speeches list for easier access.

![Favorites View](../../images/projects/eloqua/favorites.png "Favorites View")

## Notification Controls

View, play/resume, rewind/fast forward, go to previous/next from the notification bar or even lockscreen of your smartphone with Eloqua running in background.

![Notification Controls](../../images/projects/eloqua/media-session.png "Notification Controls")

## Dark Mode

Don’t forget to take better care of your eyes. Toggle dark mode in the Settings View for the optimal bedtime reading experience.

![Dark Mode](../../images/projects/eloqua/dark-mode.png "Dark Mode")

## Acknowledgment

Eloqua is a collaborative effort between myself, as creator-director-senior developer, and my protégée, as junior developer [Layla](https://github.com/laylapku/).

##### Third-party projects that helped

- [react](https://github.com/facebook/react/)
- [react-player](https://github.com/facebook/react/)
- [material-ui](https://github.com/mui-org/material-ui)
- [redux](https://github.com/reduxjs/redux)
