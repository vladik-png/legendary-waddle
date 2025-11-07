package log

import "fmt"

func Failed(message string) {
	fmt.Println("Failed in ", message)
}
