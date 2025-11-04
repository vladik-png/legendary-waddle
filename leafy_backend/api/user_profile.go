package api

import (
	"fmt"
	"leafy/db_conn"
)

type UserProfileData struct {
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Username  string `json:"username,omitempty"`
	ImageURL  string `json:"image_url"`
	Bio       string `json:"bio,omitempty"`
}

/*JoinedAt    string `json:"joined_at"`
IsFollowing bool   `json:"is_following,omitempty"`
Followers   int    `json:"followers"`
Followings  int    `json:"followings"`
Posts       int    `json:"posts"`*/

func GetUserProfileData(userID int) UserProfileData {
	var user UserProfileData

	err := db_conn.Conn.DB.QueryRow(
		`SELECT up.first_name, 
		up.last_name, 
		up.avatar_url, 
	  up.bio, 
		u.username, 
		FROM users u 
		JOIN user_profile up ON u.id = up.user_id 
		WHERE u.id = $1`, userID).Scan(&user.FirstName, &user.LastName, &user.ImageURL, &user.Bio)

	if err != nil {
		fmt.Println("GetUserProfileData query error: ", err)
		return UserProfileData{}
	}

	return user
}
