# Google Maps Autocomplete

A small webpage that uses the Google Maps API to autocomplete any address inputted into the form. Uses Bootstrap styling and raw Javascript.

## Getting Your API Key

In order for the app to run, first go to the Google Cloud Console (https://console.cloud.google.com/project/_/apiui/apis/enabled) and create a new project.

On the Dashboard window of your newly created project, click the "Enable APIS and Services" button, and add the Places API to your project.

All that's left is to create your API key. Navigate to the Credentials tab of your project and click on Create Credentials > API Key.

## Inserting API Key Into the Project

In the script tag containing the Google Maps API on line 109 in index.html, replace the text "INSERT_KEY_HERE" with your API key. You're good to go!
