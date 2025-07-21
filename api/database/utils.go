package database

import (
	"context"
	"fmt"
	"log"

	"github.com/jackc/pgx/v5/pgxpool"
)

func PrintQueryResult(pool *pgxpool.Pool, query string) {
	rows, err := pool.Query(context.Background(), query)
	if err != nil {
		log.Fatal("Query error:", err)
	}
	defer rows.Close()

	// Get the Fields
	fieldDescs := rows.FieldDescriptions()
	columns := make([]string, len(fieldDescs))
	for i, fd := range fieldDescs {
		columns[i] = string(fd.Name)
	}

	fmt.Println(columns)

	// Loop that calls the next row, if it ends returns false and close the loop
	for rows.Next() {
		// Get the list of values of the row
		values, err := rows.Values()
		if err != nil {
			log.Fatal("Error reading row:", err)
		}

		for i, val := range values {
			fmt.Printf("%s: %v\t", columns[i], val)
		}
		fmt.Println()
	}
}
