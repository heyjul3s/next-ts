if [[ -f ".nvmrc" ]]; then
  echo "'.nvmrc' found. Installing Yarn dependencies";
  source $HOME/.nvm/nvm.sh;
  nvm use && yarn;
else
  echo "No .nvmrc found. Switching to default system Node version and proceeding with Yarn dependencies installation.";
  nvm use default && yarn;
fi;