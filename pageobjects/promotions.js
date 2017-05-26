var promCommands =
{
  navigatetoProduct:function(term){
  return this.waitForElementVisible('@productlink', 10000)
  .click('@productlink')

  }
}


module.exports = {
  url: ' https://www.keepcollective.com/shop/collection/dseo',
  commands:[promCommands],
  elements:{
    productlink:{selector:'//a/figure/figcaption/div[1][contains(text(),"Triple Leather Band")]', locateStrategy: 'xpath'},
  }
}
