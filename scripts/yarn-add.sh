#!/bin/sh

NVM_DIR="$HOME/.nvm"

source $HOME/.nvm/nvm.sh

if [[ -f ".nvmrc" ]]; then
    nvm use && yarn add $@
else
    nvm use default && yarn add $@
fi



