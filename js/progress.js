// ==========================================
// İlerleme Takip Sistemi - LocalStorage Yönetimi
// ==========================================

class ProgressManager {
    constructor() {
        this.storageKey = 'cybeEducationProgress';
        this.initializeProgress();
    }

    // İlerleme verisini başlat
    initializeProgress() {
        const savedProgress = this.loadProgress();
        if (!savedProgress) {
            const defaultProgress = {
                totalScore: 0,
                quizzesCompleted: 0,
                scenariosCompleted: 0,
                correctAnswers: 0,
                totalAnswers: 0,
                badges: [],
                completedScenarios: [],
                lastVisit: Date.now(),
                bestScore: 0
            };
            this.saveProgress(defaultProgress);
        } else {
            // Son ziyaret tarihini güncelle
            savedProgress.lastVisit = Date.now();
            this.saveProgress(savedProgress);
        }
    }

    // LocalStorage'dan veri yükle
    loadProgress() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error loading progress data:', error);
            return null;
        }
    }

    // LocalStorage'a veri kaydet
    saveProgress(progressData) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(progressData));
            return true;
        } catch (error) {
            console.error('Error saving progress data:', error);
            return false;
        }
    }

    // Quiz tamamlandığında güncelle
    updateQuizProgress(score, correctCount, totalCount) {
        const progress = this.loadProgress();

        progress.quizzesCompleted += 1;
        progress.totalScore += score;
        progress.correctAnswers += correctCount;
        progress.totalAnswers += totalCount;

        // En yüksek skoru güncelle
        if (score > progress.bestScore) {
            progress.bestScore = score;
        }

        // Rozetleri kontrol et ve ekle
        this.checkAndAwardBadges(progress);

        this.saveProgress(progress);
        return progress;
    }

    // Senaryo tamamlandığında güncelle
    updateScenarioProgress(scenarioId, isCorrect) {
        const progress = this.loadProgress();

        if (!progress.completedScenarios.includes(scenarioId)) {
            progress.completedScenarios.push(scenarioId);
            progress.scenariosCompleted += 1;
        }

        if (isCorrect) {
            progress.totalScore += 50; // Doğru senaryo kararı için bonus puan
        }

        // Rozetleri kontrol et
        this.checkAndAwardBadges(progress);

        this.saveProgress(progress);
        return progress;
    }

    // Rozet kontrolü ve ödüllendirme
    checkAndAwardBadges(progress) {
        const badges = [];

        // İlk Quiz Rozeti
        if (progress.quizzesCompleted >= 1 && !progress.badges.includes('first-quiz')) {
            badges.push({
                id: 'first-quiz',
                name: getTranslation('badgeFirstQuiz'),
                icon: '🎯',
                description: getTranslation('badgeFirstQuizDesc')
            });
        }

        // Quiz Ustası Rozeti
        if (progress.quizzesCompleted >= 5 && !progress.badges.includes('quiz-master')) {
            badges.push({
                id: 'quiz-master',
                name: getTranslation('badgeQuizMaster'),
                icon: '🏆',
                description: getTranslation('badgeQuizMasterDesc')
            });
        }

        // Mükemmel Skor Rozeti
        if (progress.bestScore >= 100 && !progress.badges.includes('perfect-score')) {
            badges.push({
                id: 'perfect-score',
                name: getTranslation('badgePerfectScore'),
                icon: '⭐',
                description: getTranslation('badgePerfectScoreDesc')
            });
        }

        // Senaryo Gezgini Rozeti
        if (progress.scenariosCompleted >= 10 && !progress.badges.includes('scenario-explorer')) {
            badges.push({
                id: 'scenario-explorer',
                name: getTranslation('badgeScenarioExplorer'),
                icon: '🎭',
                description: getTranslation('badgeScenarioExplorerDesc')
            });
        }

        // Senaryo Başlangıcı Rozeti
        if (progress.scenariosCompleted >= 1 && !progress.badges.includes('scenario-starter')) {
            badges.push({
                id: 'scenario-starter',
                name: getTranslation('badgeScenarioStarter'),
                icon: '🎬',
                description: getTranslation('badgeScenarioStarterDesc')
            });
        }

        // Bilgi Avcısı Rozeti
        if (progress.correctAnswers >= 50 && !progress.badges.includes('knowledge-hunter')) {
            badges.push({
                id: 'knowledge-hunter',
                name: getTranslation('badgeKnowledgeHunter'),
                icon: '📚',
                description: getTranslation('badgeKnowledgeHunterDesc')
            });
        }

        // Yeni rozetleri ekle
        badges.forEach(badge => {
            if (!progress.badges.includes(badge.id)) {
                progress.badges.push(badge.id);
                this.showBadgeNotification(badge);
            }
        });
    }

    // Rozet bildirimi göster
    showBadgeNotification(badge) {
        const notification = document.createElement('div');
        notification.className = 'badge-notification animate-scaleIn';
        notification.innerHTML = `
            <div class="badge-notification-content">
                <div class="badge-notification-icon">${badge.icon}</div>
                <div class="badge-notification-text">
                    <h4>${getTranslation('badgeNewBadge')}</h4>
                    <p><strong>${badge.name}</strong></p>
                    <p>${badge.description}</p>
                </div>
            </div>
        `;

        document.body.appendChild(notification);

        // 4 saniye sonra kaldır
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }

    // İstatistikleri al
    getStats() {
        const progress = this.loadProgress();
        const accuracy = progress.totalAnswers > 0
            ? Math.round((progress.correctAnswers / progress.totalAnswers) * 100)
            : 0;

        return {
            totalScore: progress.totalScore,
            quizzesCompleted: progress.quizzesCompleted,
            scenariosCompleted: progress.scenariosCompleted,
            correctAnswers: progress.correctAnswers,
            totalAnswers: progress.totalAnswers,
            accuracy: accuracy,
            badges: progress.badges,
            bestScore: progress.bestScore
        };
    }

    // Tüm rozetleri al
    getAllBadges() {
        return [
            {
                id: 'first-quiz',
                name: getTranslation('badgeFirstQuiz'),
                icon: '🎯',
                description: getTranslation('badgeFirstQuizDesc')
            },
            {
                id: 'scenario-starter',
                name: getTranslation('badgeScenarioStarter'),
                icon: '🎬',
                description: getTranslation('badgeScenarioStarterDesc')
            },
            {
                id: 'quiz-master',
                name: getTranslation('badgeQuizMaster'),
                icon: '🏆',
                description: getTranslation('badgeQuizMasterDesc')
            },
            {
                id: 'perfect-score',
                name: getTranslation('badgePerfectScore'),
                icon: '⭐',
                description: getTranslation('badgePerfectScoreDesc')
            },
            {
                id: 'scenario-explorer',
                name: getTranslation('badgeScenarioExplorer'),
                icon: '🎭',
                description: getTranslation('badgeScenarioExplorerDesc')
            },
            {
                id: 'knowledge-hunter',
                name: getTranslation('badgeKnowledgeHunter'),
                icon: '📚',
                description: getTranslation('badgeKnowledgeHunterDesc')
            }
        ];
    }

    // İlerlemeyi sıfırla
    resetProgress() {
        if (confirm(getTranslation('resetProgressConfirm'))) {
            localStorage.removeItem(this.storageKey);
            this.initializeProgress();
            return true;
        }
        return false;
    }
}

// Global instance oluştur
const progressManager = new ProgressManager();
