package main

import "github.com/gramkow-exe/not-a-pad/app"

func main() {
	err := app.SetupAndRunApp()
	if err != nil {
		panic(err)
	}
}
