# personal_website

# to do
- give images explicit height on project page
- download fonts

## install 
`npm install -g mustache`

## Compliling project Templates
```
mustache -p navPartial.mustache projectsView.json projectsTemplate.mustache > ./../projects.html
mustache -p navPartial.mustache projectsView.json index.mustache > ./../index.html
mustache -p navPartial.mustache projectsView.json about.mustache > ./../about.html
mustache -p navPartial.mustache projectsView.json contact.mustache > ./../contact.html
```

