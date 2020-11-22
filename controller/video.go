package controller

import (
	"net/http"
	"os"
	"path"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/pawanpaudel93/go-tiktok-downloader/tiktok"
)

var BaseDIR string

type Video struct {
	URL string `json:"url"`
}

func init() {
	BaseDIR, _ = os.Getwd()
	BaseDIR = path.Join(BaseDIR, "static/video")
}

// DownloadVideo - Download Tiktok video
func DownloadVideo(url string) (string, string, error) {
	var videoPath, videoInfo string
	video := tiktok.Video{URL: url, BaseDIR: BaseDIR}
	err := video.FetchInfo()
	if err == nil {
		videoPath, err = video.Download()
		videoInfo, _ = video.GetInfo()
	}
	return videoPath, videoInfo, err
}

func DownloadTiktokVideo(ctx *gin.Context) {
	var video Video
	ctx.BindJSON(&video)
	videoPath, videoInfo, err := DownloadVideo(video.URL)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error":     "Video download failed. Try again!!!",
			"fName":     "",
			"videoInfo": "",
		})
	} else {
		splitPath := strings.Split(videoPath, "/")
		ctx.JSON(http.StatusOK, gin.H{
			"error":     false,
			"fName":     splitPath[len(splitPath)-1],
			"videoInfo": videoInfo,
		})
	}
}

func GetVideo(ctx *gin.Context) {
	videoName := ctx.Param("name")
	ctx.Header("Content-Description", "File Transfer")
	ctx.Header("Content-Transfer-Encoding", "binary")
	ctx.Header("Content-Disposition", "attachment; filename="+videoName)
	ctx.Header("Content-Type", "video/mp4")
	ctx.File(path.Join(BaseDIR, videoName))
}
