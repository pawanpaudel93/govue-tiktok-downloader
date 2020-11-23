package main

import (
	"govue-tiktok-downloader/routes"
	"os"
)

func main() {
	port := "8000"
	if os.Getenv("PORT") != "" {
		port = os.Getenv("PORT")
	}
	routes.CreateURLMappings()
	routes.Router.Run(":" + port)
}
