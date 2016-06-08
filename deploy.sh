#!/bin/sh

echo "BEGIN."
pwd
ls
chmod 600 deploy_static.pem
ssh -i deploy_static.pem formidable@192.241.218.94 "rm -rf static/victory-docs-staging && mkdir static/victory-docs-staging"
scp -i ./deploy_static.pem -rp ./build/* formidable@192.241.218.94:/home/formidable/static/victory-docs-staging
# ssh -i ./deploy_static.pem formidable@192.241.218.94 "rm -rf static/victory && mv static/victory-docs-staging/ static/victory"
echo "DEPLOYED."
exit 0
