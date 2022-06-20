#!/bin/sh

if [[ -d "./node_modules" && -f "yarn.lock" ]]; then
  echo "Directory 'node_modules' and 'yarn.lock' found. Removing...";
  rm -rf node_modules && rm yarn.lock
else
  echo "Directory 'node_modules' and 'yarn.lock' not found. Aborting node modules and yarn.lock removals.";
fi;