echo off
cls

del /F /S /Q app_update\css
del /F /S /Q app_update\fonts
del /F /S /Q app_update\img
del /F /S /Q app_update\js
del /F /S /Q app_update\media
del /F /S /Q app_update\app_update.wgt
del /F /S /Q app_update\eruda.js
del /F /S /Q app_update\favicon.ico
del /F /S /Q app_update\index.html

xcopy /e dist app_update /EXCLUDE:exclude.txt
