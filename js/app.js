// ==========================================
// Ana Uygulama Mantığı
// ==========================================

// Sayfa geçişlerini yönet
function showPage(pageId) {
    // Tüm sayfaları gizle
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // İstenen sayfayı göster
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');

        // Sayfa özel işlemleri
        if (pageId === 'infoPage') {
            loadInfoContent();
        } else if (pageId === 'quizPage') {
            resetQuizPage();
        } else if (pageId === 'scenariosPage') {
            scenarioManager.showScenarioSelection();
        } else if (pageId === 'progressPage') {
            loadProgressPage();
        } else if (pageId === 'timelinePage') {
            // Zaman çizelgesi sayfası - özel işlem gerekmez
            document.getElementById('diseaseSelect').value = '';
            document.getElementById('timelineContent').innerHTML = '';
        }
    }

    // Sayfayı yukarı kaydır
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Quiz sayfasını sıfırla
function resetQuizPage() {
    document.getElementById('quizStart').classList.remove('hidden');
    document.getElementById('quizGame').classList.add('hidden');
    document.getElementById('quizResults').classList.add('hidden');
}

// ==========================================
// Bilgi Modülü İçeriği
// ==========================================

function loadInfoContent() {
    // CYBE sekmesi
    loadCybeTab();

    // Korunma sekmesi
    loadProtectionTab();

    // El yıkama sekmesi
    loadHandwashTab();
}

// CYBE bilgilerini yükle
function loadCybeTab() {
    const container = document.getElementById('cybeTab');

    // Başlık ekle
    container.innerHTML = `
        <div class="info-intro" style="text-align: center; margin-bottom: var(--spacing-lg); padding: var(--spacing-md); background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%); border-radius: var(--radius-lg);">
            <h3 style="color: var(--color-primary); margin-bottom: var(--spacing-xs);">${getTranslation('cybeTabTitle')}</h3>
            <p style="color: var(--color-text); max-width: 800px; margin: 0 auto;">
                ${getTranslation('cybeTabDesc')}
            </p>
        </div>
        <div class="info-grid"></div>
    `;

    const grid = container.querySelector('.info-grid');

    getCybeInfo().forEach((disease, index) => {
        const card = document.createElement('div');
        card.className = 'info-card animate-fadeIn';
        card.style.animationDelay = `${index * 0.05}s`;

        card.innerHTML = `
            <h4>${disease.icon} ${disease.name}</h4>
            
            <h5 style="color: var(--color-primary); margin-top: var(--spacing-sm);">${getTranslation('symptoms')}</h5>
            <ul>
                ${disease.symptoms.map(s => `<li>${s}</li>`).join('')}
            </ul>
            
            <h5 style="color: var(--color-primary); margin-top: var(--spacing-sm);">${getTranslation('transmission')}</h5>
            <ul>
                ${disease.transmission.map(t => `<li>${t}</li>`).join('')}
            </ul>
            
            <h5 style="color: var(--color-primary); margin-top: var(--spacing-sm);">${getTranslation('prevention')}</h5>
            <ul>
                ${disease.prevention.map(p => `<li>${p}</li>`).join('')}
            </ul>
        `;

        grid.appendChild(card);
    });
}

