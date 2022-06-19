#!/bin/sh

NVM_DIR="$HOME/.nvm"

source $HOME/.nvm/nvm.sh

if [[ -f ".nvmrc" ]]; then
    nvm use && yarn remove $@
else
    nvm use default && yarn remove $@
fi



