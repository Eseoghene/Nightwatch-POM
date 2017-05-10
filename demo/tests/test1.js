module.exports = {
  'Demo test Google' : function (client) {
    var homepage =client.page.home();
    homepage.navigate();

     homepage.entersearchTerm('nightwatch')
      homepage.submit()
      homepage.waitForElementVisible('@searchResults', 2000)
      homepage.assert.containsText('@searchResults', 'Night Watch')
      client.end();
  }
};
