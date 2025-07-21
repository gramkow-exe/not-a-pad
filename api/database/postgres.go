package database

import (
	"context"
	"fmt"
	"log"

	"github.com/jackc/pgx/v5/pgxpool"
)

var (
	host     = ""
	port     = 5432
	user     = ""
	password = ""
	dbname	 = ""
	DB     *pgxpool.Pool
)

func loadCredencials() {
	host = "localhost"
	port = 5432
	user = "kayn"
	password = "saveTh&M0l3s"
	dbname = "not-a-pad-db"
}

func connect() {
	// Connect to de database
	connStr := fmt.Sprintf("postgres://%s:%s@%s:%d/%s", user, password, host, port, dbname)
	var err error
	DB, err = pgxpool.New(context.Background(), connStr)
	if err != nil {
		log.Fatalf("Failed to connect: %v", err)
	}
}

func testConnection() {
	fmt.Printf("host= %s port= %d user= %s password= %s \n", host, port, user, password)
	PrintQueryResult(DB, "select * from notes")
}

func LoadDatabase() {
	loadCredencials()
	connect()
	testConnection()
}
