package repository

import (
	"context"
	"log"

	"github.com/gramkow-exe/not-a-pad/database"
	"github.com/gramkow-exe/not-a-pad/model"
)

func CreateNote(payload model.NewNotePayload) {
	query := `
		insert into notes
		("type", link)
		values ($1, $2)
		returning id
	`

	var insertedId int
	err := database.DB.QueryRow(
		context.Background(),
		query,
		payload.Type, payload.Link,
	).Scan(&insertedId)

	if err != nil {
		log.Fatal("Insert failed:", err)
	}
}

func GetNoteByLink(link string) (*model.Note, error) {
	query := `
		select id, content, type, link
	    from notes
		where link = $1
	`

	var note model.Note
	err := database.DB.QueryRow(
		context.Background(),
		query,
		link,
	).Scan(
		&note.Id, &note.Content, &note.Type, &note.Link,
	)

	if err != nil {
		if err.Error() == "no rows in result set" {
			return nil, nil
		}
		return nil, err
	}

	return &note, nil
}

func UpdateContent(payload model.UpdateContentPayload) {
	query := `
		update notes
		set content = $1
		where id = $2
	`

	_, err := database.DB.Exec(
		context.Background(),
		query,
		payload.Content,
		payload.Id,
	)

	println(payload.Id)

	if err != nil {
		log.Fatal("Update failed:", err)
	}
}
