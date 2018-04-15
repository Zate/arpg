FROM golang:1.6
MAINTAINER Michał Knapik <michal.knapik@u2i.com>

RUN wget --quiet --output-document=dumb-init.deb \
      https://github.com/Yelp/dumb-init/releases/download/v1.1.3/dumb-init_1.1.3_amd64.deb && \
  dpkg --install dumb-init.deb && \
  rm dumb-init.deb

COPY docker/backend/entrypoint.sh /
RUN chmod +x /entrypoint.sh

VOLUME "$GOPATH/src/arpg"

WORKDIR $GOPATH/src/arpg

EXPOSE 8080

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD /entrypoint.sh
