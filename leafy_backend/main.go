package main

import DB_CONN "leafy/db_conn"

func main() {
	DB_CONN.Conn.ConnectToDB()
}
