/financial-manager


│


├── /docs


│   ├── requirements/


│   │   ├── elicitation.md      # Hasil elicitation dan kebutuhan pengguna


│   │   ├── functional.md       # Spesifikasi fungsional


│   │   └── non-functional.md   # Spesifikasi non-fungsional


│   ├── wireframes/             # Sketsa dan wireframe UI


│   ├── design/                 # Desain akhir UI dan UX


│   └── architecture.md         # Desain arsitektur aplikasi


│


├── /client                     # Folder frontend aplikasi (React)


│   ├── /public


│   ├── /src


│   │   ├── /components


│   │   ├── /pages


│   │   ├── /styles


│   │   └── index.js            # Entry point aplikasi React


│   ├── package.json


│   └── README.md


│


├── /server                     # Folder backend aplikasi (Node.js dan Express)


│   ├── /config


│   ├── /controllers


│   ├── /models


│   ├── /routes


│   ├── /middleware


│   ├── server.js               # Entry point aplikasi Node.js


│   ├── package.json


│   └── README.md


│


├── /database                   # Konfigurasi database (MongoDB)


│   ├── models/                 # Skema database (Mongoose models)


│   └── migrations/             # Skrip migrasi (jika diperlukan)


│


├── /tests                      # Folder untuk pengujian (unit tests, integration tests, dll.)


│   ├── /client-tests


│   ├── /server-tests


│   └── /e2e-tests              # Pengujian end-to-end


│


├── /scripts                    # Skrip untuk otomatisasi atau CI/CD


│   └── deploy.sh               # Contoh skrip untuk deployment


│


├── .gitignore


├── README.md                   # Dokumentasi umum proyek


└── LICENSE
