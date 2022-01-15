let autocomplete;
let addressField = document.getElementById("inputAddress");
let cityField = document.getElementById("inputCity");
let postalField = document.getElementById("inputPostalCode");
let provenceField = document.getElementById("inputProvince");
let countryField = document.getElementById("inputCountry");


function initAutocomplete() {
    console.log("initAutocomplete");

    autocomplete = new google.maps.places.Autocomplete(
        addressField,
        {
            types: ['address'],
            componentRestrictions: { country: ['CA'] },
            fields: ['name', 'address_components', 'geometry']
        }

    );

    autocomplete.addListener('place_changed', onPlaceChanged);

    google.maps.event.addDomListener(addressField, 'keydown', event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            cityField.focus();
        }
    });
}


function onPlaceChanged() {
    const place = autocomplete.getPlace();

    console.log(place);

    addressField.value = place.name;

    place.address_components.forEach(component => {
        if (component.types.includes('locality')) {
            cityField.value = component.long_name;
        }
        if (component.types.includes('administrative_area_level_1')) {
            provenceField.value = component.long_name;
        }
        if (component.types.includes('postal_code')) {
            postalField.value = component.long_name;
        }
        if (component.types.includes('country')) {
            countryField.value = component.long_name;
        }
    });
}