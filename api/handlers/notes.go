package handlers

import (

	"github.com/gofiber/fiber/v2"
)

func HelloWorld(context *fiber.Ctx) error {
	return context.Status(200).JSON("Hello World!")
}
