package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/pawanpaudel93/go-tiktok-downloader/tiktok"
)

type Profile struct {
	URL string `json:"url"`
}

// DownloadPhoto - Download Tiktok Profile Profile Picture
func DownloadPhoto(url string) (string, error) {
	profile := tiktok.Profile{URL: url}
	err := profile.FetchInfo()
	if err != nil {
		return "", err
	}
	profileJSON, err := profile.GetProfileInfo()
	return profileJSON, err
}

func DownloadTiktokPP(ctx *gin.Context) {
	var profile Profile
	ctx.BindJSON(&profile)
	profileJSON, err := DownloadPhoto(profile.URL)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error":       "Getting Profile Picture failed. Try again!!!",
			"profileInfo": "",
		})
	} else {
		ctx.JSON(http.StatusOK, gin.H{
			"error":       false,
			"profileInfo": profileJSON,
		})
	}
}
