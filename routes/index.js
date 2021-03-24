const express = require('express');
const router = express.Router();



const listProduct = [
    {nom:'Snikers',price:1.2},
    {nom:'Mars',price:1.2},
    {nom:'Kinder Bueno',price:2},
    {nom:'Twix',price:2}
]

router.get('/', (req, res, next) => {
    res.status(200);
	 res.send('bonjour les gens');
});

router.get('/products/list', (req, res, next) => {
    res.status(200);
    res.json(listProduct);
});
router.post('/products/shop/', (req, res, next) => {
    console.log("en attente");
    console.log(req.query.name);
    console.log(req.query.surname);
    console.log();
    let panier = req.query.panier
    console.log(panier);
    let commande = {
        client:{name:req.query.name,surname:req.query.surname},
        panier:panier

    }
    res.json(commande);
    res.status(200);
});
router.post('/reseller/add-product/', (req, res, next) => {
    console.log(req.query.name);
    let product = {
        name: req.query.name,
        price:req.query.price,
        vendeur:req.query.nomVendeur
    }
    console.log("nom du produit : " + product.name);
    console.log("prix du produit : " +product.price);
    console.log("nom du vendeur : " +product.vendeur);
    listProduct.push(product);
    res.json(listProduct);
    res.status(200);
});

router.delete('/reseller/delete-product/', (req, res, next) => {
    console.log(req.query.name);
    let name = req.query.name;
    console.log(name);
    let index = listProduct.findIndex(function(elem) { 
        
        return name == elem.nom;
    }); 
    console.log(index);    
    listProduct.splice(index,1);
    res.json(listProduct);
    res.status(200);
});

module.exports = router;