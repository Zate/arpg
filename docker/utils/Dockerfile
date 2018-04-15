FROM golang:1.6
MAINTAINER Michał Knapik <michal.knapik@u2i.com>

COPY docker/utils/entrypoint.sh /
RUN chmod +x /entrypoint.sh

VOLUME "$GOPATH/src/arpg"

WORKDIR $GOPATH/src/github.com/zate/arpg/arpg_utils

EXPOSE 8080

ENTRYPOINT /entrypoint.sh
