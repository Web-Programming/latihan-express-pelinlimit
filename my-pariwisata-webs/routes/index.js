var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Halaman Beranda' });
});

router.get('/paketwisata', function(req, res, next) {
  let listpaketwisata = [
    {'nama' : 'wisata menara eiffel' , 'harga' : 250000},
    {'nama' : 'wisata punti kayu' , 'harga' : 200000},
    {'nama' : 'wisata jakabaring' , 'harga' : 100000}
  ]
  res.render('paketwisata', { 
    title: 'Paket Wisata' ,
    listpaketwisata: listpaketwisata
  });
});

router.get('/paketwisata', function(req, res, next) {
  res.render('paketwisata', { title: 'Paket Wisata' });
});


router.get('/orderpaket', function(req, res, next){
  res.render('orderpaket', {title: 'Form Pemesanan Paket'});
});

router.get('/orderdetail', function(req, res, next){
  res.render('orderdetail', {title: 'Detail Pemesanan Paket'});
});

module.exports = router;