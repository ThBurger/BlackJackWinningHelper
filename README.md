# BlackJackWinningHelper

ionic start BlackJackWinningHelper sidemenu --type=angular --capacitor

ionic serve

PS C:\Users\Tburger\VisualStudioProjects\BlackJackWinningHelper\src\app> ionic g page support


Android (SDK muss installiert sein):
ionic capacitor add android  (only once)
ionic capacitor copy android
cd android
./gradlew assembleDebug

(\BlackJackWinningHelper\android\gradle.properties) -> end of file: org.gradle.jvmargs=-XX\:MaxHeapSize\=256m -Xmx256m

apk in:
android/app/build/outputs/apk/debug/app-debug.apk