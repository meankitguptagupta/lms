module.exports = {
    home: require ('./home'),
    signup: require ('./signup'),
    login: require ('./login'),
    user: {
        profile: require ('./user/profile'),
        update: require ('./user/update'),
        list: require ('./user/list')
    },
    books: {
        add: require ('./book/post'),
        list: require ('./book/list'),
        update: require ('./book/update')
    },
    student: {
        patch: require ('./student/patch'),
        view: require ('./student/view'),
        update: require ('./student/update')
    },
    register: {
        post: require ('./register/post.js'),
        returnBook: require ('./register/return-book.js'),
        list: require ('./register/list.js'),
    },
    genres: require('./public/genere'),
    academic_types: require('./public/academy_types'),
    roles: require('./public/roles')
}