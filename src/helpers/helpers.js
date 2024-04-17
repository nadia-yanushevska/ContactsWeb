export function formatNumber(number) {
    const numberStr = String(number);
    const numberArr = [];

    numberArr.push(numberStr.slice(0, 3));
    numberArr.push(numberStr.slice(3, 5));
    numberArr.push(numberStr.slice(5));

    return numberArr.join('-');
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
        right: '-80%',
    };
}