// Korunma bilgilerini yükle
function loadProtectionTab() {
    const container = document.getElementById('protectionTab');
    const t = getTranslation;

    container.innerHTML = `
        <!-- Başlık ve Giriş -->
        <div class="protection-hero" style="text-align: center; margin-bottom: var(--spacing-xl); padding: var(--spacing-xl) var(--spacing-lg); background: linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%); border-radius: 20px; border: 1px solid rgba(37, 99, 235, 0.1);">
            <h3 style="font-size: 2rem; color: var(--color-primary); margin-bottom: var(--spacing-sm); font-weight: 800;">${t('protectionTitle')}</h3>
            <p style="font-size: 1.125rem; color: var(--color-text); max-width: 800px; margin: 0 auto; line-height: 1.7;">
                ${t('protectionDesc')}
            </p>
        </div>

        <!-- Ana Korunma Yöntemleri Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--spacing-lg); margin-bottom: var(--spacing-xl);">
            
            <!-- Kondom Kullanımı -->
            <div class="info-card animate-fadeIn" style="border-left-color: var(--color-primary);">
                <div style="display: flex; align-items: center; gap: var(--spacing-sm); margin-bottom: var(--spacing-md);">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2rem; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);">
                        🛡️
                    </div>
                    <h4 style="margin: 0; font-size: 1.375rem;">${t('barrierMethods')}</h4>
                </div>
                <h5 style="color: var(--color-primary); margin-top: var(--spacing-md);">${t('condomUse')}</h5>
                <ul>
                    <li>${t('condomList1')}</li>
                    <li>${t('condomList2')}</li>
                    <li>${t('condomList3')}</li>
                    <li>${t('condomList4')}</li>
                    <li>${t('condomList5')}</li>
                    <li>${t('condomList6')}</li>
                </ul>
                <div style="margin-top: var(--spacing-md); padding: var(--spacing-sm); background: rgba(16, 185, 129, 0.1); border-radius: 8px; border-left: 3px solid var(--color-secondary);">
                    <strong style="color: var(--color-secondary);">${t('effectiveness')}</strong> ${t('effectivenessText')}
                </div>
            </div>

            <!-- Aşılama -->
            <div class="info-card animate-fadeIn" style="animation-delay: 0.1s; border-left-color: var(--color-secondary);">
                <div style="display: flex; align-items: center; gap: var(--spacing-sm); margin-bottom: var(--spacing-md);">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, var(--color-secondary), var(--color-primary)); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2rem; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);">
                        ${t('vaccination')}
                    </div>
                    <h4 style="margin: 0; font-size: 1.375rem;">${t('vaccination')}</h4>
                </div>
                <h5 style="color: var(--color-secondary);">${t('hpvVaccine')}</h5>
                <ul>
                    <li>${t('hpvList1')}</li>
                    <li>${t('hpvList2')}</li>
                    <li>${t('hpvList3')}</li>
                    <li>${t('hpvList4')}</li>
                </ul>
                <h5 style="color: var(--color-secondary); margin-top: var(--spacing-md);">${t('hepBVaccine')}</h5>
                <ul>
                    <li>${t('hepBList1')}</li>
                    <li>${t('hepBList2')}</li>
                    <li>${t('hepBList3')}</li>
                    <li>${t('hepBList4')}</li>
                </ul>
                <div style="margin-top: var(--spacing-md); padding: var(--spacing-sm); background: rgba(16, 185, 129, 0.1); border-radius: 8px; border-left: 3px solid var(--color-secondary);">
                    <strong style="color: var(--color-secondary);">${t('important')}</strong> ${t('importantText')}
                </div>
            </div>

            <!-- Düzenli Test -->
            <div class="info-card animate-fadeIn" style="animation-delay: 0.2s; border-left-color: #f59e0b;">
                <div style="display: flex; align-items: center; gap: var(--spacing-sm); margin-bottom: var(--spacing-md);">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #f59e0b, #ef4444); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2rem; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);">
                        🔬
                    </div>
                    <h4 style="margin: 0; font-size: 1.375rem;">${t('regularScreening')}</h4>
                </div>
                <h5 style="color: #f59e0b;">${t('testRecommendations')}</h5>
                <ul>
                    <li>${t('testList1')}</li>
                    <li>${t('testList2')}</li>
                    <li>${t('testList3')}</li>
                    <li>${t('testList4')}</li>
                </ul>
                <h5 style="color: #f59e0b; margin-top: var(--spacing-md);">${t('testTypes')}</h5>
                <ul>
                    <li>${t('testTypesList1')}</li>
                    <li>${t('testTypesList2')}</li>
                    <li>${t('testTypesList3')}</li>
                    <li>${t('testTypesList4')}</li>
                    <li>${t('testTypesList5')}</li>
                </ul>
            </div>
        </div>

        <!-- İletişim ve İlişki Sağlığı -->
        <div class="info-card animate-fadeIn" style="animation-delay: 0.3s; background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05)); border-left-color: #8b5cf6;">
            <div style="display: flex; align-items: center; gap: var(--spacing-sm); margin-bottom: var(--spacing-md);">
                <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #8b5cf6, #6366f1); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2rem; box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);">
                    💬
                </div>
                <h4 style="margin: 0; font-size: 1.375rem;">${t('communication')}</h4>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--spacing-md);">
                <div>
                    <h5 style="color: #8b5cf6;">${t('partnerCommunication')}</h5>
                    <ul>
                        <li>${t('commList1')}</li>
                        <li>${t('commList2')}</li>
                        <li>${t('commList3')}</li>
                        <li>${t('commList4')}</li>
                    </ul>
                </div>
                <div>
                    <h5 style="color: #8b5cf6;">${t('healthyRelationship')}</h5>
                    <ul>
                        <li>${t('relationList1')}</li>
                        <li>${t('relationList2')}</li>
                        <li>${t('relationList3')}</li>
                        <li>${t('relationList4')}</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Acil Durum ve Destek -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-md); margin-top: var(--spacing-lg);">
            <div class="info-card animate-fadeIn" style="animation-delay: 0.4s; border-left-color: #ef4444;">
                <h4 style="color: #ef4444;">${t('emergencyProtection')}</h4>
                <p style="margin-bottom: var(--spacing-sm);">
                    <strong>${t('pepDesc')}</strong>
                </p>
                <ul>
                    <li><strong>${t('pepWhen')}</strong> ${t('pepWhenText')}</li>
                    <li><strong>${t('pepHow')}</strong> ${t('pepHowText')}</li>
                    <li><strong>${t('pepDuration')}</strong> ${t('pepDurationText')}</li>
                    <li><strong>${t('pepEffectiveness')}</strong> ${t('pepEffectivenessText')}</li>
                </ul>
                <div style="margin-top: var(--spacing-md); padding: var(--spacing-sm); background: rgba(239, 68, 68, 0.1); border-radius: 8px; border-left: 3px solid #ef4444;">
                    <strong style="color: #ef4444;">${t('pepWarning')}</strong> ${t('pepWarningText')}
                </div>
            </div>

            <div class="info-card animate-fadeIn" style="animation-delay: 0.5s; border-left-color: var(--color-primary);">
                <h4 style="color: var(--color-primary);">${t('whereToApply')}</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: var(--spacing-xs) 0; border-bottom: 1px solid var(--color-border);">
                        <strong>${t('familyHealthCenter')}</strong><br>
                        <span style="font-size: 0.9rem; color: var(--color-text-light);">${t('familyHealthDesc')}</span>
                    </li>
                    <li style="padding: var(--spacing-xs) 0; border-bottom: 1px solid var(--color-border);">
                        <strong>${t('stateHospitals')}</strong><br>
                        <span style="font-size: 0.9rem; color: var(--color-text-light);">${t('stateHospitalsDesc')}</span>
                    </li>
                    <li style="padding: var(--spacing-xs) 0; border-bottom: 1px solid var(--color-border);">
                        <strong>${t('universityHospitals')}</strong><br>
                        <span style="font-size: 0.9rem; color: var(--color-text-light);">${t('universityHospitalsDesc')}</span>
                    </li>
                    <li style="padding: var(--spacing-xs) 0;">
                        <strong>${t('hotline')}</strong><br>
                        <span style="font-size: 0.9rem; color: var(--color-text-light);">${t('hotlineDesc')}</span>
                    </li>
                </ul>
                <div style="margin-top: var(--spacing-md); padding: var(--spacing-sm); background: rgba(16, 185, 129, 0.1); border-radius: 8px; border-left: 3px solid var(--color-secondary);">
                    <strong style="color: var(--color-secondary);">${t('confidentiality')}</strong> ${t('confidentialityText')}
                </div>
            </div>
        </div>

    `;
}

