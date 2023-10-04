@echo off

title MSPFA Portal

echo This bat file automates creating a http localhost server using the Node.js http module then opens the newly created localhost in your browser. 
echo See below for more info on installing Node.js and the http module.
echo https://jasonwatmore.com/post/2016/06/22/nodejs-setup-simple-http-server-local-web-server
echo -------------
echo !!!!!!!!!!!!!!!!!!!!!!!!!!
echo This must stay within the collections folder or it will not open properly!!
echo Do not close this window until you are done with the server or the collection will not work!
echo !!!!!!!!!!!!!!!!!!!!!!!!!!
echo -------------
echo Executing http-server -p 8000
echo Starting up http://localhost:8000/

start "" http://localhost:8000/
http-server -p 8000