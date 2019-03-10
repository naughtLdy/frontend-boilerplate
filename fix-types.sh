#!/bin/bash

DIRNAME=$(pwd)

# bashでalias機能をONにする
shopt -s expand_aliases

if sed --version 2>/dev/null | grep -q GNU; then
  alias sedi='sed -i '
else
  alias sedi='sed -i "" '
fi

# React Native declares global types that interfere with @types/node and lib dom.
rm -f $DIRNAME/node_modules/@types/react-native/globals.d.ts
sedi 's|/// <reference path="globals.d.ts" />||' $DIRNAME/node_modules/@types/react-native/index.d.ts

# Namespace the globals
sedi 's|declare global|declare namespace IgnoreTheseGlobals|' $DIRNAME/node_modules/@types/react-native/index.d.ts