// El yıkama simülasyonunu yükle
function loadHandwashTab() {
    const container = document.getElementById('handwashTab');
    const t = getTranslation;

    container.innerHTML = `
        <div class="handwash-intro">
            <div class="info-card animate-fadeIn" style="text-align: center; border: none; background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);">
                <h3 style="color: var(--color-primary); margin-bottom: var(--spacing-sm);">${t('handwashTitle')}</h3>
                <p style="font-size: 1.125rem; color: var(--color-text); max-width: 700px; margin: 0 auto;">
                    ${t('handwashDesc')}
                </p>

            </div>
        </div>

        <div class="handwash-content-wrapper" style="display: grid; grid-template-columns: 1fr 1.3fr; gap: 2rem; align-items: start; margin-top: 3rem;">
            <div class="handwash-steps-container" style="margin: 0;">
            ${getAsepsisInfo().handHygiene.map((step, index) => `
                <div class="handwash-step-card animate-fadeIn" style="animation-delay: ${index * 0.1}s;">
                    <div class="step-number-badge">
                        <span class="step-number">${step.step}</span>
                    </div>
                    <div class="step-content">
                        <h4 class="step-title">${step.title}</h4>
                        <p class="step-description">${step.description}</p>
                    </div>
                </div>
            `).join('')}
            </div>
            
            <div class="video-container animate-fadeIn" style="animation-delay: 0.3s; position: sticky; top: 2rem;">
                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 16px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15); background: var(--color-bg-card);">
                    <video 
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 16px; object-fit: cover;" 
                        controls
                        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect fill='%23667eea' width='800' height='450'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='48' fill='white'%3E${t('handwashVideo')}%3C/text%3E%3C/svg%3E">
                        <source src="video/el yıkama vidyosu.mp4" type="video/mp4">
                        ${t('videoNotSupported')}
                    </video>
                </div>
            </div>
        </div>


    `;
}

