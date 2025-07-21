package app

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/gramkow-exe/not-a-pad/config"
	"github.com/gramkow-exe/not-a-pad/database"
	"github.com/gramkow-exe/not-a-pad/router"
)

func SetupAndRunApp() error {

	// Load Envs
	config.LoadENV()

	// Start Database
	database.LoadDatabase()

	// Create App
	app := fiber.New()

	// Attach Middlewares
	app.Use(recover.New())
	app.Use(cors.New())
	app.Use(logger.New(logger.Config{
		Format: "[${ip}]:${port} ${status} - ${method} ${path} ${latency}\n",
	}))

	// Setup Routes
	router.SetupRoutes(app)

	// Get Port and Start
	port := os.Getenv("PORT")
	if port == "" { port = "9090" }
	app.Listen(":" + port)

	return nil
}
