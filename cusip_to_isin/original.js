// Initialize the Check object
const Check = {};

// Define the cusipChars string
const cusipChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*@#";

// Populate the Check object
for (let i = 0; i < cusipChars.length; i++) {
    const char = cusipChars[i];
    Check[char] = [
        (i % 10) + Math.floor(i / 10),
        (2 * i % 10) + Math.floor(2 * i / 10)
    ];
}

function cusipChecksum(cusip) {
    if (!cusip || cusip.length !== 9) {
        return false;
    }

    let sum = 0;
    for (let i = 0; i < 8; i++) {
        const char = cusip[i];
        const value = Check[char] ? Check[char][i % 2] : 0;
        sum += value;
    }

    const checkDigit = (10 - (sum % 10)) % 10;
    return checkDigit;
}

function convertCusipToIsin(cusip, countryCode) {
    if (!cusip || cusip.length !== 9) {
        document.getElementById('result').innerText = '...';
        return;
    }

    const checksum = cusipChecksum(cusip);
    const givenChecksum = parseInt(cusip[8]);
    const isValid = checksum === givenChecksum;

    if (!isValid) {
        const message = `Invalid checksum: ${cusip[8]} should be ${checksum}`;
        document.getElementById('result').innerText = message;
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