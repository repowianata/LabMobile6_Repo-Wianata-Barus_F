
# Penjelasan Komponen Ionic

### 1. Komponen Halaman `home`

Halaman `home` menampilkan nama pengguna, ID, dan foto profil pengguna.

#### Struktur Kode
- **Kode Komponen**:

  ```typescript
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
  })
  export class HomePage {
    nama: string = 'Nama Petualang';
    nim: string = '12345678';
    fotoUrl: string = '';

    constructor() {}
  }
  ```

#### Template HTML
- **Kode Template**:

  ```html
  <ion-header>
    <ion-toolbar>
      <ion-title>Home Page</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-card>
      <img [src]="fotoUrl" alt="Foto Petualang" />
      <ion-card-header>
        <ion-card-title>{{ nama }}</ion-card-title>
        <ion-card-subtitle>NIM: {{ nim }}</ion-card-subtitle>
      </ion-card-header>
    </ion-card>
  </ion-content>
  ```

#### Penjelasan Komponen

- **`<ion-header>`**: Komponen ini digunakan untuk mendefinisikan bagian header dari halaman.
- **`<ion-toolbar>`**: Sebagai wadah untuk elemen header, memberikan struktur pada header.
- **`<ion-title>`**: Menetapkan teks judul di dalam toolbar atau header.
- **`<ion-content>`**: Bertindak sebagai wadah utama untuk area konten yang dapat digulir di halaman.
- **`<ion-card>`**: Menampilkan informasi dalam format kartu.
- **`<ion-card-title>` dan `<ion-card-subtitle>`**: Menampilkan judul utama dan subjudul di dalam kartu.
- **`[src]="fotoUrl"`**: Mengikat sumber gambar ke properti `fotoUrl`, yang memungkinkan pemuatan gambar secara dinamis.

### 2. Komponen Halaman `quest`

#### Struktur Kode

- **Kode Komponen**:

  ```typescript
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-quest',
    templateUrl: './quest.page.html',
    styleUrls: ['./quest.page.scss'],
  })
  export class QuestPage implements OnInit {
    constructor() {}

    ngOnInit() {}
  }
  ```

#### Template HTML

- **Kode Template**:

  ```html
  <ion-header>
    <ion-toolbar>
      <ion-title>Quest Page</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <p>Quest details coming soon...</p>
  </ion-content>
  ```

#### Penjelasan Komponen

- **`<ion-header>`, `<ion-toolbar>`, dan `<ion-title>`**: mendefinisikan header yang terstruktur.
- **`<ion-content>`**: Bertindak sebagai wadah konten utama yang dapat digulir.
- **`<p>`**: Tag paragraf HTML standar untuk menampilkan teks sederhana.

## ScreenShoot
<img src="profil.png" width=500px>
<img src="quest.png" width=500px>

#

