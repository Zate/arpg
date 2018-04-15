#/bin/sh
go get
go build
go install

/go/bin/arpg_utils backend 100 50ms
