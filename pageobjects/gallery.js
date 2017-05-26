module.exports = {
  commands:[{navigatetoProduct:function(term){
    return this.waitForElementVisible('@shoplink', 3000)
    .click('@shoplink')
    .waitForElementVisible('@submenulink', 1000)
    .click('@submenulink')
    .waitForElementVisible('@productlink', 10000)
    .click('@productlink')
    }
  },
  {cusfunc:function(elementName,data){
      var abc ={}
      abc=this.elements[elementName.slice(1)];
      abc.selector=   abc.selector+"[contains(text(),'"+ data+"'])"
  return abc
    }
  }],
  elements:{
    productlink:{selector:'//a/figure/figcaption/div[1][contains(text(),"Key Fob - Black/Chestnut")]', locateStrategy: 'xpath'},
    shoplink:{selector:'//*[@id="nav_shop"]/span/span[1]', locateStrategy: 'xpath'},
    submenulink:{selector:'//*[@id="73"]', locateStrategy: 'xpath'}

  }
}
