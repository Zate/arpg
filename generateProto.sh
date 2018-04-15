#!/bin/sh

protoc -I=protobuf --go_out=backend/pb protobuf/arpg.proto 
pbjs protobuf/arpg.proto > webroot/js/arpg_proto.json
