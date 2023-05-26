Installation and setup
    npx create-react-app my-app
    yarn add @material-ui/core @material-ui/icons  [for the icons]
    yarn add react-router-dom [for routing]
    yarn add react-vertical-timeline-component [for vertical timeline feature]

Using git pages
    yarn add -D gh-pages  // github pages
    add to pakage json 
        "homepage": "http://mohitbish.github.io/React-portfolio/",
        add to scripts
            "predeploy": "npm run build",
            "deploy": "gh-pages -d build",

    to deploy on github 
        npm run deploy