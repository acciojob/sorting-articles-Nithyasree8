//your JS code here. If required.
const bands = [
        'The Plot in You',
        'The Devil Wears Prada',
        'Pierce the Veil',
        'Norma Jean',
        'The Bled',
        'Say Anything',
        'The Midway State',
        'We Came as Romans',
        'Counterparts',
        'Oh, Sleeper',
        'A Skylit Drive',
        'Anywhere But Here',
        'An Old Dog'
    ];

    // Function to sort the bands
    function sortBands(bands) {
        return bands.sort((a, b) => {
            const removeWords = (str) => str.replace(/\b(a|an|the)\b/gi, '').trim();
            const bandA = removeWords(a).toLowerCase();
            const bandB = removeWords(b).toLowerCase();
            return bandA.localeCompare(bandB);
        });
    }

    // Append sorted bands to the unordered list
    const sortedBands = sortBands(bands);
    const bandList = document.getElementById('band');

    sortedBands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        bandList.appendChild(li);
    });