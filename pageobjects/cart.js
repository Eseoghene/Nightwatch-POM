var cartCommands = {
  verifyiteminCart:function(term,option,qty){
    return this.waitForElementVisible('@bagHeader', 5000)
    .assert.containsText('@bagHeader','SHOPPING BAG')
    .assert.containsText('@prodinCart',term)
    .assert.containsText('@prodoption',option)
    .assert.containsText('@cartQty',qty)

  },

  updateCart:function(qty,value){
      var cartsub = '$'+value
    return this.waitForElementVisible('@editLink', 5000)
    .click('@editLink')
    .waitForElementVisible('@qtyBox', 5000)
    .setValue('@qtyBox',qty)
    .waitForElementVisible('@updateBtn', 5000)
    .click('@updateBtn')
    .waitForElementVisible('@editLink', 5000)
    .assert.containsText('@subbagValue',cartsub)
    .assert.containsText('@cartQty',qty)
  },
  verifypromo:function(subbagValue,bagValue,promoText,promoValue){
    return this.waitForElementVisible('@subbagValue', 5000)
    .assert.containsText('@subbagValue',subbagValue)
    .assert.containsText('@bagValue',bagValue)
    .assert.containsText('@promoText',promoText)
    .assert.containsText('@promoValue',promoValue)
  },
  verifypromonotapplied:function(subbagValue,bagValue){
    return this.waitForElementVisible('@subbagValue', 5000)
    .assert.containsText('@subbagValue',subbagValue)
    .assert.containsText('@bagValue',bagValue)
    .assert.elementNotPresent('@promoText')
    .assert.elementNotPresent('@promoValue')
  }
}


  module.exports = {
    commands:[cartCommands],
    elements:{
      bagHeader: {selector: '//*[@id="content"]/div/div/h2',locateStrategy: 'xpath'},
      prodinCart: {selector: '//*[@id="cart-items-list"]',locateStrategy: 'xpath'},
      prodoption: {selector: '//*[@id="cart-items-list"]',locateStrategy: 'xpath'},
      editLink: {selector: '//a[contains(text(),"Edit")]',locateStrategy: 'xpath'},
      qtyBox:{selector:'//*[@id="cart-items-list"]/div/div/div[1]/div[2]/div/div/div/div[2]/input',locateStrategy: 'xpath'},
      updateBtn: {selector:'//button[contains(text(),"Update")]',locateStrategy: 'xpath'},
      subbagValue:{selector: '//*[@id="summary"]/div/div[1]/div[1]/span',locateStrategy: 'xpath' },
      bagValue:{selector:'//*[@id="summary"]/div/div[4]/div/h2',locateStrategy: 'xpath'},
      promoText:{selector: '//*[@id="summary"]/div/div[1]/div[2]/small',locateStrategy: 'xpath'},
      promoValue:{selector: '//*[@id="summary"]/div/div[1]/div[2]/span',locateStrategy: 'xpath'},
      cartQty:{selector:'//*[@id="summary"]/div/div[1]/div',locateStrategy: 'xpath'}

    }
  }
