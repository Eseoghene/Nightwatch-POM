var productCommands = {
  addtoCart:function(term,qty){
    this.waitForElementVisible('@productname', 3000)
    .assert.containsText('@productname',term)
    .click('@addtoBagBtn')
    .api.pause(3000)
    return this;

  },
  viewCart:function(qty){
    this.waitForElementVisible('@viewBaglink', 5000)
    .assert.containsText('@viewBaglink',qty)
    .click('@viewBaglink')
    .api.pause(5000)
    return this ;

  }

}


  module.exports = {
    commands:[productCommands],
    elements:{
      productname:{selector:'//*[@id="content"]/div/div[2]/div[2]/div[2]/h3', locateStrategy: 'xpath'},
      addtoBagBtn:{selector: 'button[id=view_cart]'},
      itemaddText: {selector: '//main[@id="content"]/div/div[1]', locateStrategy: 'xpath'},
      viewBaglink: {selector: 'a[id="nav-bag"]'},
    }
  }
