#!/bin/bash
# ======================================================
# Portfolio Stack Switch Script
# Usage: ./switch.sh [go|astro]
# ======================================================

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

show_help() {
    echo ""
    echo "Portfolio Stack Switch Script"
    echo "=============================="
    echo "Usage: ./switch.sh [go|astro]"
    echo ""
    echo "  go    - Run Go Fiber server (port 3000)"
    echo "  astro - Run Astro dev server (port 4321)"
    echo ""
}

start_go() {
    echo ""
    echo "========================================"
    echo "Starting Go Fiber Server..."
    echo "========================================"
    echo ""
    cd "$SCRIPT_DIR/go-fiber"
    
    # Check if go is installed
    if ! command -v go &> /dev/null; then
        echo "Error: Go is not installed or not in PATH"
        exit 1
    fi
    
    echo "Running: go run main.go"
    echo "Server will start at: http://localhost:3000"
    echo ""
    go run main.go
}

start_astro() {
    echo ""
    echo "========================================"
    echo "Starting Astro Dev Server..."
    echo "========================================"
    echo ""
    cd "$SCRIPT_DIR/astro"
    
    # Check if node_modules exists
    if [ ! -d "node_modules" ]; then
        echo "Installing dependencies..."
        npm install
    fi
    
    echo "Running: npm run dev"
    echo "Server will start at: http://localhost:4321"
    echo ""
    npm run dev
}

# Main
case "$1" in
    go)
        start_go
        ;;
    astro)
        start_astro
        ;;
    *)
        show_help
        exit 1
        ;;
esac
