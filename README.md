# WaldoStreet

### About
#### Essentially Where's Waldo? We implemented Google Cloud's Google Map API and Roads API to generate a random location within NYC, and a 2D Waldo will be placed in a random location within a certain radius. The goal is to find Waldo's exact location and click on him.

### How To Use
1. Clone the repo
2. cd WaldoStreet
3. Edit waldo.html, replace "YOUR_KEY" with your Google Clouds API key. Make sure your API key has "Maps JavaScript API" and "Roads API" enabled
4. Open waldo.html

### Known Issues
1. Sometimes the Street View of a location becomes black.
2. Sometimes the Street View doesn't pop up.
3. Sometimes Waldo will not appear on the map.
4. Sometimes the user gets placed inside of a building and cannot move.
#### In any of these scenarios, refresh the page until an image pops up again.

### Completed:
#### Sep 24: Implemented Google Maps JavaScript API and Roads API to generate a random location in NYC, and plop the user to the closest street near the random generated location.
#### Sep 25: Utilized Roads API and Google Maps JavaScript API to generate an interactable marker with an image of Waldo in a certain distance from the starting location. Added a reset button to bring user back to initial location in StreetView.