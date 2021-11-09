DIR=/var/www/metropaccess-visualiser-frontend
yarn install
yarn build
rsync -avh --delete ./build/ max@metropaccess.max.kalhama.fi:$DIR/public_html/