SHELL=/bin/bash

.PHONY: init
init:
	make clean
	docker-compose build --no-cache --build-arg BUILDKIT_INLINE_CACHE=1

.PHONY: clean
clean:
	docker-compose down --volumes

.PHONY: bash
bash:
	docker-compose run --rm --service-ports api sh
