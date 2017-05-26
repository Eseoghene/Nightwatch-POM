# Nightwatch-POM
1. Install Chromebrowser
2. Open Terminal/Windows command prompt
3. Run
```
npm install -g nightwatch
```
4. Navigate to repository on terminal
5. Run
```
npm install chromedriver
```

6. Run
```
nightwatch
```

# BUG Noticed while writing tests
7. Cart Crashes once in every three test runs

# THINGS TO NOTE
8. Website is not developed with UI Level automation in mind as it is hard to locate elements and build relative xpaths.
I would suggest most elements be given a name or id as applicable.
9. Nightwatch has a limitation that does not allow you define dynamic selectors easily. I would suggest switch to webdriver.io or Protractorjs to really create a fully reusable framework
