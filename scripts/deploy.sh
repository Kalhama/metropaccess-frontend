DIR=/var/www/metropaccess.max.kalhama.fi
yarn install
yarn build
rsync -avh --delete ./build/ max@kuube.fi:$DIR/public_root/