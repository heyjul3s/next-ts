SHELL           := /bin/bash
.DEFAULT_GOAL   := help
.SILENT:        #don't echo commands as they run

# ==============================================================================
-include .env
DIR             := ${CURDIR}
UNAME           := `uname`
UUID            := `id -u`
GUID            := `id -g`

ifeq (Darwin, $(findstring Darwin, $(shell uname -a)))
	PLATFORM    := OSX
	OPEN        := open
else
	PLATFORM    := Linux
	OPEN        := xdg-open
endif

# Declare Variables
ifdef APP_ENV
	ENV ?= ${APP_ENV}
else
	ENV ?= "local"
endif


.PHONY: help
help:   # List helpful commands
	echo ''
	echo 'Makefile for '
	echo ' make help                        show this information'
	echo ' make help:env                    list env:* commands'
	echo ''

help\:env:
	echo '## make env:* commands -'
	echo ' make env:clean                   delete .env file'
	echo ' make env:setup                   create .env file if it doesnt exist'
	echo ' make env:reset                   Recreate .env file from example'
	echo ''

help\:commands:
	echo '## Common make commands:'
	echo ' make setup                      installs dependencies and creates a default .env file'
	echo ''

# Setup ============================================================================

setup: 
	chmod -R +x ./scripts && make env\:reset && make nvm\:install

# ENV ==============================================================================

env\:help:
	make help:env

env\:clean:
	./scripts/env-clean.sh

env\:create:
	./scripts/env-create.sh

env\:reset:
	make env\:clean \
		env\:create

# NVM ==============================================================================

NVM := $(HOME)/.nvm/nvm.sh
IS_NVM_EXISTS := $(shell test -f $(NVM); echo $$?)

nvm\:install:
ifeq ($(IS_NVM_EXISTS), 0)
	echo "NVM found. Proceeding to install Yarn dependencies." && make yarn\:install
else
	echo "Aborting: NVM not found. Please install NVM and try again."
endif

nvm\:reset:
	ifeq ($(IS_NVM_EXISTS), 0)
		echo "NVM found. Proceeding to install Yarn dependencies." && make yarn\:clean && make yarn\:install
	else
		echo "Aborting: NVM not found. Please install NVM and try again."
	endif

# Yarn ==============================================================================

yarn\:install:
	./scripts/yarn-install.sh

yarn\:clean:
	./scripts/yarn-clean.sh
