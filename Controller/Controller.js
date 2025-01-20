const sendEmail = require('../Utilities/Send_email');



const getHomePage = (req, res) => {
    res.render('portfolio', { title: 'HomePage' });
}

const postFormData = (req, res) => {
    const { name, email, message } = req.body;

    console.log(`Form data: Name: ${name}, Email: ${email}, Message: ${message}`);
    sendEmail.sendEmail(name, email, message);
    res.redirect('/');
}

// const getAboutPage = (req, res) => {
    
//     res.render('./About/About_me', { title: 'About Me', About: 'about' });
// }

// const getProjectsPage = (req, res) => {
//     res.render('projects', { title: 'Projects' });
// }

// const getContactPage = (req, res) => {
//     res.render('contact', { title: 'Contact' });
// }

module.exports = {
    getHomePage,
    postFormData
    // getAboutPage,
    // getProjectsPage,
    // getContactPage,
   
}
