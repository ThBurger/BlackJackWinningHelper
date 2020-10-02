# BlackjackWinHelper

ionic start BlackJackWinningHelper sidemenu --type=angular --capacitor

ionic serve

Android (SDK muss installiert sein):
ionic capacitor add android  (only once)
sdk.dir=C:/Users/Tburger/AppData/Local/Android/Sdk
ionic capacitor sync android
cd android
./gradlew assembleDebug --apk for testing
./gradlew bundleRelease --aab for release

(\BlackJackWinningHelper\android\gradle.properties) -> end of file: org.gradle.jvmargs=-XX\:MaxHeapSize\=256m -Xmx256m

ionic capacitor sync android (does two things)
OR
ionic capacitor copy android

apk in:
android/app/build/outputs/apk/debug/app-debug.apk

# update version code
Android - android/app/build.gradle (you're looking for the versionName variable)

# publish apk to play store
https://ionicframework.com/docs/v1/guide/publishing.html

# generate ic_launcher:
```
npx cap open android
```
rightclick on 'app' Folder -> New -> Image Assets -> icon auswählen -> next -> finish
all ic_launcher will be replaced

# generate splash.png
https://pgicons.abiro.com/
upload icon.png and click also for landscape
and replace all files