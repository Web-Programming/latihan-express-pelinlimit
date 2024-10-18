const index = (req, res) => {
    res.render("index", { title: 'Express MVC' }); 
}; 

//controller kontak
const kontak = (req, res) => {
    res.render("kontak", { title: 'Halaman kontak' });
}

const profil = (req, res) => {
    res.render("profil", { title: 'Halaman profil' });
}

module.exports = { index, kontak, profil }; 
