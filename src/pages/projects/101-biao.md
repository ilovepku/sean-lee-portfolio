---
path: "/portfolio/biao"
type: "frontend mobile production"
order: 101
name: "BIAO! StoryMap"
intro: "Follow locations of historical events on a modern map with timeline."
pics:
  [
    ../../images/projects/biao/timeline.png,
    ../../images/projects/biao/details.png,
    ../../images/projects/biao/strategic.png,
    ../../images/projects/biao/legends.png,
    ../../images/projects/biao/landscape.png,
  ]
madeFor: "Open Source"
url: "//drive.google.com/file/d/15FlTY9Qpx-oG2Xn5OY0JTtEx5Sp5mfGA/view?usp=sharing"
code: "//github.com/ilovepku/biao"
desc: "Creator of 'BIAO!: StoryMap', a React Native mobile app to help people follow stories that highlight the locations of a series of events, built on Expo with TypeScript. Highlights: close integration of Google Maps SDK, GeoJSON data, modal and tab views; marker clustering to improve visibility and performance; drawer navigation; dark mode."
highlights:
  [
    "Universal native apps for Android and iOS built on the Expo platform with TypeScript and React Native",
    "Close integration of Google Maps SDK, GeoJSON geographic data format, modal and tab views, to produce interactive maps with timeline",
    "Map marker clustering to improve visibility and performance",
    "Drawer navigation",
  ]
techs: ["Expo", "ReactNative", "Redux", "ReactNavigation", "TypeScript"]
testimonial: { text: "" }
featured: true
---

# Biao! StoryMap

Biao! is a free app to help people follow stories that highlight the locations of a series of events.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Floating Buttons](#floating-buttons)
  - [Map Type Switch](#map-type-switch)
  - [Map Marker Filter](#map-marker-filter)
  - [Timeline View](#timeline-view)
  - [Open Drawer Menu](#open-drawer-menu)
- [Drawer Menu](#drawer-menu)
  - [Map View](#map-view)
  - [Legend View](#legend-view)
  - [About View](#about-view)
  - [Dark Mode switch](#dark-mode-switch)
- [Other Features](#other-features)
- [Roadmap](#roadmap)
- [Libraries](#libraries)
- [Contributing](#contributing)
- [License](#license)

## Installation

Fork and clone the repository, then run:

```bash
# npm
npm install
```

## Usage

For development, run:

```bash
# npm
expo start
```

For production, run:

```bash
# npm
expo build:android
# or
expo build:ios
```

### Floating Buttons

![Floating Buttons](../../images/projects/biao/fabs.jpg "Floating Buttons")
The 4 floating buttons on the map screen, in clockwise from the top-left, are:

#### Map Type Switch

Same map types as in Google Maps:

- Roadmap view
- Satellite view
- Terrain view
- Reset map viewpoint to default

![Map Type Switch](../../images/projects/biao/maptype-switch.jpg "Map Type Switch")

#### Map Marker Filter

Show / hide types of markers on map

- City Marker Filter
- Battle Marker Filter

![Map Marker Filter](../../images/projects/biao/marker-cluster-and-filter.jpg "Map Marker Filter")

#### Open Timeline Modal

![Timeline View](../../images/projects/biao/timeline-view.jpg "Timeline View")

- Click on a date to jump to the associated event, swipe on the date bar to jump to an earlier or later time range
- Swipe left or right on the content to view the previous or next event
- Drag the handle up / down to enter / exit full screen reading mode

![Full Screen Reading Mode](../../images/projects/biao/full-screen-dark-mode-link.jpg "Full Screen Reading Mode")

### Open Drawer Menu

![Drawer Menu](../../images/projects/biao/drawer.jpg "Drawer Menu")

#### Map View

#### Legend View

![Legend View](../../images/projects/biao/legend.jpg "Legend View")

#### About View

#### Dark Mode switch

turn on / off dark mode

![Dark Mode](../../images/projects/biao/full-screen-dark-mode-link.jpg "Dark Mode")

## Other features

- Map marker clustering

![Map Marker Clustering](../../images/projects/biao/marker-cluster-and-filter.jpg "Map Marker Clustering")

- Landscape mode

![Landscape Mode](../../images/projects/biao/landscape.jpg "Landscape Mode")

## Roadmap

- More events
- Move data to cloud
- Dynamic area coloring based on timeline
- Marching (& sailing) routes on maps
- Add tourist attractions
- More accurate area coloring for factions

## Libraries

Third-party projects that helped

- [expo](https://github.com/expo/expo)
- [redux](https://github.com/reduxjs/redux)
- [@react-navigation](https://github.com/react-navigation/react-navigation)
- [react-native-maps](https://github.com/react-native-community/react-native-maps)
- [react-native-modalize](https://github.com/jeremybarbet/react-native-modalize)
- [react-native-tab-view](https://github.com/react-native-community/react-native-tab-view)
- [react-native-map-clustering](https://github.com/venits/react-native-map-clustering)
- [native-base](https://github.com/GeekyAnts/NativeBase)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)
