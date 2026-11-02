# ProTender by ProKuiz
Aplikasi peringatan tender — tab **Register | Buy | Close**.

- **Register**: daftar tender baru (no. tender, tajuk, agensi, tarikh tutup, taklimat).
- **Buy**: tender yang dokumennya sudah dibeli (tarikh beli, harga, resit).
- **Close**: tender yang sudah ditutup (Dihantar / Menang / Kalah / Tidak Hantar / Dibatalkan).
- Peringatan 7, 3, 1 hari dan pada hari tutup.
- Sync antara telefon (Firebase, kod 20 aksara) + backup JSON / CSV.

Web: https://alemmaxx.github.io/ProTender/ (deploy automatik melalui GitHub Actions).

## APK Android
Setiap push ke `main` akan bina APK secara automatik (tab **Actions → Build ProTender APK**).
Muat turun terus: https://github.com/alemmaxx/ProTender/releases/download/latest/ProTender.apk
