package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gramkow-exe/not-a-pad/handlers"
)


func SetupRoutes(app *fiber.App) {
	app.Get("/", handlers.HelloWorld)
}
