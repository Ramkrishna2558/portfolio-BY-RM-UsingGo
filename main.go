package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
)

func main() {
	// Initialize Fiber app
	app := fiber.New(fiber.Config{
		AppName: "Portfolio - Ramkrishna More",
	})

	// Middleware
	app.Use(logger.New())  // Request logging
	app.Use(recover.New()) // Panic recovery
	app.Use(cors.New())    // CORS

	// Static file serving
	app.Static("/", "./public")

	// API Routes (Example)
	app.Get("/api/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"status": "active",
			"system": "all systems nominal",
		})
	})

	// Start server on port 3000
	log.Fatal(app.Listen(":3000"))
}
