var homeCommands = {
  entersearchTerm:function(term){
    return this.waitForElementVisible('@searchBox', 1000)
    .setValue('@searchBox', term)
  },
  submit:function(){
    this.waitForElementVisible('@searchButton', 1000)
    .click('@searchButton')
      .api.pause(3000);
      return this;
  }
};

module.exports = {
  url: 'http://google.com',
  commands:[homeCommands],
  elements:{
     homePage: { selector: 'body' },
     searchBox: { selector: 'input[type=text' },
     searchButton: { selector: 'button[name=btnG]' },
     searchResults: { selector: '#main' }


  }
}
