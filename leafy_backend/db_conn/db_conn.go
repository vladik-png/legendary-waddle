package DB_CONN

import (
	"database/sql"
	"fmt"
)

type Connection struct {
	DB *sql.DB
}

func (con *Connection) ConnectToDB() {
	connStr := ""
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		fmt.Println("Cannot connect to DB")
		return
	}
	con.DB = db
}

var Conn Connection
