package router

import (
	"github.com/gofiber/fiber/v2"

	"github.com/gramkow-exe/not-a-pad/handlers"
)


func SetupRoutes(app *fiber.App) {
	app.Post("/notes", handlers.CreateNote)
	app.Get("/notes/:link", handlers.GetNoteByLink)
	app.Put("/notes", handlers.UpdateNoteContent)
}
