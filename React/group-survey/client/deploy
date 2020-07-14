#!/bin/sh
ssh root@178.128.164.125<<EOF
   cd /git/ReactSideProjects/React/group-survey/client
   git pull
   sudo npm install
   sudo npm run build
   sudo mv build html && sudo rm -rf var/www/bsprojects.co.uk/html/* && sudo mv html/* /var/www/bsprojects.co.uk/html
   exit
EOF