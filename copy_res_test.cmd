echo off
cls

del /F /S /Q app_update_test\css
del /F /S /Q app_update_test\fonts
del /F /S /Q app_update_test\img
del /F /S /Q app_update_test\js
del /F /S /Q app_update_test\media
del /F /S /Q app_update_test\app_update_test.wgt
del /F /S /Q app_update_test\eruda.js
del /F /S /Q app_update_test\favicon.ico
del /F /S /Q app_update_test\index.html

xcopy /e test app_update_test /EXCLUDE:exclude.txt
