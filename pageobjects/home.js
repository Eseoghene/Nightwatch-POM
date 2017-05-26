var homeCommands = {
  findHostess:function(term){
    return this.waitForElementVisible('@hostesslink', 2000)
    .click('@hostesslink')
    .waitForElementVisible('@searchBox', 3000)
    .setValue('@searchBox', term)
    .waitForElementVisible('@selectedHostess', 3000)
    .click('@selectedHostess')
    .waitForElementVisible('@hostessText', 3000)
    .assert.containsText('@hostessText', term)
    .click('@startshoppBtn')
    .waitForElementVisible('@hostessHeader',3000)
    .assert.containsText('@hostessHeader', term)

  }

};

module.exports = {
  url: 'https://www.keepcollective.com/',
  commands:[homeCommands],
  elements:{
     hostesslink: { selector: '//*[@id="header"]/div/div[3]/div/div[1]/div/div/div[1]/a[1]',locateStrategy: 'xpath'},
     searchBox: { selector: '//*[@id="select-hostess-and-dsr"]/div[1]/div/div/div[1]/div/div/input',locateStrategy: 'xpath'},
     selectedHostess: { selector: '//*[@id="select-hostess-and-dsr"]/div[1]/div/div/div[2]/ul/li/div',locateStrategy: 'xpath'},
     hostessText: {selector: '//*[@id="select-hostess-and-dsr"]/h4',locateStrategy: 'xpath'},
     startshoppBtn: {selector: 'button[id=start-shopping]'},
     hostessHeader: {selector: '//*[@id="header"]/div/div[3]/div/div[1]/div/div/div[2]/span[1]/a',locateStrategy: 'xpath'}



  }
}
