#!/bin/sh

HELPER_DIR="$(dirname -- "$0")"
if [ "$HELPER_DIR" = "." ]; then
  HELPER_DIR=""
fi

command_exists () {
  command -v "$1" >/dev/null 2>&1
}

if command_exists sh; then
  :
else
  echo "sh is required to run Husky hooks" >&2
  exit 1
fi

if [ -z "$CI" ]; then
  export HUSKY=1
fi

# Node is required to execute lint-staged when using the package.json configuration.
if ! command_exists node; then
  echo "Node.js is required to run Husky hooks" >&2
  exit 1
fi
