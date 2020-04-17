# Clean 1
sudo rm -rf build build.zip
rm -rf __pycache__

# Fetch dependencies
mkdir -p bin/

## Get chromedriver
curl -SL https://chromedriver.storage.googleapis.com/2.43/chromedriver_linux64.zip > chromedriver.zip
unzip chromedriver.zip -d bin/
chmod 777 bin/chromedriver

## Get Headless-chrome
curl -SL https://github.com/adieuadieu/serverless-chrome/releases/download/v1.0.0-55/stable-headless-chromium-amazonlinux-2017-03.zip > headless-chromium.zip
unzip headless-chromium.zip -d bin/
chmod 777 bin/headless-chromium 

# Clean 2
rm headless-chromium.zip chromedriver.zip
ls
# Create zip
mkdir build
mkdir -p lib
cp -r src build/.
cp -r bin build/.
cp -r lib build/.
sudo -H pip3 install --upgrade -r requirements.txt -t build/lib/.
cd build
zip -9qr build.zip .
cd ..
cp build/build.zip .
sudo rm -rf build

# Upload to S3
aws s3 cp build.zip s3://tidebuddyscraperpy