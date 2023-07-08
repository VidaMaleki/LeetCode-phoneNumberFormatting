function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 9)}`;
}

  // Test cases
test('Formats phone number with 10 digits', () => {
    const formattedNumber = formatPhoneNumber('1234567890');
    expect(formattedNumber).toBe('(123) 456-7890');
});

test('Formats phone number with 7 digits', () => {
    const formattedNumber = formatPhoneNumber('1234567');
    expect(formattedNumber).toBe('(123) 4567');
});

test('Formats phone number with 3 digits', () => {
const formattedNumber = formatPhoneNumber('123');
expect(formattedNumber).toBe('123');
});

test('Formats empty phone number', () => {
    const formattedNumber = formatPhoneNumber('');
    expect(formattedNumber).toBe('');
});