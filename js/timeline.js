// ==========================================
// CYBE Zaman Çizelgesi Modülü
// ==========================================

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    const diseaseSelect = document.getElementById('diseaseSelect');

    if (diseaseSelect) {
        loadDiseaseOptions();

        // Seçim değiştiğinde
        diseaseSelect.addEventListener('change', (e) => {
            const disease = e.target.value;
            if (disease) {
                showTimeline(disease);
            } else {
                document.getElementById('timelineContent').innerHTML = '';
            }
        });
    }
});

function loadDiseaseOptions() {
    const diseaseSelect = document.getElementById('diseaseSelect');
    const timelineData = getTimelineData();
    
    // Mevcut seçenekleri temizle (placeholder hariç)
    while (diseaseSelect.options.length > 1) {
        diseaseSelect.remove(1);
    }
    
    // Hastalıkları dropdown'a ekle
    Object.keys(timelineData).forEach(disease => {
        const option = document.createElement('option');
        option.value = disease;
        option.textContent = `${timelineData[disease].icon} ${disease}`;
        diseaseSelect.appendChild(option);
    });
}

function showTimeline(disease) {
    const timelineData = getTimelineData();
    const data = timelineData[disease];
    const container = document.getElementById('timelineContent');

    if (!data) return;

    let html = '';

    // Her aşama için
    data.stages.forEach((stage, index) => {
        html += `
            <div class="timeline-stage reveal">
                <div class="timeline-marker">${index + 1}</div>
                <div class="timeline-info">
                    <h3 class="stagger-item">${stage.title}</h3>
                    <h4 class="stagger-item"><span class="pulse-icon">⏱️</span> ${stage.time}</h4>
                    <p class="stagger-item"><strong>${stage.description}</strong></p>
                    <ul class="stagger-item">
                        ${stage.symptoms.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                    <div class="stagger-item" style="margin-top: var(--spacing-sm); padding: var(--spacing-xs) var(--spacing-sm); background: rgba(239, 68, 68, 0.1); border-radius: var(--radius-sm); color: var(--color-error); font-weight: 600;">
                        <span class="pulse-icon">⚠️</span> ${stage.risk}
                    </div>
                </div>
            </div>
        `;
    });

    // Uyarı mesajı
    html += `
        <div class="timeline-warning reveal">
            <span class="pulse-icon">💡</span> <strong>${getTranslation('important')}:</strong> ${data.warning}
        </div>
    `;

    container.innerHTML = html;

    // Scroll Reveal Observer
    initScrollReveal();
}

function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    // Aynı anda ekrana girenleri sıraya dizmek için kuyruk
    let revealQueue = [];
    let isProcessing = false;

    const processQueue = () => {
        if (revealQueue.length === 0) {
            isProcessing = false;
            return;
        }
        isProcessing = true;
        const nextEl = revealQueue.shift();
        nextEl.classList.add('active');

        // Her eleman arasında 300ms "slow" geçiş bekle
        setTimeout(processQueue, 300);
    };

    const observer = new IntersectionObserver((entries) => {
        // Ekrana girenleri listeye ekle ve dikey konumlarına göre sırala
        const intersectingEntries = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => a.target.offsetTop - b.target.offsetTop);

        intersectingEntries.forEach(entry => {
            if (!entry.target.classList.contains('active') && !revealQueue.includes(entry.target)) {
                revealQueue.push(entry.target);
                observer.unobserve(entry.target);
            }
        });

        if (!isProcessing && revealQueue.length > 0) {
            processQueue();
        }
    }, observerOptions);

    // Tüm reveal elemanlarını izle
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}