package main

import (
	"govue-tiktok-downloader/routes"

	"github.com/gin-gonic/gin"
)

// Router -
var Router *gin.Engine

func main() {
	routes.CreateURLMappings()
	routes.Router.Run(":8000")
}
