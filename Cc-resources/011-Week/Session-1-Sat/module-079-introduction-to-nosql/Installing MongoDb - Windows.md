1. Open an admin Powershell Terminal
   - Search bar
   - Type "Powershell"
   - Right click and "Run As Administrator"
2. Copy / Paste this into the powershell (may need to right click to paste instead of ctrl+v)

```
winget install --id=MongoDB.Server -e  ; winget install --id=MongoDB.Shell -e  ; winget install --id=MongoDB.Compass.Full -e
```

3. Hit Enter - follow dialogues if any pop up
4. Close Powershell if successful install
5. Open Powershell
6. Copy / Paste this into the powershell (may need to right click to paste instead of ctrl+v)

```
   mongosh --version
```

7. You should get back v2.x.x or something similar
8. If not you will need to add mongosh to your path see below

## Add MongoDB to System PATH if step 8 above fails

1. Open "Environment Variables":
   - Search bar at bottom
   - Search for "Environment Variables"
   - Click "Environment Variables" button
2. Under "System Variables", find "Path"
3. Click "Edit"
4. Click "New"
5. Add: `C:\Program Files\MongoDB\Server\8.2\bin`
6. Click "OK" on all windows
