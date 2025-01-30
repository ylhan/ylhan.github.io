function convertCusipToIsin(cusip, countryCode) {
    if (!cusip || cusip.length !== 9) {
        document.getElementById('result').innerText = '...';
        return;
    }

    // Convert any letters to numbers by taking the ASCII code of the capital letter and subtracting 55
    const allNumCusip = Array.from(cusip).map(c => !isNaN(c) ? c : (c.toUpperCase().charCodeAt(0) - 55).toString()).join('');

    // The country code letters will be converted to numbers (e.g., US -> 3028, CA -> 1310)
    const countryPrefix = Array.from(countryCode).map(c => (c.toUpperCase().charCodeAt(0) - 55).toString()).join('');

    const isinWithoutCheckDigit = countryPrefix + allNumCusip;

    // If the length of isinWithoutCheckDigit is even, then the second slice will contain the rightmost character and should be doubled
    const doubleFirstSlice = isinWithoutCheckDigit.length % 2 !== 0;

    const firstSliceInt = [];
    const secondSliceInt = [];

    for (let idx = 0; idx < isinWithoutCheckDigit.length; idx++) {
        let convertedInt = parseInt(isinWithoutCheckDigit[idx]);

        // Split into even and odd index groups
        if (idx % 2 === 0) {
            if (doubleFirstSlice) {
                convertedInt *= 2;
            }
            firstSliceInt.push(convertedInt);
        } else {
            if (!doubleFirstSlice) {
                convertedInt *= 2;
            }
            secondSliceInt.push(convertedInt);
        }
    }

    // Next, add up the individual digits in these slices (i.e. [1, 5, 14] would be 1 + 5 + 1 + 4)
    const sumDigits = (numbers) => numbers.reduce((sum, num) => sum + (num >= 10 ? 1 + (num % 10) : num), 0);

    const totalSum = sumDigits(firstSliceInt) + sumDigits(secondSliceInt);

    const checkDigit = (10 - (totalSum % 10)) % 10;

    const isin = `${countryCode}${cusip}${checkDigit}`;

    document.getElementById('result').innerText = `ISIN: ${isin}`;
}

document.getElementById('cusipInput').addEventListener('input', function (e) {
    const cusip = e.target.value;
    const countryCode = document.getElementById('countrySelect').value;
    if (cusip.length === 9) {
        convertCusipToIsin(cusip, countryCode);
    } else {
        document.getElementById('result').innerText = '...';
    }
});

document.getElementById('countrySelect').addEventListener('change', function (e) {
    const cusip = document.getElementById('cusipInput').value;
    if (cusip.length === 9) {
        convertCusipToIsin(cusip, e.target.value);
    }
});