##Courtesy of Will

1. Install prerequites

sudo add-apt-repository ppa:nrbrtx/libssl1
sudo apt update
sudo apt install libssl1.1
sudo apt-get install gnupg

2. Install MongoDB

wget -qO - https://www.mongodb.org/static/pgp/server-8.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
sudo apt-get install -y mongodb-org

3. Compass
1. Install prerequites

sudo add-apt-repository ppa:nrbrtx/libssl1
sudo apt update
sudo apt install libssl1.1
sudo apt-get install gnupg

2. Install MongoDB

wget -qO - https://www.mongodb.org/static/pgp/server-8.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
sudo apt-get install -y mongodb-org
