#!/usr/bin/env bash

set -e
set -o pipefail
set -v

echo "stackbit-build.sh: start build"

# fetch data from DatoCMS through datocms-pull
(cd apps/client/home && npx @stackbit/datocms-pull --ssg gatsby --datocms-access-token $DATOCMS_ACCESS_TOKEN)


# build site
yarn nx build client-home --configuration=production  --prefixPaths

echo "stackbit-build.sh: finished build"
