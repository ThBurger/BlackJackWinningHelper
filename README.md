
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

ionic capacitor sync android (does two things)
OR
ionic capacitor copy android

for splash screen repair copy following into app/res/values/styles.xml:
```
    <style name="AppTheme.NoActionBarLaunch" parent="AppTheme.NoActionBar">
        <item name="android:background">@drawable/splash</item>
        <item name="android:windowFullscreen">true</item>
        <item name="android:windowContentOverlay">@null</item>
        <item name="android:windowIsTranslucent">true</item>
```

apk in:
android/app/build/outputs/apk/debug/app-debug.apk

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