# Build Stage
FROM golang:1.23-alpine AS builder

WORKDIR /app

# Copy go mod and sum files
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy source code
COPY . .

# Build the application
RUN go build -o server .

# Runtime Stage
FROM alpine:latest

WORKDIR /root/

# Copy binary from builder
COPY --from=builder /app/server .
# Copy static files
COPY --from=builder /app/public ./public

# Expose port
EXPOSE 3000

# Command to run
CMD ["./server"]
