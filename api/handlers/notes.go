package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gramkow-exe/not-a-pad/model"
	"github.com/gramkow-exe/not-a-pad/repository"
)

func CreateNote(context *fiber.Ctx) error {
	var newNote model.NewNotePayload
	if err := context.BodyParser(&newNote); err != nil {
		println("Error binding JSON:", err)
		return err
	}

	repository.CreateNote(newNote)
	return context.Status(201).JSON(newNote)
}

func GetNoteByLink(context *fiber.Ctx) error {
	link := context.Params("link")
	note, err := repository.GetNoteByLink(link)

	if err != nil {
		context.Status(404).JSON(fiber.Map{"message": "Note not found"})
		return err
	}

	return context.Status(200).JSON(note)
}

func UpdateNoteContent(context *fiber.Ctx) error {
	var payload model.UpdateContentPayload
	if err := context.BodyParser(&payload); err != nil {
		println("Error binding JSON:", err)
		return err
	}

	repository.UpdateContent(payload)
	return context.Status(200).JSON(fiber.Map{"message": "Successfully Updated!"})
}
