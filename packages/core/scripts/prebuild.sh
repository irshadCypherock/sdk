#!/bin/bash

set -e

if [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "win32" ]]; then
  protoc --plugin=protoc-gen-ts_proto=$(pwd)/node_modules/.bin/protoc-gen-ts_proto.cmd --ts_proto_out=./src/encoders/proto/generated ../../submodules/common/proto/*.proto -I../../submodules/common/proto
else
  protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src/encoders/proto/generated ../../submodules/common/proto/*.proto -I../../submodules/common/proto
fi
