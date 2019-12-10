module.exports = {
    home: require ('./home'),
    signup: require ('./signup'),
    login: require ('./login'),
    user: {
        profile: require ('./user/profile'),
        update: require ('./user/update'),
    },
    books: {
        add: require ('./book/post'),
        list: require ('./book/list'),
        update: require ('./book/update')
    },
    student: {
        patch: require ('./student/patch')
    }
}