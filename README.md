# js.py.server.docker.node
This is a simple node.js site that serves a textbox. 
As with any node site, you can start it with `node .` when in the right folder.
The site will run on port 120, but can easily be changed on (line 43)[https://github.com/voidarclabs/js.py.server.docker.node/blob/main/index.js#L43]
The site will serve a textbox and a button, no external html required.
When the text is submitted it will be used to start a docker-compose file and use the textbox value as the variable `NUM`.
This can be any `docker-compose.yml` file, and if the `NUM` variable does not exist, will just start normally.
