# Base image olarak Node.js kullanıyoruz
FROM node:16

# Uygulama dizinini oluşturuyoruz
WORKDIR /usr/src/app

# package.json ve package-lock.json dosyalarını kopyalıyoruz
COPY package*.json ./

# Tüm dosyaları kopyalıyoruz
COPY . .

# Sunucuyu başlatıyoruz
CMD ["npm", "start"]
