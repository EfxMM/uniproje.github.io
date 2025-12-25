// ==========================================
// Yeni Yıl Efektleri - Kar Yağışı ve LED Lambalar
// ==========================================

// ==========================================
// Kar Yağışı Efekti
// ==========================================
class SnowEffect {
    constructor(options = {}) {
        this.container = null;
        this.snowflakes = [];
        this.maxSnowflakes = this.getMaxSnowflakes();
        this.isActive = false;
        this.animationFrame = null;
        
        // Kar tanesi karakterleri
        this.snowStyles = ['', 'style-1', 'style-2', 'style-3', 'style-4', 'style-5'];
    }
    
    getMaxSnowflakes() {
        // Ekran boyutuna göre kar tanesi sayısını belirle
        const width = window.innerWidth;
        if (width < 768) return 50;  // Mobil - artırıldı
        if (width < 1024) return 75; // Tablet - artırıldı
        return 100; // Desktop - artırıldı
    }
    
    init() {
        // Container oluştur
        this.container = document.createElement('div');
        this.container.className = 'snow-container';
        document.body.appendChild(this.container);
        
        // Kar tanelerini oluştur
        for (let i = 0; i < this.maxSnowflakes; i++) {
            this.createSnowflake();
        }
        
        // Resize event listener
        window.addEventListener('resize', () => this.handleResize());
    }
    
    createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        // Rastgele stil seç
        const styleClass = this.snowStyles[Math.floor(Math.random() * this.snowStyles.length)];
        if (styleClass) snowflake.classList.add(styleClass);
        
        // Rastgele özellikler
        const size = Math.random() * 16 + 12; // 12-28px (daha büyük)
        const startX = Math.random() * 100; // 0-100%
        const duration = Math.random() * 8 + 8; // 8-16 saniye (daha hızlı)
        const drift = (Math.random() - 0.5) * 150; // -75px to 75px (daha fazla kayma)
        const delay = Math.random() * 3; // 0-3 saniye gecikme
        const opacity = Math.random() * 0.3 + 0.7; // 0.7-1 (daha opak)
        
