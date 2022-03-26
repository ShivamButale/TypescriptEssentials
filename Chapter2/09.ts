This video discusses the concept of computed properties.
This property allows to use important conventions each tim instead of concatenating for each member of the object.

const prefix = 'prefix_';
const support = {
    [prefix + 'Windows']: isSupported('Windows');
    [prefix + 'iOS']: isSupported('iOS');
    [prefix + 'Android']: isSupported('Android');
}

function isSupported(a) {
    return Math.random() >= 0.5;
}
