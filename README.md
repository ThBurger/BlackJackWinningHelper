# BlackJackWinningHelper

ionic start BlackJackWinningHelper sidemenu --type=angular --capacitor

ionic serve

PS C:\Users\Tburger\VisualStudioProjects\BlackJackWinningHelper\src\app> ionic g page support


- Run ionic serve within the app directory to see your app in the browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config --copy

Android (SDK muss installiert sein):
ionic capacitor add android  (only once)
sdk.dir=C:/Users/Tburger/AppData/Local/Android/Sdk
ionic capacitor sync android
cd android
./gradlew assembleDebug

(\BlackJackWinningHelper\android\gradle.properties) -> end of file: org.gradle.jvmargs=-XX\:MaxHeapSize\=256m -Xmx256m

ionic capacitor copy android

apk in:
android/app/build/outputs/apk/debug/app-debug.apk