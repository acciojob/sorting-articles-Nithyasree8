//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Remove ignored words and sort bands
const sortedBands = bands.sort((a, b) => {
    const ignoredWords = ['a', 'an', 'the'];
    const cleanA = a.toLowerCase().split(' ').filter(word => !ignoredWords.includes(word)).join(' ');
    const cleanB = b.toLowerCase().split(' ').filter(word => !ignoredWords.includes(word)).join(' ');
    return cleanA.localeCompare(cleanB);
});

// Populate the unordered list
const bandList = document.getElementById('bands');
sortedBands.forEach((band) => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
})

