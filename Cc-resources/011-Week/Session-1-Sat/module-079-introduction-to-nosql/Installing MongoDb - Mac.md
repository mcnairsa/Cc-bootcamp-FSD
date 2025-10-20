**Step 1: Install Homebrew (if not already installed)**

Open Terminal and run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Verify Homebrew installation:

```bash
brew --version
```

**Step 2: Tap MongoDB Homebrew Repository**

```bash
brew tap mongodb/brew
```

```bash
brew update
```

This adds MongoDB's official Homebrew repository to your system.

**Step 3: Install MongoDB Community Edition**

```bash
brew install mongodb-community@8.2
```

This installs:

- MongoDB server (mongod)
- MongoDB shell (mongosh)
- MongoDB tools

**Step 4: Start MongoDB**

Start MongoDB as a background service:

```bash
brew services start mongodb/brew/mongodb-community
```

**Step 4: Install Compass**

**Option 1: Using Homebrew**

```bash
brew install --cask mongodb-compass
```

**Option 2: Direct Download**

1. Visit: https://www.mongodb.com/try/download/compass
2. Select macOS version
3. Download the .dmg file
4. Open the .dmg and drag MongoDB Compass to Applications
5. Launch from Applications folder

**Step 5: Test**

```
   mongosh --version
```

- You should get back v2.x.x or something similar
