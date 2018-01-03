# ND prototypes

Run `gulp build` then `gulp deploy` to publish on github pages (can't chain synchonously deploy taks).
Check gulpfile.js for any options.

Tip : use `php -S localhost:8081` to run standalone php when developing

## Create new version of prototypes

Create a new branch.
Edit gulpfile.js and replace "vX" in it "X" being the number of the version.
Edit the root index.php file and place a link to your version.
Commit and push your branch to remote.
Gulp build and deploy.
