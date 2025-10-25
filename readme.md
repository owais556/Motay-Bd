# Birthday Website 🎂🎈

A beautiful, interactive birthday greeting website with animations, music, and personalized messages.

## ✨ Features

- 🎈 **Interactive Balloons**: Animated balloons spelling "HBD MOTAY"
- 💡 **Light Effects**: Colorful bulbs with glow animations
- 🎂 **Birthday Cake**: Animated cake with candle lighting
- 🎵 **Background Music**: Auto-play music on both pages
- 📸 **Photo Gallery**: 4 beautiful photos with zoom/lightbox feature
- 💌 **Love Letter Page**: Romantic letter with floating hearts and sparkles
- 📱 **Fully Mobile Responsive**: Optimized for all devices (especially Motorola Edge Plus 6.7" OLED)
- ✨ **Smooth Animations**: Floating hearts, sparkles, and smooth transitions

## 🛠 Technology Stack

- **HTML5**: Structure and content
- **CSS3**: Animations, responsive design, custom effects
- **JavaScript/jQuery**: Interactive animations and effects
- **Bootstrap**: Basic styling framework
- **Custom Fonts**: Sweet Toffee, Happy, Halloween fonts

## 📦 Project Structure

```
bd1/
├── index.html              # Main birthday page
├── last.html               # Love letter & memories page
├── assets/
│   ├── audio/
│   │   ├── hbd.mp3        # Main birthday song
│   │   └── last.mp3       # Love letter page music
│   ├── images/
│   │   ├── balloons/      # 8 balloon images (b1-b8)
│   │   ├── bulbs/         # 6 colored bulb images
│   │   ├── photo1-4.jpg   # Album photos
│   │   ├── d1-d3.jpg      # Memory photos
│   │   └── ...            # Other images
│   └── fonts/             # Custom fonts
├── css/
│   ├── stylesheet.css     # Main styles with responsive design
│   └── loading.css        # Loading animation
├── js/
│   └── effect.js          # All JavaScript animations
├── vercel.json            # Vercel deployment config
└── package.json           # Dependencies

```

## 🚀 Deployment to Vercel

### Method 1: Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Navigate to project directory:
```bash
cd C:\Users\hp\OneDrive\Desktop\motayBD\bd1
```

3. Deploy to production:
```bash
vercel --prod
```

### Method 2: Vercel Dashboard

1. Create a GitHub repository and push code
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy" - Vercel will auto-detect settings

## 💻 Local Development

1. Install dependencies:
```bash
npm install
```

2. Start local server:
```bash
npm run server-node
```

3. Open browser at:
```
http://localhost:8081
```

## 📱 Mobile Responsive

Website is fully optimized for:
- ✅ Motorola Edge Plus (6.7" OLED - 1080x2400px)
- ✅ Small screens (≤360px)
- ✅ Medium screens (361px - 768px)
- ✅ Tablets and desktops
- ✅ Landscape orientation

## 🎨 Customization Guide

### Change Balloon Text
Edit `index.html` lines 404-427:
```html
<div class="balloons text-center" id="b1">
    <h2 style="color:#F2B300;">H</h2>
</div>
<!-- Change letters in each balloon -->
```

### Change Messages
Edit `index.html` lines 477-523 for birthday messages

### Change Photos
Replace images in `assets/images/`:
- `photo1.jpg` to `photo4.jpg` - Album photos
- `d1.jpg` to `d3.jpg` - Memory page photos

### Change Music
Replace audio files in `assets/audio/`:
- `hbd.mp3` - Main page music
- `last.mp3` - Love letter page music

## 🎯 Key Features Implemented

1. ✅ **8 Balloons** spelling "HBD MOTAY"
2. ✅ **Mobile responsive** with adaptive balloon sizing
3. ✅ **Photo gallery** with zoom functionality
4. ✅ **Love letter page** with romantic animations
5. ✅ **Auto-play music** triggered by button clicks
6. ✅ **Removed profile image** and can-zoom hint
7. ✅ **Custom Sindhi messages** on buttons
8. ✅ **Pink gradient buttons** matching last.html style

## 🌐 Browser Support

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile Browsers

## 📝 License

WTFPL

## 🙏 Credits

Original template by [Shizu-ka](https://github.com/Shizu-ka/Birthday-Website)
Modified and enhanced by Claude Code for Basit's Birthday 🎉

---

**Made with ❤️ for someone special**
