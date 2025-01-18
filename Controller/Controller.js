

const getHomePage = (req, res) => {
    res.render('portfolio', { title: 'HomePage' });
}

const getAboutPage = (req, res) => {
    res.render('./About/About_me', { title: 'About Me', About: 'about' });
}

const getProjectsPage = (req, res) => {
    res.render('projects', { title: 'Projects' });
}

const getContactPage = (req, res) => {
    res.render('contact', { title: 'Contact' });
}

module.exports = {
    getHomePage,
    getAboutPage,
    getProjectsPage,
    getContactPage
}
