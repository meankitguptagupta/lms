module.exports = {
    home: require ('./home'),
    signup: require ('./signup'),
    login: require ('./login'),
    profile: require ('./profile'),
    books: {
        add: require ('./book/post'),
        list: require ('./book/list')
    }
}