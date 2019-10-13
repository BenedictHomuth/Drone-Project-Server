# Drone-Project Server

We need a server to save and retrieve data. This is a more or less lightweight approach to it.
Here you will find every written code by me in order to run the server and required services.

## Prerequisites:

In order to run the server and to modify the code you will need the following:
 
 - A installation of Node.js (My version is v10.16.3)
 - The Node-Package Express needs to be installed
 - The Node-Package NeDB needs to be installed
 - Your prefered code editor (eg. Visual Studio, etc.)




# Getting started

# Set-up

## Install and test Node.js

Go to there website, download and install the current version.

To check if Node.js was installed successfully, enter "node --version" into PowerShell.

If everything went fine you can see the version number.

## The "package.json" file

This file contains usefull information about the project and which dependencies exist.

First navigate to your project folder in PowerShell. (use the command cd)

Once you're there type in "npm init"

Enter the data.

After that the newly created file can be seen in your code editor if you opened the folder of your project.

## Install Express <img alt="npm" src="https://img.shields.io/npm/v/express">
In order to install "Express", a lightweight server implementation navigate to your project folder in PowerShell. 
Then enter "npm install express"

As soon as it is finished you will see that in the package.json file the "express dependencie" was added.

There is also a new folder "node_modules". It contains all the other dependencies express needs in order to run.


## Running it

In order to start express enter "node filename.filetype"

## Install NeDB <img alt="npm" src="https://img.shields.io/npm/v/nedb">
Enter "npm install nedb" in PowerShell while being in your project folder.
If the install was successfull the dependencie will be added in your package.json file.

