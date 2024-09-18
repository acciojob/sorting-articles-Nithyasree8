//your JS code here. If required.


const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to remove ignored words from band names
function cleanBandName(name) {
    return name.toLowerCase().replace(/^(a |an |the )/i, '');
}

// Sort the bands array using the cleaned names
bands.sort((a, b) => cleanBandName(a).localeCompare(cleanBandName(b)));

// Create list items for each band and append to #band ul
const bandList = document.getElementById('band');
bands.forEach((band) => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});