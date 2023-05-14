const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    myMobile: '480px',
    mobile500px: '500px',
    mobile600px: '600px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

const sizeMax = {
    mobileS: '374px',
    mobileM: '424px',
    mobileL: '479px',
    myMobile: '499px',
    mobile500px: '599px',
    mobile600px: '767px',
    tablet: '1023px',
    laptop: '1439px',
    laptopL: '2559px',
    desktop: '2560px'
}

const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    myMobile: `(min-width: ${size.myMobile})`,
    mobile500px: `(min-width: ${size.mobile500px})`,
    mobile600px: `(min-width: ${size.mobile600px})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};

const deviceMax = {
    mobileS: `(max-width: ${sizeMax.mobileS})`,
    mobileM: `(max-width: ${sizeMax.mobileM})`,
    mobileL: `(max-width: ${sizeMax.mobileL})`,
    myMobile: `(max-width: ${sizeMax.myMobile})`,
    mobile500px: `(max-width: ${sizeMax.mobile500px})`,
    mobile600px: `(max-width: ${sizeMax.mobile600px})`,
    tablet: `(max-width: ${sizeMax.tablet})`,
    laptop: `(max-width: ${sizeMax.laptop})`,
    laptopL: `(max-width: ${sizeMax.laptopL})`,
    desktop: `(max-width: ${sizeMax.desktop})`,
    desktopL: `(max-width: ${sizeMax.desktop})`
};

export {device, deviceMax}