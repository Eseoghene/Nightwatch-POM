module.exports ={

'Verify Promotion not applied with Design Session but with insufficient value of items in bag' : function (client) {
  var homepage =client.page.home(),
  gallery=client.page.gallery(),
  product=client.page.product(),
  cart=client.page.cart(),
  prom=client.page.promotions();


  homepage.navigate();
  homepage.findHostess('ALLISON KELLMAN');
  gallery.navigatetoProduct('KEY FOB - BLACK/CHESTNUT');
  product.addtoCart('KEY FOB','1');
  product.viewCart('1')
  cart.verifyiteminCart('Key Fob','Black/Chestnut','1');
  prom.navigate()
  prom.navigatetoProduct('TRIPLE LEATHER BAND - TAN FAUX SUEDE/CHAMPAGNE LEATHER – SILVER')
  product.addtoCart('TRIPLE LEATHER BAND','2')
  product.viewCart('2')
  cart.verifyiteminCart('Triple Leather Band','Tan Faux Suede/Champagne Leather – Silver','2')
  cart.verifypromonotapplied('$74.00','$74.00')
  client.end();
  }
}
