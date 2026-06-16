# 🍳 Kelinchak

**Yangi turmush qurganlar uchun retseptlar va AI yordamchi platformasi.**

> "Har bir taom bir sevgi qissasi" — Kelinchak

---

## Loyha haqida

Kelinchak — taom pishirishni bilmaydigan kelinlar va yangi turmush qurganlar uchun mo'ljallangan zamonaviy web ilova. Platforma retseptlar bazasi va AI yordamchini birlashtiradi.

---

## Texnologiyalar

- **Framework:** Next.js 14+ (App Router)
- **Til:** TypeScript
- **CSS:** Tailwind CSS
- **Fontlar:** Playfair Display (sarlavhalar) + DM Sans (matn)

---

## Lokal ishga tushirish

### Talablar

- Node.js 18.17.0 yoki undan yuqori
- npm 9+ (yoki yarn / pnpm)

### O'rnatish

```bash
# 1. Paketlarni o'rnating
npm install

# 2. Dev serverni ishga tushiring
npm run dev
```

Brauzerda **http://localhost:3000** ochiladi.

### Boshqa buyruqlar

```bash
# Production build
npm run build

# Production serverni ishga tushirish (build kerak)
npm run start

# Linting
npm run lint
```

---

## Papka strukturasi

```
kelinchak/
├── app/
│   ├── globals.css        # Global uslublar + Tailwind
│   ├── layout.tsx         # Root layout (Header + Footer)
│   └── page.tsx           # Bosh sahifa skeleton
├── components/
│   └── layout/
│       ├── Header.tsx     # Logo + navigatsiya
│       ├── Navigation.tsx # Desktop nav + mobil hamburger
│       └── Footer.tsx     # Footer
├── lib/
│   └── utils.ts           # Yordamchi funksiyalar
├── types/
│   └── index.ts           # TypeScript turlari
├── tailwind.config.ts     # Dizayn tokenlari
├── next.config.js
└── tsconfig.json
```

---

## Dizayn tokenlari

| Token        | Rang     | Qo'llanilishi         |
|--------------|----------|-----------------------|
| `cream`      | #FAF6EF  | Asosiy fon            |
| `saffron`    | #E8A020  | Akcent, CTA           |
| `terracotta` | #C4603A  | Sarlavhalar, primary  |
| `clay`       | #B07850  | Ikkinchi darajali     |
| `charcoal`   | #2C1F14  | Matn                  |

---

## Keyingi bosqichlar (2–30 prompt)

- **Prompt 2:** Bosh sahifa (Hero section, featured retseptlar)
- **Prompt 3:** Retseptlar sahifasi + filter
- **Prompt 4:** Retsept detail sahifasi
- **Prompt 5+:** AI Yordamchi, Premium, Auth va boshqalar

---

*Loyiha 30 promptda bosqichma-bosqich qurilmoqda.*
