# 📿 Turkey Prayer API

Basit, ⚡ hızlı ve 🇹🇷 Türkiye odaklı namaz vakitleri API'si JavaScript ile hazırlanmıştır.

---

## 🚀 Özellikler

* Türkiye'deki şehirler için namaz vakitlerini JSON formatında sunar
* Kullanımı kolay API endpointleri
* Hafif ve hızlı

---

## 🛠️ Başlarken

### Repo'yu klonla

```bash
git clone https://github.com/Sandvicdev/turkey-prayer-api.git
cd turkey-prayer-api
```

### Bağımlılıkları yükle

```bash
npm install
```

### Geliştirme sunucusunu çalıştır

```bash
npm start
```

API artık şu adreste çalışıyor olmalı:

```
http://localhost:3000
```

---

## 📡 Kullanım

### Bir şehrin namaz vakitlerini getir

```http
GET /api/vakit?city=Sivas
```

**Örnek Response:**

```json
{
  "city": "Sivas",
  "date": "2026-02-22",
  "times": {
    "imsak": "05:34",
    "gunes": "07:11",
    "ogle": "12:31",
    "ikindi": "15:59",
    "aksam": "18:45",
    "yatsi": "20:09"
  }
}
```

---

## 🧠 Hesaplama Yöntemi

Namaz vakitleri Türkiye Diyanet İşleri Başkanlığı verilerine veya standart namaz vakitleri algoritmalarına göre hesaplanır.

---

## 📦 Deploy / Yayına Alma

Vercel, Netlify, Render veya Heroku gibi platformlarda deploy edilebilir.

**Docker ile:**

```bash
docker build -t turkey-prayer-api .
docker run -p 3000:3000 turkey-prayer-api
```

---

## ✨ Katkıda Bulunmak

1. Repo'yu fork'la
2. Yeni branch aç: `git checkout -b feature/özellik-adi`
3. Değişikliklerini commit'le
4. Pull Request gönder

---

## 📄 Lisans

MIT Lisansı — serbestçe kullanabilir ve değiştirebilirsin