// ==========================================
// İlerleme Sayfası
// ==========================================

function loadProgressPage() {
    const container = document.getElementById('progressContent');
    const stats = progressManager.getStats();
    const allBadges = progressManager.getAllBadges();
    const t = getTranslation;

    container.innerHTML = `
        <!-- Genel İstatistikler -->
        <div class="progress-card animate-fadeIn">
            <h3>${t('generalStats')}</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: var(--spacing-md); margin-top: var(--spacing-md);">
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: bold; color: var(--color-primary);">${stats.totalScore}</div>
                    <div style="color: var(--color-text-light);">${t('totalScore')}</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: bold; color: var(--color-secondary);">${stats.quizzesCompleted}</div>
                    <div style="color: var(--color-text-light);">${t('completedQuizzes')}</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: bold; color: var(--color-warning);">${stats.scenariosCompleted}</div>
                    <div style="color: var(--color-text-light);">${t('completedScenarios')}</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: bold; color: var(--color-primary);">${stats.accuracy}%</div>
                    <div style="color: var(--color-text-light);">${t('accuracyRate')}</div>
                </div>
            </div>
        </div>

        <!-- İlerleme Çubukları -->
        <div class="progress-card animate-fadeIn" style="animation-delay: 0.1s;">
            <h3>${t('progressTitle2')}</h3>
            
            <div style="margin-bottom: var(--spacing-md);">
                <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-xs);">
                    <span>${t('quizProgress')}</span>
                    <span>${stats.quizzesCompleted} / 10</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${Math.min((stats.quizzesCompleted / 10) * 100, 100)}%">
                        ${Math.min((stats.quizzesCompleted / 10) * 100, 100).toFixed(0)}%
                    </div>
                </div>
            </div>

            <div style="margin-bottom: var(--spacing-md);">
                <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-xs);">
                    <span>${t('scenarioProgress')}</span>
                    <span>${stats.scenariosCompleted} / 10</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${(stats.scenariosCompleted / 10) * 100}%">
                        ${((stats.scenariosCompleted / 10) * 100).toFixed(0)}%
                    </div>
                </div>
            </div>

            <div>
                <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-xs);">
                    <span>${t('correctAnswers')}</span>
                    <span>${stats.correctAnswers} / ${stats.totalAnswers}</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${stats.accuracy}%">
                        ${stats.accuracy}%
                    </div>
                </div>
            </div>
        </div>

        <!-- Rozetler -->
        <div class="progress-card animate-fadeIn" style="animation-delay: 0.2s;">
            <h3>${t('badges')}</h3>
            <div class="badges-grid">
                ${allBadges.map(badge => {
        const earned = stats.badges.includes(badge.id);
        return `
                        <div class="badge ${earned ? 'earned' : ''}" title="${badge.description}">
                            <div class="badge-icon">${badge.icon}</div>
                            <div class="badge-name">${badge.name}</div>
                        </div>
                    `;
    }).join('')}
            </div>
            <p style="margin-top: var(--spacing-md); color: var(--color-text-light); text-align: center;">
                ${stats.badges.length} / ${allBadges.length} ${t('badgesEarned')}
            </p>
        </div>

        <!-- Sıfırlama Butonu -->
        <div class="progress-card animate-fadeIn" style="animation-delay: 0.3s; text-align: center;">
            <button id="resetProgressBtn" class="btn btn-secondary">
                ${t('resetProgress')}
            </button>
        </div>
    `;

    // Sıfırlama butonu event listener
    document.getElementById('resetProgressBtn')?.addEventListener('click', () => {
        if (progressManager.resetProgress()) {
            loadProgressPage();
        }
    });
}

