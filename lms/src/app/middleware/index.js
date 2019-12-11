module.exports = {
    signup: require ('./signup'),
    allowRole: require ('./allowRole'),
    login: require ('./login'),
    book: {
        post: require ('./book/post'),
        tag: require ('./book/tag')
    },
    user: {
        update: require ('./user/update')
    },
    student: {
        update: require ('./student/update')
    }
}