        // Stilleri uygula
        snowflake.style.fontSize = `${size}px`;
        snowflake.style.left = `${startX}%`;
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${delay}s`;
        snowflake.style.opacity = opacity;
        snowflake.style.setProperty('--drift', `${drift}px`);
        
        this.container.appendChild(snowflake);
        this.snowflakes.push({
            element: snowflake,
            size,
            startX,
            duration,
            drift,
            opacity
        });
    }
    
    handleResize() {
        const newMax = this.getMaxSnowflakes();
        
        if (newMax < this.snowflakes.length) {
            // Fazla kar tanelerini kaldır
            const toRemove = this.snowflakes.length - newMax;
            for (let i = 0; i < toRemove; i++) {
                const snowflake = this.snowflakes.pop();
                snowflake.element.remove();
            }
        } else if (newMax > this.snowflakes.length) {
            // Yeni kar taneleri ekle
            const toAdd = newMax - this.snowflakes.length;
            for (let i = 0; i < toAdd; i++) {
                this.createSnowflake();
            }
        }
        
        this.maxSnowflakes = newMax;
    }
    
    start() {
        if (this.isActive) return;
        this.isActive = true;
        this.container.classList.remove('hidden');
    }
    
    stop() {
        if (!this.isActive) return;
        this.isActive = false;
        this.container.classList.add('hidden');
    }
    
    destroy() {
        this.stop();
        if (this.container) {
            this.container.remove();
        }
        this.snowflakes = [];
    }
}

// ==========================================
// LED Lambalar Efekti
// ==========================================
class LEDLights {
    constructor(options = {}) {
        this.container = null;
        this.lights = [];
        this.lightCount = this.getLightCount();
        this.currentIndex = 0;
        this.isActive = false;
        this.animationInterval = null;
        this.animationSpeed = 100; // ms - daha hızlı
        
        // LED renkleri - daha fazla renk eklendi
        this.colors = [
            'red', 'green', 'blue', 'yellow', 'purple', 'orange', 'cyan', 'pink',
            'red', 'green', 'blue', 'yellow', 'purple', 'orange', 'cyan', 'pink',
            '#ff1493', '#00ff7f', '#ff4500', '#1e90ff', '#ffd700', '#ff69b4',
            '#00ced1', '#ff6347', '#7fff00', '#da70d6', '#ffb6c1', '#87ceeb'
        ];
    }
    
    getLightCount() {
        // Ekran boyutuna göre LED sayısını belirle - daha az LED
        const width = window.innerWidth;
        if (width < 480) return 15;  // Küçük mobil
        if (width < 768) return 20;  // Mobil
        if (width < 1024) return 25; // Tablet
        return 30; // Desktop - azaltıldı
    }
    
    init() {
        // Container oluştur
        this.container = document.createElement('div');
        this.container.className = 'led-lights-container';
        document.body.appendChild(this.container);
        
        // LED lambaları oluştur
        for (let i = 0; i < this.lightCount; i++) {
            this.createLight(i);
        }
        
        // Resize event listener
        window.addEventListener('resize', () => this.handleResize());
    }
    
    createLight(index) {
        const light = document.createElement('div');
        light.className = 'led-light';
        
        // Rastgele renk seç (daha karışık görünüm için)
        const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        
        // Eğer hex renk ise, direkt style olarak uygula
        if (randomColor.startsWith('#')) {
            light.style.background = randomColor;
            light.style.color = randomColor;
        } else {
            light.classList.add(randomColor);
        }
        
        // Rastgele yükseklik - header içinde kalacak şekilde
        const randomTop = Math.random() * 60 + 10; // 10% ile 70% arası (header içinde)
        light.style.top = `${randomTop}%`;
        
        this.container.appendChild(light);
        this.lights.push({
            element: light,
            color: randomColor,
            index,
            isActive: false
        });
    }
    
    handleResize() {
        const newCount = this.getLightCount();
        
        if (newCount < this.lights.length) {
            // Fazla LED'leri kaldır
            const toRemove = this.lights.length - newCount;
            for (let i = 0; i < toRemove; i++) {
                const light = this.lights.pop();
                light.element.remove();
            }
        } else if (newCount > this.lights.length) {
            // Yeni LED'ler ekle
            const toAdd = newCount - this.lights.length;
            for (let i = 0; i < toAdd; i++) {
                this.createLight(this.lights.length);
            }
        }
        
        this.lightCount = newCount;
    }
    
    animate() {
        if (!this.isActive) return;
        
        // Önceki LED'leri söndür (daha yavaş fade out için bazılarını bırak)
        this.lights.forEach((light, idx) => {
            if (Math.random() > 0.7) { // %30 şans ile söndür
                light.element.classList.remove('active');
                light.isActive = false;
            }
        });
        
        // Birden fazla LED'i yak (daha karışık görünüm)
        const lightsToActivate = Math.floor(Math.random() * 5) + 3; // 3-7 LED
        for (let i = 0; i < lightsToActivate; i++) {
            const randomIndex = Math.floor(Math.random() * this.lights.length);
            if (this.lights[randomIndex]) {
                this.lights[randomIndex].element.classList.add('active');
                this.lights[randomIndex].isActive = true;
            }
        }
        
        // Ana akış - soldan sağa
        this.currentIndex = (this.currentIndex + 1) % this.lights.length;
        if (this.lights[this.currentIndex]) {
            this.lights[this.currentIndex].element.classList.add('active');
            this.lights[this.currentIndex].isActive = true;
        }
    }
    
    start() {
        if (this.isActive) return;
        this.isActive = true;
        this.container.classList.remove('hidden');
        
        // Animasyonu başlat
        this.animationInterval = setInterval(() => this.animate(), this.animationSpeed);
    }
    
    stop() {
        if (!this.isActive) return;
        this.isActive = false;
        this.container.classList.add('hidden');
        
        // Animasyonu durdur
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
            this.animationInterval = null;
        }
        
        // Tüm LED'leri söndür
        this.lights.forEach(light => {
            light.element.classList.remove('active');
            light.isActive = false;
        });
        
        this.currentIndex = 0;
    }
    
    destroy() {
        this.stop();
        if (this.container) {
            this.container.remove();
        }
        this.lights = [];
    }
}

// ==========================================
// Efekt Kontrolcüsü
// ==========================================
class EffectsController {
    constructor() {
        this.snowEffect = null;
        this.ledLights = null;
        this.toggleButton = null;
        this.isEnabled = this.loadPreference();
    }
    
    init() {
        // Efektleri oluştur
        this.snowEffect = new SnowEffect();
        this.ledLights = new LEDLights();
        
        this.snowEffect.init();
        this.ledLights.init();
        
        // Toggle butonu oluştur
        this.createToggleButton();
        
        // Kullanıcı tercihine göre başlat
        if (this.isEnabled) {
            this.enableEffects();
        } else {
            this.disableEffects();
        }
    }
    
    createToggleButton() {
        this.toggleButton = document.createElement('button');
        this.toggleButton.className = 'effects-toggle';
        this.toggleButton.setAttribute('aria-label', 'Yeni Yıl Efektlerini Aç/Kapat');
        this.toggleButton.setAttribute('title', 'Kar ve LED Efektleri');
        
        const icon = document.createElement('span');
        icon.className = 'icon';
        icon.textContent = '❄️';
        
        this.toggleButton.appendChild(icon);
        document.body.appendChild(this.toggleButton);
        
        // Event listener
        this.toggleButton.addEventListener('click', () => this.toggleEffects());
        
        // İlk durumu ayarla
        this.updateButtonState();
    }
    
    toggleEffects() {
        this.isEnabled = !this.isEnabled;
        
        if (this.isEnabled) {
            this.enableEffects();
        } else {
            this.disableEffects();
        }
        
        this.savePreference();
        this.updateButtonState();
    }
    
    enableEffects() {
        if (this.snowEffect) this.snowEffect.start();
        if (this.ledLights) this.ledLights.start();
    }
    
    disableEffects() {
        if (this.snowEffect) this.snowEffect.stop();
        if (this.ledLights) this.ledLights.stop();
    }
    
    updateButtonState() {
        if (this.toggleButton) {
            if (this.isEnabled) {
                this.toggleButton.classList.add('active');
            } else {
                this.toggleButton.classList.remove('active');
            }
        }
    }
    
    savePreference() {
        try {
            localStorage.setItem('newYearEffectsEnabled', JSON.stringify(this.isEnabled));
        } catch (e) {
            console.warn('localStorage not available:', e);
        }
    }
    
    loadPreference() {
        try {
            const saved = localStorage.getItem('newYearEffectsEnabled');
            return saved !== null ? JSON.parse(saved) : true; // Varsayılan: açık
        } catch (e) {
            console.warn('localStorage not available:', e);
            return true; // Varsayılan: açık
        }
    }
    
    destroy() {
        if (this.snowEffect) this.snowEffect.destroy();
        if (this.ledLights) this.ledLights.destroy();
        if (this.toggleButton) this.toggleButton.remove();
    }
}

// ==========================================
// Global Instance ve Başlatma
// ==========================================
let effectsController = null;

// Sayfa yüklendiğinde efektleri başlat
document.addEventListener('DOMContentLoaded', () => {
    // Efekt kontrolcüsünü oluştur ve başlat
    effectsController = new EffectsController();
    effectsController.init();
    
    console.log('🎄 Yeni Yıl Efektleri Yüklendi!');
});

// Sayfa kapatılırken temizlik yap
window.addEventListener('beforeunload', () => {
    if (effectsController) {
        effectsController.destroy();
    }
});

// Global erişim için export (isteğe bağlı)
window.NewYearEffects = {
    controller: effectsController,
    toggle: () => effectsController?.toggleEffects(),
    enable: () => effectsController?.enableEffects(),
    disable: () => effectsController?.disableEffects()
};
