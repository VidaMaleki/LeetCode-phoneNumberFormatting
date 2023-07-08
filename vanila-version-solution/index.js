function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}

function phoneNumberFormatter() {
    const phoneNumberInput = document.getElementById('phone');
    const formattedInputValue = formatPhoneNumber(phoneNumberInput.value);
    phoneNumberInput.value = formattedInputValue;
}

const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', phoneNumberFormatter);