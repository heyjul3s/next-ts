#!/bin/sh

if [ -f .env ]; then \
  echo "An .env file is found. Removing '.env'..."
  rm .env; \
else 
  echo "No .env file is found. Aborting .env file removal process."
fi; \