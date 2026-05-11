FROM rust:1.80-slim as builder

WORKDIR /app
# Copy the entire workspace to build members
COPY . .

# Build both backend and cli
RUN cargo build --release --package txio-api --package txio

FROM debian:bookworm-slim
WORKDIR /app

# Install necessary runtime dependencies (like openssl if needed)
RUN apt-get update && apt-get install -y ca-certificates libssl3 && rm -rf /var/lib/apt/lists/*

# Copy backend binary
COPY --from=builder /app/target/release/txio-api /app/api
# Copy CLI binary to system PATH so TerminalService can find it
COPY --from=builder /app/target/release/txio /usr/local/bin/txio

# Copy config if needed
COPY --from=builder /app/backend/api/.env /app/.env

EXPOSE 3000
CMD ["./api"]
