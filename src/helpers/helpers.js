export function formatNumber(number) {
    const numberStr = String(number);
    const numberArr = [];

    numberArr.push(numberStr.slice(0, 3));
    numberArr.push(numberStr.slice(3, 5));
    numberArr.push(numberStr.slice(5));

    return numberArr.join('-');
}

export function deformatNumber(number) {
    return number.replaceAll('-', '');
}

export function capitalizeLetters(str) {
    const words = str.split(' ');

    return words
        .filter(word => word)
        .map(word => {
            return word[0].toUpperCase() + word.substring(1);
        })
        .join(' ');
}

export function getUpdateContact(prevContact, newContact) {
    const updatedContact = {};

    // If name was changed
    if (prevContact.name !== newContact.name) {
        updatedContact.name = newContact.name;
    }
    // if number was changed
    if (prevContact.number !== newContact.number) {
        updatedContact.number = newContact.number;
    }

    return updatedContact;
}

export function getToastStyles() {
    return {
        toastOptions: getToastOptions(),
        gutter: 36,
        containerStyle: getToastContainerStyles(),
    };
}

function getToastOptions() {
    return {
        style: {
            color: 'aliceblue',
            boxShadow: '10px 10px 40px darkslategrey, -10px -10px 40px #ffffff',
        },
        success: {
            style: {
                background: 'darkslategrey',
            },
            iconTheme: {
                primary: 'darkseagreen',
                secondary: 'aliceblue',
            },
        },
        error: {
            style: {
                background: 'darkred',
            },
            iconTheme: {
                primary: 'orangered',
                secondary: 'aliceblue',
            },
        },
    };
}

function getToastContainerStyles() {
    return {
        position: 'absolute',
        top: 100,
        right: 24,
    };
}
