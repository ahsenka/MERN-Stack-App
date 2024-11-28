# MERN Stack Deployment on Kubernetes with CI/CD

## Proje Hakkında
Bu proje, MERN yığını (MongoDB, Express.js, React, Node.js) ile geliştirilmiş bir web uygulamasının Docker ile konteynerleştirilmesini, Kubernetes üzerinde dağıtımını ve CI/CD süreçlerinin GitHub Actions ile otomatikleştirilmesini sağlamaktadır. Proje, bulut ortamlarında dağıtım için gerekli altyapı kodlarını da içermektedir.


## Başlangıç

Bu adımlar, proje üzerinde geliştirme yapmaya başlamadan önce ihtiyacınız olan tüm kurulumları yapmanıza yardımcı olacaktır.

### Gereksinimler
- Docker
- Kubernetes
- GitHub Actions
- Terraform (isteğe bağlı)
- Bir bulut platformu (AWS, GCP, Azure vb.)
- Node.js ve npm

### Kurulum
1. Bu projeyi yerel bilgisayarınıza klonlayın:
   ```bash
   git clone https://github.com/ahsenka/MERN-Stack-App.git
   cd MERN-Stack-App
2. Docker'ı kullanarak bileşenleri build edin:
   ```bash
   docker build -t mern-backend ./backend
   docker build -t mern-frontend ./frontend
3. Kubernetes cluster'ınızı başlatın ve gerekli deploy dosyalarını uygulayın:
   ```bash
   kubectl apply -f ./kubernetes/

4.CI/CD pipeline'ını kullanmak için GitHub Actions dosyalarını yapılandırın.

### Proje Yapısı:
MERN-Stack-App/
├── backend/                # Backend uygulaması ve Dockerfile
├── frontend/               # Frontend uygulaması ve Dockerfile
├── kubernetes/             # Kubernetes yapılandırma dosyaları
├── .github/                # GitHub Actions yapılandırmaları
│   └── workflows/
├── terraform/              # Terraform altyapı betikleri (isteğe bağlı)
└── README.md               # Bu dosya

### Kullanılan Teknolojiler
MongoDB: Veritabanı
Express.js: Backend framework
React: Frontend framework
Node.js: Backend çalışma ortamı
Docker: Konteynerleştirme
Kubernetes: Konteyner orkestrasyonu
GitHub Actions: CI/CD pipeline
Terraform: Altyapı kodları (isteğe bağlı)
CI/CD
Bu proje, GitHub Actions ile otomatikleştirilmiş bir CI/CD pipeline'ına sahiptir. Pipeline, her yeni commit ile Docker imajlarını oluşturur ve Docker Hub'a yükler, ardından Kubernetes'e dağıtım yapar.

### Altyapı
Terraform, bulut kaynaklarını (örneğin, sanal makineler, ağlar, vb.) kurmak için kullanılabilir. Detaylar ve altyapı betikleri terraform/ dizininde yer almaktadır.

### Dağıtım Süreci
Docker imajları oluşturulup, Docker Hub'a yüklenir.
Kubernetes cluster'ında pod'lar ve servisler oluşturulur.
CI/CD pipeline devreye girer ve her yeni commit ile proje otomatik olarak dağıtılır.
Sorunlar ve Çözüm Yolları
Eğer deployment sırasında sorun yaşarsanız, şu adımları kontrol edin:

Kubernetes cluster'ınızın düzgün çalıştığından emin olun.
Docker imajlarının doğru şekilde oluşturulduğuna ve registry'ye yüklendiğine bakın.
CI/CD pipeline hatalarını kontrol edin ve gerekli düzeltmeleri yapın.
