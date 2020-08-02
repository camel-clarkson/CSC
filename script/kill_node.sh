#!/bin/bash

me=$(whoami)
pid=$(ps aux | grep -E "$me.*[0-9][[:space:]]+node app.js" | tr -s ' '| cut -d ' ' -f 2)

echo "Killing node server with pid $pid"
kill $pid
