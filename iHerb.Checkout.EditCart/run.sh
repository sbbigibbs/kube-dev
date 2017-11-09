#!/bin/sh

if [ -z "$IS_DEV"  ] || [ "$IS_DEV" = "false" ] 
then
    node ./index
else
    npm run dev
fi
