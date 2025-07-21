package model

type Note struct {
	Id         int     `json:"id"`
	Content    *string `json:"content"`
	Type 	   string  `json:"type"`
	Link	   string  `json:"link"`
}

type NewNotePayload struct {
	Link 	   string `json:"link"`
	Type 	   string `json:"type"`
}

type UpdateContentPayload struct {
	Id 	       int    `json:"id"`
	Content    string `json:"content"`
}
