package __http__

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type ErrorResponse struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
}

type SuccessResponse struct {
	Code    int         `json:"code"`
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"`
}

func SendError(w http.ResponseWriter, errCode int) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(ErrorMessages[errCode].Code)
	json.NewEncoder(w).Encode(ErrorMessages[errCode])
	fmt.Println("SendError: ", ErrorMessages[errCode].Message)
}

func SendSuccess(w http.ResponseWriter, data interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(SuccessMessages[OK].Code)
	resp := SuccessResponse{
		Code:    SuccessMessages[OK].Code,
		Message: SuccessMessages[OK].Message,
		Data:    data,
	}
	fmt.Println("SendSuccess: ", resp.Message)
	json.NewEncoder(w).Encode(resp)
}

const (
	ErrUserNotFound = iota + 1
	ErrInvalidPass
	ErrInternal
	ErrBadRequest
	ErrNotFound
	OK
)

var ErrorMessages = map[int]ErrorResponse{
	ErrBadRequest:   {Code: 400, Message: "Bad request"},
	ErrUserNotFound: {Code: 401, Message: "User not found"},
	ErrInvalidPass:  {Code: 403, Message: "Invalid password"},
	ErrNotFound:     {Code: 404, Message: "Not found"},
	ErrInternal:     {Code: 500, Message: "Internal server error"},
}

var SuccessMessages = map[int]SuccessResponse{
	OK: {Code: 200, Message: "Correct", Data: nil},
}
