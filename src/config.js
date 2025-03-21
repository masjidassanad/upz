const config = {
  app: {
    name: 'UPZ Masjid Assanad',
    version: '1.0.0',
    author: 'UPZ Masjid Assanad',
    url: 'https://masjidassanad.github.io',
  },
  tempData: {
    "programs": [
      {
        "id": 1,
        "codename": "zakat",
        "name": "Zakat",
        "total": 21500,
        "status": true,
        "main": true,
        "featured": false,
        "teaser": "Zakat adalah kewajiban bagi setiap Muslim yang mampu untuk membantu mereka yang membutuhkan.",
        "description": [
          "<b>Zakat</b> merupakan salah satu rukun Islam yang wajib ditunaikan oleh umat Muslim yang telah memenuhi syarat nisab.",
          "Dana zakat disalurkan kepada delapan asnaf yang berhak menerima, seperti fakir, miskin, amil, mualaf, dan lainnya."
        ],
        "banner": "",
        "partner": "",
        "tags": ""
      },
      {
        "id": 2,
        "codename": "infaq",
        "name": "Infaq",
        "total": "",
        "status": true,
        "main": true,
        "featured": false,
        "teaser": "Infaq adalah sumbangan sukarela untuk mendukung berbagai program dakwah dan sosial.",
        "description": [
          "Infaq adalah bentuk kedermawanan dalam Islam yang tidak terbatas jumlah maupun waktunya.",
          "Dana infaq digunakan untuk membiayai program-program dakwah, pendidikan, dan kesejahteraan sosial."
        ],
        "banner": "",
        "partner": "",
        "tags": ""
      },
      {
        "id": 3,
        "codename": "sedekah",
        "name": "Sedekah",
        "total": "",
        "status": false,
        "main": false,
        "featured": false,
        "teaser": "",
        "banner": "",
        "partner": "",
        "tags": ""
      },
      {
        "id": 4,
        "codename": "wakaf",
        "name": "Wakaf",
        "total": "",
        "status": false,
        "main": true,
        "featured": false,
        "teaser": "",
        "banner": "",
        "partner": "",
        "tags": ""
      },
      {
        "id": 5,
        "codename": "hibah",
        "name": "Hibah",
        "total": "",
        "status": false,
        "main": false,
        "featured": false,
        "teaser": "",
        "banner": "",
        "partner": "",
        "tags": ""
      },
      {
        "id": 6,
        "codename": "fidyah",
        "name": "Tunaikan Fidyah",
        "total": "",
        "status": false,
        "main": false,
        "featured": false,
        "teaser": "",
        "banner": "",
        "partner": "",
        "tags": ""
      },
      {
        "id": "",
        "codename": "",
        "name": "",
        "total": "",
        "status": false,
        "main": false,
        "featured": false,
        "teaser": "",
        "banner": "",
        "partner": "",
        "tags": ""
      },
      {
        "id": 10,
        "codename": "upz-menyapa",
        "name": "UPZ Menyapa",
        "total": "",
        "status": true,
        "main": false,
        "featured": false,
        "teaser": "Bantuan untuk korban musibah dan jenguk orang sakit sebagai bentuk kepedulian.",
        "description": [
          "Program ini bertujuan untuk membantu mereka yang terkena musibah seperti bencana alam atau kecelakaan.",
          "Selain itu, UPZ juga memberikan perhatian khusus dengan menjenguk saudara-saudara kita yang sedang sakit."
        ],
        "banner": "",
        "partner": "",
        "tags": ""
      },
      {
        "id": 11,
        "codename": "tasyaruf",
        "name": "Pentasyarufan",
        "total": "",
        "status": true,
        "main": false,
        "featured": true,
        "teaser": "Program penyaluran bantuan kepada dhuafa dan yatim dalam bentuk paket bantuan.",
        "description": [
          "Pentasyarufan adalah bentuk kepedulian terhadap kaum dhuafa dan anak yatim dengan memberikan bantuan yang dibutuhkan.",
          "Bantuan diberikan dalam berbagai bentuk seperti sembako, perlengkapan sekolah, dan bantuan kesehatan."
        ],
        "banner": "",
        "partner": "",
        "tags": ""
      },
      {
        "id": 12,
        "codename": "pesantren-tahfidz",
        "name": "Rintisan Pesantren Tahfidz",
        "total": "",
        "status": true,
        "main": false,
        "featured": true,
        "teaser": "Mendukung pembangunan dan pengembangan pesantren tahfidz untuk generasi Qur'ani.",
        "description": [
          "Program ini mendukung pembangunan pesantren tahfidz yang bertujuan mencetak generasi penghafal Al-Qur'an.",
          "Bantuan diberikan dalam bentuk dana pembangunan, fasilitas pendidikan, dan beasiswa bagi santri."
        ],
        "banner": "",
        "partner": "",
        "tags": ""
      },
      {
        "id": "",
        "codename": "",
        "name": "",
        "total": "",
        "status": false,
        "main": false,
        "featured": false,
        "teaser": "",
        "banner": "",
        "partner": "",
        "tags": ""
      },
      {
        "id": 30,
        "codename": "beasiswa",
        "name": "Beasiswa Rumah Tahfidz & TPQ",
        "total": "",
        "status": false,
        "main": false,
        "featured": false,
        "teaser": "Beasiswa bagi santri di rumah tahfidz dan TPQ agar terus belajar tanpa kendala finansial.",
        "description": [
          "Program ini memberikan beasiswa kepada santri yang belajar di rumah tahfidz dan TPQ.",
          "Beasiswa mencakup biaya pendidikan, kitab, serta dukungan kebutuhan lainnya bagi santri berprestasi maupun kurang mampu."
        ],
        "banner": "",
        "partner": "Rumah Tahfidz, TPQ Nur Islam",
        "tags": ""
      },
      {
        "id": 31,
        "codename": "ortusan",
        "name": "Orang Tua Santri (ortusan)",
        "total": "",
        "status": false,
        "main": false,
        "featured": false,
        "teaser": "",
        "banner": "",
        "partner": "Tahsin Al-Amin",
        "tags": ""
      }
    ],
    "settings": [
      {
        "group": "app",
        "code": "data",
        "key": "version",
        "value": "1.0.0-a.1"
      },
      {
        "group": "app",
        "code": "site",
        "key": "title",
        "value": "UPZ Masjid Assanad"
      }
    ]
  }
}

export default config;
