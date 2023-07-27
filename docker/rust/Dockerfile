FROM rust:1.71.0 as develop

WORKDIR /work

# RUN sudo apt -update | apt install -y libpq-dev postgresql
RUN apt update

RUN cargo install diesel_cli --no-default-features --features postgres

CMD ["/bin/bash"]
