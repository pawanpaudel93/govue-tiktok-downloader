package routes

import (
	"govue-tiktok-downloader/controller"

	"github.com/gin-gonic/gin"
)

// Router -
var Router *gin.Engine

// CreateURLMappings -
func CreateURLMappings() {
	Router = gin.Default()
	api := Router.Group("/api")
	v1 := api.Group("/v1")
	{
		v1.POST("/video", controller.DownloadTiktokVideo)
		v1.GET("video/:name", controller.GetVideo)
		v1.POST("/photo", controller.DownloadTiktokPP)
	}
}
