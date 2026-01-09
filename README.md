# Shoegally - เว็บไซต์แสดงสินค้ารองเท้า

เว็บไซต์สำหรับแสดงสินค้ารองเท้าคุณภาพ พร้อมระบบค้นหาและแสดงผลที่สวยงาม

## เทคโนโลยีที่ใช้

- **React** - Library สำหรับสร้าง UI
- **Vite** - Build tool ที่เร็วมาก
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - ภาษาโปรแกรมมิ่ง

## การติดตั้งและรันโปรเจกต์

1. ติดตั้ง dependencies:
```bash
npm install
```

2. รัน development server:
```bash
npm run dev
```

3. Build สำหรับ production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## การ Deploy บน Netlify

โปรเจกต์นี้พร้อมสำหรับ deploy บน Netlify แล้ว:

### วิธี Deploy:

1. **ผ่าน Netlify Dashboard:**
   - ไปที่ [netlify.com](https://www.netlify.com)
   - คลิก "Add new site" → "Import an existing project"
   - เชื่อมต่อกับ Git repository (GitHub, GitLab, หรือ Bitbucket)
   - Netlify จะ detect settings อัตโนมัติจาก `netlify.toml`

2. **ผ่าน Netlify CLI:**
   ```bash
   # ติดตั้ง Netlify CLI
   npm install -g netlify-cli
   
   # Login
   netlify login
   
   # Deploy
   netlify deploy --prod
   ```

3. **Drag & Drop:**
   - Build โปรเจกต์ก่อน: `npm run build`
   - ลากโฟลเดอร์ `dist` ไปที่ Netlify Drop

### Build Settings (ตั้งค่าอัตโนมัติแล้ว):
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** ใช้ default (หรือระบุใน `netlify.toml`)

### ไฟล์ที่เกี่ยวข้อง:
- `netlify.toml` - Configuration file สำหรับ Netlify

## ฟีเจอร์

- ✅ แสดงสินค้ารองเท้าในรูปแบบ Grid
- ✅ ระบบค้นหาสินค้า
- ✅ Responsive Design (รองรับทั้งมือถือและเดสก์ท็อป)
- ✅ UI/UX ที่สวยงามและทันสมัย
- ✅ แสดงข้อมูลสินค้า: ชื่อ, ยี่ห้อ, ราคา, ขนาด

## โครงสร้างโปรเจกต์

```
shoegally-global/
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── ProductCard.jsx
│   │   └── Footer.jsx
│   ├── data/           # ข้อมูลสินค้า
│   │   └── products.js
│   ├── App.jsx         # Component หลัก
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.js
└── netlify.toml
```

## การพัฒนาต่อ

- เพิ่มหน้าแสดงรายละเอียดสินค้า
- เพิ่มระบบตะกร้าสินค้า
- เชื่อมต่อกับ Backend API
- เพิ่มระบบการกรองสินค้า (ตามยี่ห้อ, ราคา, ประเภท)