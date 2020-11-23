package routes

import (
	"fmt"
	"govue-tiktok-downloader/controller"
	"net/http"
	"os"
	"path"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// Router -
var Router *gin.Engine

type Config struct {
	Port         string
	StaticFolder string
	IndexFile    string
}

func (config *Config) SetDefault() {
	cwd, _ := os.Getwd()
	config.Port = "8000"
	config.StaticFolder = path.Join(cwd, "web/frontend/public/dist")
	fmt.Println(config.StaticFolder)
	config.IndexFile = path.Join(cwd, "web/frontend/public/dist/index.html")
}

// CreateURLMappings -
func CreateURLMappings() {
	config := Config{}
	config.SetDefault()
	Router = gin.Default()
	Router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:8080"},
		AllowHeaders: []string{"Content-Type"},
	}))
	Router.Static("/public/dist", config.StaticFolder)
	Router.LoadHTMLFiles(config.IndexFile)
	Router.GET("/", func(ctx *gin.Context) {
		ctx.HTML(http.StatusOK, "index.html", gin.H{
			"title": "Tiktok Downloader",
		})
	})
	Router.NoRoute(func(ctx *gin.Context) {
		ctx.HTML(http.StatusOK, "index.html", gin.H{
			"title": "Tiktok Downloader",
		})
	})
	api := Router.Group("/api")
	v1 := api.Group("/v1")
	{
		v1.POST("/video", controller.DownloadTiktokVideo)
		v1.GET("/video/:name", controller.GetVideo)
		v1.POST("/photo", controller.DownloadTiktokPP)
	}
}