// ==========================================
// Tema Yönetimi (Dark Mode)
// ==========================================

class ThemeManager {
    constructor() {
        // Her zaman dark modda başlat (localStorage'dan okuma)
        this.theme = 'dark';
        this.init();
    }

    init() {
        // Her açılışta dark modu uygula
        this.applyTheme('dark');

        // Toggle butonu event listener
        document.getElementById('themeToggle')?.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.theme = theme;
        // localStorage'a kaydetme - her açılışta dark'tan başlasın

        // İkon güncelle
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);

        // Animasyon efekti
        document.body.style.animation = 'themeTransition 0.3s ease';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 300);
    }

    getTheme() {
        return this.theme;
    }
}

// Global theme manager instance
const themeManager = new ThemeManager();

// ==========================================
// Header Scroll Effect
// ==========================================
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 20) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }
});

// ==========================================
// Mobil Cihaz Uyarısı
// ==========================================
function checkMobileAndShowWarning() {
    // Mobil cihaz kontrolü
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSmallScreen = window.innerWidth <= 768;
    
    // Daha önce uyarı gösterilmiş mi kontrol et
    const warningShown = localStorage.getItem('desktopWarningShown');
    
    // Mobil cihaz veya küçük ekran ve daha önce gösterilmemişse
    if ((isMobile || isSmallScreen) && !warningShown) {
        // 1 saniye bekle, sonra uyarıyı göster
        setTimeout(() => {
            showDesktopWarning();
        }, 1000);
    }
}

function showDesktopWarning() {
    const t = getTranslation;
    
    // Uyarı container'ı oluştur
    const warningDiv = document.createElement('div');
    warningDiv.className = 'desktop-warning';
    warningDiv.innerHTML = `
        <div class="desktop-warning-content">
            <div class="desktop-warning-icon">💻</div>
            <div class="desktop-warning-text">
                <h4>${t('desktopWarningTitle')}</h4>
                <p>${t('desktopWarningMessage')}</p>
            </div>
            <button class="desktop-warning-btn" onclick="closeDesktopWarning()">
                ${t('desktopWarningButton')}
            </button>
        </div>
    `;
    
    document.body.appendChild(warningDiv);
    
    // Animasyon için kısa gecikme
    setTimeout(() => {
        warningDiv.classList.add('show');
    }, 100);
}

function closeDesktopWarning() {
    const warning = document.querySelector('.desktop-warning');
    if (warning) {
        warning.classList.remove('show');
        warning.classList.add('hide');
        
        // Animasyon bitince kaldır
        setTimeout(() => {
            warning.remove();
        }, 300);
        
        // LocalStorage'a kaydet (bir daha gösterme)
        localStorage.setItem('desktopWarningShown', 'true');
    }
}

// Global fonksiyon olarak tanımla
window.closeDesktopWarning = closeDesktopWarning;

