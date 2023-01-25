FROM golang:1.19-alpine

ENV ROOTPATH=/go/src/app
ENV CGO_ENABLED 0
ENV GO111MODULE on

WORKDIR $ROOTPATH

RUN apk update && apk add git
