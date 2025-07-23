package database

import (
	"context"
	"fmt"
	"log"
	"os"
	"github.com/jackc/pgx/v5/pgxpool"
)

var (
	host     = ""
	port     = ""
	user     = ""
	password = ""
	dbname	 = ""
	DB     *pgxpool.Pool
)

func loadCredencials() {
	host = os.Getenv("DB_HOST")
	port = os.Getenv("DB_PORT")
	user = os.Getenv("DB_USER")
	password = os.Getenv("DB_PASSWORD")
	dbname = os.Getenv("DB_NAME")
}

func connect() {
	// Connect to de database
	connStr := fmt.Sprintf("postgres://%s:%s@%s:%s/%s", user, password, host, port, dbname)
	var err error
	DB, err = pgxpool.New(context.Background(), connStr)
	if err != nil {
		log.Fatalf("Failed to connect: %v", err)
	}
}

func testConnection() {
	fmt.Printf("host= %s port= %s user= %s password= %s \n", host, port, user, password)
	PrintQueryResult(DB, "select * from notes")
}

func LoadDatabase() {
	loadCredencials()
	connect()
	testConnection()
}
