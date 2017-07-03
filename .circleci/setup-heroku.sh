#!/bin/bash
git remote add heroku https://git.heroku.com/cci-demo-walkthrough.git
wget https://cli-assets.heroku.com/branches/stable/heroku-linux-amd64.tar.gz
mkdir -p /usr/local/lib /usr/local/bin
tar -xvzf heroku-linux-amd64.tar.gz -C /usr/local/lib
ln -s /usr/local/lib/heroku/bin/heroku /usr/local/bin/heroku

cat > ~/.netrc << EOF
machine api.heroku.com
  login aboulay950@gmail.com
  password e3af5d6b-f2b3-4e6a-8e39-83ede2218806
