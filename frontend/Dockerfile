# Base image olarak Node.js kullanıyoruz
FROM node:16

# Uygulama dizinini oluşturuyoruz
WORKDIR /usr/src/app

# package.json ve package-lock.json dosyalarını kopyalıyoruz
COPY package*.json ./

# Tüm dosyaları kopyalıyoruz
COPY . .

# Frontend'i build ediyoruz
RUN npm run build

# Build edilmiş dosyaları bir web sunucusunda çalıştırıyoruz
CMD ["npx", "serve", "-s", "build"]
