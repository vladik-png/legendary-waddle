package db_conn

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

type Connection struct {
	DB *sql.DB
}

func (con *Connection) ConnectToDB() {
	connStr := "postgresql://neondb_owner:npg_t9F4ORfcwaTH@ep-flat-tree-a9l3rpvf-pooler.gwc.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		fmt.Println("Cannot connect to DB")
		return
	}
	con.DB = db
}

var Conn Connection
