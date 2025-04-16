# Weather App

This is a simple Weather App that fetches and displays the current weather information for a specified location using the WeatherAPI. The app allows users to search for a location and view details such as temperature, location name, date and time, and weather condition.


## Features
- Displays the current temperature, location, date and time, and weather condition.
- Allows users to search for weather information for any location.
- Dynamically updates the weather details without reloading the page.


## Technologies Used
- **HTML**: For the structure of the web page.
- **CSS**: For styling the web page (linked as `style.css`).
- **JavaScript**: For fetching and displaying weather data dynamically.
- **WeatherAPI**: To fetch real-time weather data.



## How It Works
1. The app initializes with a default location (`Dallas`) and fetches its weather data.
2. Users can search for a new location using the search bar.
3. The app fetches weather data for the entered location and updates the displayed details dynamically.


## Key JavaScript Functions
1. **`fetchResults(targetLocation)`**:
   - Fetches weather data from the WeatherAPI for the specified location.
   - Extracts details such as temperature, location name, date and time, and weather condition.
   - Calls `updateDetails()` to update the UI.

2. **`updateDetails(temp, locationName, time, condition)`**:
   - Updates the DOM elements with the fetched weather details:
     - Temperature
     - Location name
     - Date and time
     - Weather condition

3. **`searchForLocation(e)`**:
   - Handles the form submission event.
   - Prevents the default form behavior (page reload).
   - Fetches weather data for the location entered in the search bar.



## API Endpoint
The app uses the following WeatherAPI endpoint:

http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=LOCATION&aqi=no

Replace `YOUR_API_KEY` with your actual WeatherAPI key.


## How to Run
1. Clone the repository to your local machine.
2. Open the `index.html` file in a browser.
3. Enter a location in the search bar and click the "Search Button" to view the weather details for that location.



## File Structure
weatherApp/ ├── index.html # The main HTML file ├── style.css # The CSS file for styling ├── script.js # The JavaScript file for functionality



## Example API Response
```json
{
  "location": {
    "name": "London",
    "localtime": "2025-04-14 15:30"
  },
  "current": {
    "temp_f": 59.2,
    "condition": {
      "text": "Mist"
    }
  }
}





---

### Notes
```markdown
## Notes
- Ensure you replace the placeholder API key in the `script.js` file with your own WeatherAPI key.
- The app assumes the HTML structure matches the selectors in the JavaScript file.



## License
This project is open-source and available under the MIT License.


