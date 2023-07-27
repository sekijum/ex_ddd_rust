SHELL=/bin/bash

COMPOSE_FILE = compose.dev.yaml

.PHONY: init
init:
	make clean
	docker-compose -f $(COMPOSE_FILE) build --no-cache --build-arg BUILDKIT_INLINE_CACHE=1

.PHONY: clean
clean:
	docker-compose -f $(COMPOSE_FILE) down --volumes

.PHONY: down
down:
	docker-compose -f $(COMPOSE_FILE) down

.PHONY: bash
bash:
	docker-compose -f $(COMPOSE_FILE) run --rm --service-ports api bash

.PHONY: prune
prune:
	docker-compose -f $(COMPOSE_FILE) down
	docker system prune -a
