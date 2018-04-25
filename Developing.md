# Setup
```sh
git clone https://github.com/hueyjj/skadoosh
cd skadoosh
npm install
```

# Building
Compiles the source into a static bundle to be served.
```sh
npm run build
```

# Serving
Serves a static bundle of js, html, css, asset files etc on a port.
```sh
npm run serve
```

# Testing locally (unoptimized build)
Starts the web app directly.
```sh
npm run dev
```

# Testing locally (optimized build)
This script combines npm run build and npm run serve. This is also the starting script on Heroku.
```sh
npm run prod
```

# Heroku
Enter username and password provided by the author.
```sh
heroku login
```

Simulate the web app locally.
```sh
heroku local web
```

Check the build log on Heroku's server.
```sh
heroku logs
```

# Git
Github remote
```
origin git@github.com:hueyjj/Skadoosh.git
```

Heroku remote
```
heroku https://git.heroku.com/skadoosh-115.git
```

Running `git remote -v` should yield an output like below
```sh
$ git remote -v
heroku https://git.heroku.com/skadoosh-115.git (fetch)
heroku https://git.heroku.com/skadoosh-115.git (push)
origin git@github.com:hueyjj/Skadoosh.git (fetch)
origin git@github.com:hueyjj/Skadoosh.git (push)
```

## Branching
Update remote branches to local branches
```sh
git fetch -v
```
Branch off of master always and do your work in your own branch
```sh
git checkout master
git branch YOUR_NAME/YOUR_FEATURE_OR_OBJECTIVE
git checkout YOUR_NAME/YOUR_FEATURE_OR_OBJECTIVE
```

Push to your branch only
```sh
git push origin YOUR_NAME/YOUR_FEATURE_OR_OBJECTIVE
```