// ==========================================
// Event Listeners ve Başlangıç
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Mobil cihaz kontrolü ve uyarı göster
    checkMobileAndShowWarning();
    
    // Dil değiştirme butonları
    document.querySelectorAll('.btn-lang').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            changeLanguage(lang);
            
            // Aktif butonu işaretle
            document.querySelectorAll('.btn-lang').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Logo'ya tıklama
    document.querySelector('.logo')?.addEventListener('click', () => {
        showPage('homePage');
    });

    // Ana sayfa butonuna tıklama
    document.getElementById('homeBtn')?.addEventListener('click', () => {
        showPage('homePage');
    });

    // Navigasyon kartlarına tıklama (eski tasarım)
    document.querySelectorAll('.nav-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.tagName !== 'BUTTON') {
                const pageId = card.dataset.page + 'Page';
                showPage(pageId);
            }
        });

        // Kart içindeki butona tıklama
        card.querySelector('button')?.addEventListener('click', (e) => {
            e.stopPropagation();
            const pageId = card.dataset.page + 'Page';
            showPage(pageId);
        });
    });

    // Yeni tasarım - Feature kartlarına tıklama
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const pageId = card.dataset.page + 'Page';
            if (pageId) {
                showPage(pageId);
            }
        });
    });

    // Yeni tasarım - Hero CTA butonları
    document.querySelectorAll('.cta-primary, .cta-secondary').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const pageId = btn.dataset.page + 'Page';
            if (pageId) {
                showPage(pageId);
            }
        });
    });

    // Sekme butonları
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;

            // Tüm sekme butonlarını pasif yap
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Tüm sekme içeriklerini gizle
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // İlgili sekme içeriğini göster
            const tabContent = document.getElementById(tabName + 'Tab');
            if (tabContent) {
                tabContent.classList.add('active');
            }
        });
    });

    // İlk yükleme - Ana sayfayı göster
    showPage('homePage');
});

