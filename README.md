# WaldoStreet

### About
#### Essentially GeoGuessr x Where's Waldo? We implemented Google Cloud's Google Map API to generate a random location within NYC, and a 2D Waldo will be placed in a random location within a _ radius. 

### How To Use
1. Clone the repo
2. cd WaldoStreet/templates
3. Edit waldo.html, replace "YOURKEY" with your Google Clouds API key. Make sure your API key has "Maps JavaScript API" and "Roads API" enabled
4. Open waldo.html

### Known Issues
1. Sometimes the Street View of a location becomes black.
2. Sometimes the Street View doesn't pop up.
#### In both scenarios, refresh the page until an image pops up again.

### Completed:
#### Sep 24: Implemented Google Maps JavaScript API and Roads API to generate a random location in NYC, and plop the user to the closest street near the random generated location.