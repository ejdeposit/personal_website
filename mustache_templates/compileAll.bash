#!/bin/bash

mustache -p navPartial.mustache projectsView.json projectsTemplate.mustache > ./../projects.html
mustache -p navPartial.mustache projectsView.json index.mustache > ./../index.html
mustache -p navPartial.mustache projectsView.json about.mustache > ./../about.html
mustache -p navPartial.mustache projectsView.json contact.mustache > ./../contact.html