// Rozet bildirimi için CSS (dinamik olarak ekle)
const style = document.createElement('style');
style.textContent = `
    .badge-notification {
        position: fixed;
        top: 80px;
        right: 20px;
        background: #ffffff;
        color: #1e293b;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        max-width: 320px;
        border: 2px solid #2563eb;
        animation: slideInRight 0.4s ease-out;
    }

    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .badge-notification-content {
        display: flex;
        gap: 14px;
        align-items: center;
    }

    .badge-notification-icon {
        font-size: 2.5rem;
        flex-shrink: 0;
    }

    .badge-notification-text {
        flex: 1;
        min-width: 0;
    }

    .badge-notification-text h4 {
        color: #2563eb;
        margin: 0 0 6px 0;
        font-size: 0.95rem;
        font-weight: 700;
        line-height: 1.3;
    }

    .badge-notification-text p {
        margin: 0;
        font-size: 0.8125rem;
        color: #1e293b;
        line-height: 1.4;
    }

    .badge-notification-text strong {
        color: #10b981;
        font-weight: 700;
    }

    .badge-notification.fade-out {
        animation: fadeOut 0.3s ease forwards;
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(400px);
        }
    }

    /* Mobil için optimize edilmiş tasarım */
    @media (max-width: 768px) {
        .badge-notification {
            top: auto;
            bottom: 20px;
            right: 12px;
            left: 12px;
            max-width: none;
            width: calc(100% - 24px);
            padding: 14px 16px;
            border-radius: 10px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        @keyframes slideInRight {
            from {
                transform: translateY(100px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        @keyframes fadeOut {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(100px);
            }
        }

        .badge-notification-content {
            gap: 12px;
        }

        .badge-notification-icon {
            font-size: 2rem;
        }

        .badge-notification-text h4 {
            font-size: 0.875rem;
            margin-bottom: 4px;
        }

        .badge-notification-text p {
            font-size: 0.75rem;
        }
    }

    /* Küçük mobil ekranlar */
    @media (max-width: 480px) {
        .badge-notification {
            bottom: 16px;
            right: 10px;
            left: 10px;
            width: calc(100% - 20px);
            padding: 12px 14px;
        }

        .badge-notification-content {
            gap: 10px;
        }

        .badge-notification-icon {
            font-size: 1.75rem;
        }

        .badge-notification-text h4 {
            font-size: 0.8125rem;
        }

        .badge-notification-text p {
            font-size: 0.6875rem;
        }
    }

    /* Çok küçük ekranlar */
    @media (max-width: 360px) {
        .badge-notification {
            padding: 10px 12px;
        }

        .badge-notification-icon {
            font-size: 1.5rem;
        }

        .badge-notification-text h4 {
            font-size: 0.75rem;
        }

        .badge-notification-text p {
            font-size: 0.625rem;
        }
    }

    /* Koyu Mod - Sabit Renkler */
    [data-theme="dark"] .badge-notification {
        background: #1e293b !important;
        border-color: #10b981 !important;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5) !important;
    }

    [data-theme="dark"] .badge-notification-text h4 {
        color: #10b981 !important;
    }

    [data-theme="dark"] .badge-notification-text p {
        color: #f1f5f9 !important;
    }

    [data-theme="dark"] .badge-notification-text strong {
        color: #2563eb !important;
    }

    /* Landscape mobil */
    @media (max-height: 600px) and (orientation: landscape) {
        .badge-notification {
            top: 10px;
            bottom: auto;
            right: 10px;
            left: auto;
            max-width: 280px;
            width: auto;
            padding: 10px 12px;
        }

        .badge-notification-icon {
            font-size: 1.5rem;
        }

        .badge-notification-text h4 {
            font-size: 0.75rem;
            margin-bottom: 2px;
        }

        .badge-notification-text p {
            font-size: 0.625rem;
        }

        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes fadeOut {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(400px);
            }
        }
    }

    /* Desktop Warning Styles */
    .desktop-warning {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .desktop-warning.show {
        opacity: 1;
    }

    .desktop-warning.hide {
        opacity: 0;
    }

    .desktop-warning-content {
        background: #ffffff;
        border-radius: 16px;
        padding: 24px;
        max-width: 400px;
        width: 100%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        text-align: center;
        transform: scale(0.9);
        transition: transform 0.3s ease;
    }

    .desktop-warning.show .desktop-warning-content {
        transform: scale(1);
    }

    .desktop-warning-icon {
        font-size: 3.5rem;
        margin-bottom: 16px;
        display: block;
    }

    .desktop-warning-text h4 {
        color: #2563eb;
        font-size: 1.25rem;
        font-weight: 700;
        margin: 0 0 12px 0;
        line-height: 1.3;
    }

    .desktop-warning-text p {
        color: #334155;
        font-size: 0.9375rem;
        line-height: 1.6;
        margin: 0 0 20px 0;
    }

    .desktop-warning-btn {
        background: linear-gradient(135deg, #2563eb, #1d4ed8);
        color: white;
        border: none;
        padding: 12px 32px;
        border-radius: 10px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        min-height: 44px;
        width: 100%;
    }

    .desktop-warning-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);
    }

    .desktop-warning-btn:active {
        transform: translateY(0);
    }

    /* Dark mode support */
    [data-theme="dark"] .desktop-warning-content {
        background: #1e293b;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
    }

    [data-theme="dark"] .desktop-warning-text h4 {
        color: #60a5fa;
    }

    [data-theme="dark"] .desktop-warning-text p {
        color: #cbd5e1;
    }

    /* Küçük ekranlar için */
    @media (max-width: 480px) {
        .desktop-warning {
            padding: 16px;
        }

        .desktop-warning-content {
            padding: 20px;
            max-width: 100%;
        }

        .desktop-warning-icon {
            font-size: 3rem;
            margin-bottom: 12px;
        }

        .desktop-warning-text h4 {
            font-size: 1.125rem;
        }

        .desktop-warning-text p {
            font-size: 0.875rem;
            margin-bottom: 16px;
        }

        .desktop-warning-btn {
            padding: 10px 24px;
            font-size: 0.9375rem;
        }
    }

    @media (max-width: 360px) {
        .desktop-warning-content {
            padding: 16px;
        }

        .desktop-warning-icon {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        .desktop-warning-text h4 {
            font-size: 1rem;
        }

        .desktop-warning-text p {
            font-size: 0.8125rem;
        }
    }
`;
document.head.appendChild(style);
