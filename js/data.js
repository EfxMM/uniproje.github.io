// ==========================================
// Quiz Soruları ve İçerik Verisi
// ==========================================

// Dil seçim fonksiyonu
function getCurrentDataLanguage() {
    return localStorage.getItem('selectedLanguage') || 'tr';
}

// Türkçe Quiz Verileri
const quizDataTr = [
    {
        id: 1,
        question: "HIV virüsü hangi yollarla bulaşmaz?",
        options: [
            "Korunmasız cinsel ilişki",
            "Tokalaşma ve sarılma",
            "Enfekte kan transfüzyonu",
            "Anneden bebeğe geçiş"
        ],
        correctAnswer: 1,
        explanation: "HIV virüsü günlük sosyal temas yoluyla (tokalaşma, sarılma, öpüşme) bulaşmaz. Sadece kan, cinsel sıvılar ve anne sütü yoluyla bulaşır.",
        category: "cybe"
    },
    {
        id: 2,
        question: "HPV aşısı hangi yaş aralığında en etkilidir?",
        options: [
            "40-50 yaş arası",
            "9-26 yaş arası",
            "60 yaş üzeri",
            "Sadece 18 yaşında"
        ],
        correctAnswer: 1,
        explanation: "HPV aşısı 9-26 yaş aralığında en etkilidir ve cinsel aktivite başlamadan önce yapılması önerilir.",
        category: "cybe"
    },
    {
        id: 3,
        question: "Hepatit B virüsüne karşı en etkili korunma yöntemi nedir?",
        options: [
            "Antibiyotik kullanımı",
            "Aşılama",
            "Vitamin takviyesi",
            "Sadece hijyenik yaşam"
        ],
        correctAnswer: 1,
        explanation: "Hepatit B'ye karşı en etkili korunma yöntemi aşılamadır. Aşı %95 oranında koruma sağlar.",
        category: "cybe"
    },
    {
        id: 4,
        question: "Klamidya enfeksiyonunun en yaygın belirtisi nedir?",
        options: [
            "Yüksek ateş ve baş ağrısı",
            "Genellikle belirti vermez (asemptomatik)",
            "Şiddetli karın ağrısı",
            "Deri döküntüleri"
        ],
        correctAnswer: 1,
        explanation: "Klamidya enfeksiyonu çoğu zaman belirti vermez, bu nedenle düzenli tarama önemlidir.",
        category: "cybe"
    },
    {
        id: 5,
        question: "Gonore (Bel soğukluğu) tedavi edilmezse hangi komplikasyona yol açabilir?",
        options: [
            "Kısırlık",
            "Diyabet",
            "Hipertansiyon",
            "Astım"
        ],
        correctAnswer: 0,
        explanation: "Tedavi edilmeyen gonore, hem erkeklerde hem kadınlarda kısırlığa yol açabilir.",
        category: "cybe"
    },
    {
        id: 6,
        question: "Sifiliz hangi aşamada en bulaşıcıdır?",
        options: [
            "Üçüncül (geç) dönem",
            "Birincil ve ikincil dönem",
            "Latent (gizli) dönem",
            "Hiçbir dönemde bulaşıcı değildir"
        ],
        correctAnswer: 1,
        explanation: "Sifiliz birincil ve ikincil dönemde en bulaşıcıdır. Bu dönemlerde yara ve döküntüler görülür.",
        category: "cybe"
    },
    {
        id: 7,
        question: "Kondom kullanımı hangi CYBE'lere karşı %100 koruma sağlar?",
        options: [
            "Tüm CYBE'lere karşı %100 korur",
            "Hiçbirine karşı koruma sağlamaz",
            "Tam koruma sağlamaz ama riski önemli ölçüde azaltır",
            "Sadece HIV'e karşı korur"
        ],
        correctAnswer: 2,
        explanation: "Kondom doğru kullanıldığında CYBE riskini önemli ölçüde azaltır ancak %100 koruma sağlamaz. Yine de en etkili korunma yöntemlerinden biridir.",
        category: "cybe"
    },
    {
        id: 8,
        question: "Bir kişinin dışarıdan sağlıklı görünmesi, o kişide CYBE (Örn: HIV, Hepatit B) bulunmadığı anlamına gelir mi?",
        options: [
            "Evet, belirtisi olmayan kişi bulaştıramaz",
            "Hayır, birçok CYBE yıllarca hiç belirti vermeden vücutta kalabilir ve bulaşabilir",
            "Sadece fiziksel yaralar varsa hastalık vardır",
            "Sadece ateşli hastalıklar cinsel yolla bulaşır"
        ],
        correctAnswer: 1,
        explanation: "Birçok cinsel yolla bulaşan enfeksiyon (özellikle HIV, HPV ve Hepatit virüsleri) yıllarca hiçbir fiziksel belirti vermeden vücutta yaşayabilir. Bu kişilere 'taşıyıcı' denir; kişi kendini sağlıklı hissetse bile enfeksiyonu başkalarına bulaştırabilir. Bu yüzden test yaptırmak tek kesin yoldur.",
        category: "cybe"
    },
    {
        id: 9,
        question: "Ellerin doğru yıkanma süresi en az kaç saniye olmalıdır?",
        options: [
            "5 saniye",
            "10 saniye",
            "20 saniye",
            "60 saniye"
        ],
        correctAnswer: 2,
        explanation: "Eller en az 20 saniye boyunca sabun ve suyla yıkanmalıdır.",
        category: "asepsi"
    },
    {
        id: 10,
        question: "Sterilizasyon ile dezenfeksiyon arasındaki fark nedir?",
        options: [
            "Aynı şeylerdir",
            "Sterilizasyon tüm mikroorganizmaları yok eder, dezenfeksiyon çoğunu azaltır",
            "Dezenfeksiyon daha etkilidir",
            "Sterilizasyon sadece bakterileri öldürür"
        ],
        correctAnswer: 1,
        explanation: "Sterilizasyon tüm mikroorganizmaları (sporlar dahil) yok ederken, dezenfeksiyon çoğu mikroorganizmayı azaltır veya yok eder.",
        category: "asepsi"
    },
    {
        id: 11,
        question: "Hangi durumlarda mutlaka el yıkanmalıdır?",
        options: [
            "Sadece tuvaletten sonra",
            "Sadece yemekten önce",
            "Tuvalet sonrası, yemek öncesi/sonrası, hasta ziyareti sonrası",
            "Günde bir kez yeterlidir"
        ],
        correctAnswer: 2,
        explanation: "El yıkama tuvaletten sonra, yemekten önce ve sonra, hasta ziyareti sonrası, öksürme/hapşırma sonrası mutlaka yapılmalıdır.",
        category: "asepsi"
    },
    {
        id: 12,
        question: "Bakteriler hangi ortamda en hızlı çoğalır?",
        options: [
            "Soğuk ve kuru ortam",
            "Sıcak ve nemli ortam",
            "Aşırı sıcak ortam",
            "Donmuş ortam"
        ],
        correctAnswer: 1,
        explanation: "Bakteriler sıcak (20-40°C) ve nemli ortamlarda en hızlı çoğalır. Bu nedenle hijyen ve uygun saklama koşulları önemlidir.",
        category: "mikrobiyoloji"
    },
    {
        id: 13,
        question: "Virüsler ve bakteriler arasındaki temel fark nedir?",
        options: [
            "Virüsler daha büyüktür",
            "Virüsler canlı hücre içinde çoğalır, bakteriler bağımsız çoğalabilir",
            "Bakteriler antibiyotikle tedavi edilemez",
            "Hiçbir fark yoktur"
        ],
        correctAnswer: 1,
        explanation: "Virüsler canlı hücre içinde çoğalırken, bakteriler bağımsız olarak çoğalabilir. Bu nedenle tedavi yöntemleri farklıdır.",
        category: "mikrobiyoloji"
    },
    {
        id: 14,
        question: "Düzenli CYBE taraması neden önemlidir?",
        options: [
            "Sadece belirtisi olanlar test olmalıdır",
            "Çoğu CYBE belirti vermez, erken teşhis tedaviyi kolaylaştırır",
            "Test olmaya gerek yoktur",
            "Sadece yaşlılar test olmalıdır"
        ],
        correctAnswer: 1,
        explanation: "Birçok CYBE belirti vermez veya geç belirti verir. Düzenli tarama erken teşhis ve tedavi için kritik öneme sahiptir.",
        category: "cybe"
    },
    {
        id: 15,
        question: "Cinsel sağlık konusunda bilgi almak için en güvenilir kaynak hangisidir?",
        options: [
            "Sosyal medya paylaşımları",
            "Sağlık profesyonelleri ve resmi sağlık kuruluşları",
            "Arkadaş tavsiyeleri",
            "İnternet forumları"
        ],
        correctAnswer: 1,
        explanation: "Cinsel sağlık konusunda en güvenilir bilgi kaynağı sağlık profesyonelleri ve T.C. Sağlık Bakanlığı, DSÖ gibi resmi kuruluşlardır.",
        category: "cybe"
    }
];

// ==========================================
// Senaryo Verileri
// ==========================================

const scenariosData = [
    {
        id: 1,
        title: "Yeni İlişki Başlangıcı",
        description: "Yeni bir ilişkiye başlıyorsunuz",
        icon: "💑",
        difficulty: "Kolay",
        situation: "Ayşe ve Mehmet 3 aydır birlikte ve ilişkilerini bir sonraki aşamaya taşımayı düşünüyorlar. Ayşe, cinsel sağlık konusunda endişeli ve ne yapması gerektiğinden emin değil. Mehmet de bu konuda bilgili olmak istiyor.",
        choices: [
            {
                text: "İkisi de CYBE testi yaptırmalı ve sonuçları paylaşmalı",
                outcome: "Mükemmel karar! İkiniz de test yaptırarak birbirinize saygı gösterdiniz ve sağlıklı bir ilişki temeli oluşturdunuz. Bu açık iletişim ilişkinizi güçlendirecektir.",
                isCorrect: true,
                explanation: "Yeni bir cinsel ilişkiye başlamadan önce her iki partnerin de CYBE testi yaptırması ve sonuçları paylaşması en sağlıklı yaklaşımdır. Bu hem güven oluşturur hem de sağlığınızı korur. Açık iletişim sağlıklı ilişkilerin temelidir."
            },
            {
                text: "Test yaptırmaya gerek yok, sadece kondom kullanmak yeterli",
                outcome: "Kondom kullanmak önemli ama yeterli değil. Test yaptırmak daha güvenli bir başlangıç sağlar ve her iki partnerin de sağlık durumunu bilmesi önemlidir.",
                isCorrect: false,
                explanation: "Kondom kullanımı önemli bir koruma yöntemidir ancak %100 koruma sağlamaz. Ayrıca bazı CYBE'ler (HPV gibi) kondomla tam korunamaz. Test yaptırmak en güvenli yaklaşımdır ve ilişkiye sağlıklı başlamanızı sağlar."
            },
            {
                text: "Birbirlerine güveniyorlarsa test yaptırmaya gerek yok",
                outcome: "Güven önemlidir ama sağlık konusunda risk almamak gerekir. Birçok CYBE belirti vermez ve kişi enfekte olduğunu bilmeyebilir.",
                isCorrect: false,
                explanation: "Güven ilişkinin temelidir ancak birçok CYBE belirti vermez ve kişi enfekte olduğunu bilmeyebilir. Test yaptırmak güvensizlik değil, sorumluluk göstergesidir. Sağlık konusunda bilinçli olmak ilişkiyi korur."
            }
        ]
    },
    {
        id: 2,
        title: "Acil Durum Yönetimi",
        description: "Korunmasız ilişki sonrası endişe",
        icon: "🚨",
        difficulty: "Orta",
        situation: "Can, bir parti sonrası korunmasız cinsel ilişkiye girdiğini fark etti. Sabah uyandığında durumu fark eden Can çok endişeli ve ne yapması gerektiğini bilmiyor. Arkadaşlarına danışmayı düşünüyor ama utanıyor.",
        choices: [
            {
                text: "Birkaç hafta beklemeli ve belirti çıkarsa doktora gitmeli",
                outcome: "Beklemek riskli! Birçok CYBE belirti vermez ve erken müdahale şansını kaçırabilirsiniz. Bazı önleyici tedaviler sadece ilk günlerde etkilidir.",
                isCorrect: false,
                explanation: "Beklemek tehlikelidir çünkü bazı önleyici tedaviler sadece ilk 72 saat içinde etkilidir. Ayrıca birçok CYBE belirti vermez, bu nedenle erken test ve müdahale hayati önem taşır. Zaman kaybetmek sağlığınızı riske atar."
            },
            {
                text: "Hemen bir sağlık kuruluşuna başvurmalı ve durumu açıklamalı",
                outcome: "Doğru karar! Erken müdahale çok önemli. Sağlık profesyonelleri size en iyi şekilde yardımcı olacak ve gerekli önlemleri alacaktır. Utanmaya gerek yok, bu çok yaygın bir durumdur.",
                isCorrect: true,
                explanation: "Korunmasız ilişki sonrası 72 saat içinde (tercihen 24 saat içinde) sağlık kuruluşuna başvurmak önemlidir. PEP (Post-Exposure Prophylaxis) gibi önleyici tedaviler erken başlandığında etkilidir. Sağlık profesyonelleri bu durumlarla sık karşılaşır ve yardımcı olmak için oradadır."
            },
            {
                text: "İnternetten ilaç araştırıp kendi kendine tedavi etmeli",
                outcome: "Tehlikeli! Kendi kendine tedavi ciddi sağlık sorunlarına yol açabilir. Yanlış ilaç kullanımı durumu daha da kötüleştirebilir. Mutlaka uzman desteği alın.",
                isCorrect: false,
                explanation: "Kendi kendine tedavi son derece tehlikelidir. Yanlış ilaç kullanımı durumu daha da kötüleştirebilir, yan etkilere neden olabilir ve doğru tedaviyi geciktirebilir. Mutlaka sağlık profesyoneline danışılmalıdır."
            }
        ]
    },
    {
        id: 3,
        title: "Arkadaş Desteği",
        description: "Arkadaşınız size danışıyor",
        icon: "🤝",
        difficulty: "Kolay",
        situation: "Zeynep, yakın arkadaşı Elif'in CYBE testi yaptırmaktan korktuğunu ve utandığını öğrendi. Elif, yeni bir ilişkisi var ve test yaptırmak istiyor ama cesaretini toplayamıyor. Zeynep'ten tavsiye istiyor ve ne yapması gerektiğini sorguluyor.",
        choices: [
            {
                text: "Elif'e test yaptırmanın gereksiz olduğunu, endişelenmemesini söylemeli",
                outcome: "Yanlış tavsiye! Test yaptırmak önemlidir ve ertelenmemelidir. Bu tavsiye arkadaşınızın sağlığını riske atabilir.",
                isCorrect: false,
                explanation: "Test yaptırmayı ertelemek veya gereksiz göstermek yanlış bir tavsiyeldir. Erken teşhis tedavi şansını artırır ve bulaşı önler. Arkadaşınıza doğru bilgi vermek onun sağlığını korur."
            },
            {
                text: "Bu konuda tavsiye vermemeli, Elif'in kendi kararını vermesini beklemeli",
                outcome: "Destek olmak önemlidir. Sessiz kalmak yerine bilgilendirici ve destekleyici olun. Arkadaşınız size güveniyor ve yardımınıza ihtiyacı var.",
                isCorrect: false,
                explanation: "Arkadaşınız size danıştığında bilgilendirici ve destekleyici olmak önemlidir. Doğru bilgi vermek ve destek olmak arkadaşlığın bir parçasıdır. Sessiz kalmak yardımcı olmaz."
            },
            {
                text: "Elif'e test yaptırmanın normal ve önemli olduğunu, birlikte gidebileceklerini söylemeli",
                outcome: "Harika bir arkadaşsınız! Destek olmak ve bilgilendirmek en doğru yaklaşım. Elif'in yanında olmanız onun cesaretini artıracak ve sağlıklı bir karar almasını sağlayacaktır.",
                isCorrect: true,
                explanation: "CYBE testi yaptırmak utanılacak bir şey değil, aksine sorumlu bir davranıştır. Arkadaşınıza destek olmak ve birlikte gitmek onun cesaretini artırabilir. Sağlık profesyonelleri bu konuda çok anlayışlıdır ve yardımcı olmak için oradadır."
            }
        ]
    },
    {
        id: 4,
        title: "Üniversite Yaşamı",
        description: "Kampüste cinsel sağlık farkındalığı",
        icon: "🎓",
        difficulty: "Orta",
        situation: "Üniversite öğrencisi Deniz, kampüste arkadaşlarının cinsel sağlık konusunda yeterli bilgiye sahip olmadığını fark ediyor. Bazı arkadaşları kondomu gereksiz buluyor, bazıları ise CYBE testlerinin pahalı olduğunu düşünüyor. Deniz ne yapmalı?",
        choices: [
            {
                text: "Herkes kendi işine bakmalı, bu kişisel bir konu",
                outcome: "Yanlış yaklaşım! Cinsel sağlık toplum sağlığını etkiler. Bilgi paylaşımı ve farkındalık herkesin sorumluluğudur.",
                isCorrect: false,
                explanation: "Cinsel sağlık sadece kişisel değil, toplumsal bir konudur. CYBE'ler bulaşıcıdır ve bilgisizlik yayılmalarına neden olur. Doğru bilgiyi paylaşmak toplum sağlığını korur ve hayat kurtarabilir."
            },
            {
                text: "Üniversite sağlık merkezinden bilgi alıp arkadaşlarıyla paylaşmalı, farkındalık oluşturmalı",
                outcome: "Mükemmel! Bilgi paylaşımı ve farkındalık oluşturmak toplum sağlığı için çok önemli. Üniversite sağlık merkezleri genellikle ücretsiz veya uygun fiyatlı hizmetler sunar.",
                isCorrect: true,
                explanation: "Cinsel sağlık konusunda farkındalık oluşturmak toplum sağlığı için kritik öneme sahiptir. Üniversite sağlık merkezleri genellikle öğrencilere ücretsiz veya çok uygun fiyatlı CYBE testleri ve danışmanlık hizmetleri sunar. Doğru bilgiyi yaymak hayat kurtarabilir."
            },
            {
                text: "Arkadaşlarına sadece kondom kullanmalarını söylemeli, test gereksiz",
                outcome: "Eksik bilgi! Kondom önemli ama tek başına yeterli değil. Düzenli test ve bilgilendirme de gereklidir.",
                isCorrect: false,
                explanation: "Kondom kullanımı önemli bir koruma yöntemidir ancak tek başına yeterli değildir. Düzenli testler, doğru bilgilendirme ve farkındalık da cinsel sağlığın önemli parçalarıdır. Kapsamlı bir yaklaşım gereklidir."
            }
        ]
    },
    {
        id: 5,
        title: "Aile Planlaması Danışmanlığı",
        description: "Evlilik öncesi hazırlık",
        icon: "💍",
        difficulty: "Kolay",
        situation: "Selin ve Emre evlenmeye karar verdiler. Düğün hazırlıkları devam ederken, Selin'in annesi onlara evlilik öncesi sağlık kontrolü yaptırmalarını öneriyor. Emre, 'Zaten sağlıklıyız, gerek yok' diyor. Selin ne yapmalı?",
        choices: [
            {
                text: "Emre haklı, sağlıklı görünüyorlarsa test gereksiz",
                outcome: "Yanlış! Birçok CYBE belirti vermez. Sağlıklı görünmek, enfeksiyon olmadığı anlamına gelmez. Test yaptırmak önemlidir.",
                isCorrect: false,
                explanation: "Birçok CYBE belirti vermez ve kişi enfekte olduğunu bilmeyebilir. Sağlıklı görünmek, enfeksiyon olmadığı anlamına gelmez. Evlilik öncesi test yaptırmak, gelecekteki sağlık sorunlarını önler ve aile planlaması için önemlidir."
            },
            {
                text: "Sadece kadın test yaptırmalı, erkeklerde CYBE riski düşük",
                outcome: "Tamamen yanlış! CYBE'ler hem erkekleri hem kadınları eşit şekilde etkiler. Her iki partner de test yaptırmalıdır.",
                isCorrect: false,
                explanation: "Bu tamamen yanlış bir düşüncedir. CYBE'ler hem erkekleri hem kadınları eşit şekilde etkiler. Her iki partnerin de test yaptırması gerekir. Cinsiyet ayrımı yapmak sağlık konusunda tehlikelidir."
            },
            {
                text: "Annesinin tavsiyesini dinlemeli, ikisi de kapsamlı sağlık kontrolü ve CYBE testi yaptırmalı",
                outcome: "Çok doğru! Evlilik öncesi sağlık kontrolü ve CYBE testleri, sağlıklı bir aile hayatının temelini atar. Bu hem sizin hem de gelecekteki çocuklarınızın sağlığı için önemlidir.",
                isCorrect: true,
                explanation: "Evlilik öncesi sağlık kontrolü ve CYBE testleri yapmak, sağlıklı bir aile hayatının temelini atar. Bazı CYBE'ler belirti vermeden taşınabilir ve gelecekte çocuklara da bulaşabilir. Erken teşhis ve tedavi hem sizin hem de gelecekteki çocuklarınızın sağlığını korur."
            }
        ]
    },
    {
        id: 6,
        title: "Sosyal Medya Bilgilendirmesi",
        description: "Yanlış bilgilerle mücadele",
        icon: "📱",
        difficulty: "Orta",
        situation: "Ahmet, sosyal medyada 'CYBE'ler sadece belirli yaşam tarzına sahip insanlarda görülür' diyen bir paylaşım görüyor. Yorumlarda birçok kişi bu bilgiyi doğru sanıyor ve test yaptırmayı gereksiz buluyor. Ahmet ne yapmalı?",
        choices: [
            {
                text: "Karışmamalı, herkes kendi bilgisine göre hareket eder",
                outcome: "Yanlış! Yanlış sağlık bilgileri hayati tehlike oluşturabilir. Doğru bilgiyi paylaşmak sosyal sorumluluktur.",
                isCorrect: false,
                explanation: "Yanlış sağlık bilgileri hayati tehlike oluşturabilir ve insanların sağlığını riske atabilir. Doğru bilgiyi paylaşmak ve yanlış bilgileri düzeltmek sosyal sorumluluktur. Sessiz kalmak, yanlış bilginin yayılmasına katkıda bulunur."
            },
            {
                text: "Güvenilir kaynaklardan doğru bilgiyi paylaşmalı ve yanlış bilgiyi düzeltmeli",
                outcome: "Harika! Sosyal medyada doğru bilgi paylaşmak ve yanlış bilgileri düzeltmek toplum sağlığı için çok önemli. Güvenilir kaynaklara yönlendirme yapmanız değerlidir.",
                isCorrect: true,
                explanation: "Sosyal medyada yanlış sağlık bilgileri hızla yayılabilir ve ciddi sonuçlara yol açabilir. CYBE'ler yaşam tarzından bağımsız olarak herkesi etkileyebilir. Doğru bilgiyi güvenilir kaynaklardan (Sağlık Bakanlığı, DSÖ) paylaşmak ve yanlış bilgileri düzeltmek toplum sağlığı için kritik öneme sahiptir."
            },
            {
                text: "Paylaşımı beğenmeli ve desteklemeli, çoğunluk haklıdır",
                outcome: "Çok yanlış! Çoğunluk her zaman haklı değildir, özellikle sağlık konularında. Bilimsel gerçeklere dayanmak önemlidir.",
                isCorrect: false,
                explanation: "Sağlık konularında çoğunluk görüşü değil, bilimsel gerçekler önemlidir. CYBE'ler herkesi etkileyebilir ve yaşam tarzı ayrımı yapmak tehlikelidir. Yanlış bilgiyi desteklemek toplum sağlığına zarar verir."
            }
        ]
    },
    {
        id: 7,
        title: "İş Yerinde Farkındalık",
        description: "Çalışma ortamında sağlık bilinci",
        icon: "💼",
        difficulty: "Orta",
        situation: "Büyük bir şirkette İK uzmanı olan Aylin, çalışanların cinsel sağlık konusunda bilgilendirilmesi için bir seminer düzenlemeyi düşünüyor. Ancak bazı yöneticiler 'Bu konu çok özel, iş yerine uygun değil' diyor. Şirket sahibi Aylin'den görüş istiyor.",
        choices: [
            {
                text: "Semineri iptal etmeli, bu konu iş yerine uygun değil",
                outcome: "Yanlış! Çalışan sağlığı her konuyu kapsar. CYBE farkındalığı önemli bir halk sağlığı konusudur.",
                isCorrect: false,
                explanation: "Cinsel sağlık, genel sağlığın ayrılmaz bir parçasıdır. İş yerleri çalışanlarının fiziksel ve mental sağlığını desteklemekle sorumludur. CYBE farkındalığı tabu değil, bilimsel bir konudur ve profesyonel ortamlarda ele alınmalıdır."
            },
            {
                text: "Sadece gönüllü çalışanlara özel, gizli bir toplantı düzenlemeli",
                outcome: "Kısmen doğru ama yeterli değil. Gizlilik yerine açık ve profesyonel bir yaklaşım daha etkilidir.",
                isCorrect: false,
                explanation: "Gönüllülük önemli olsa da, konuyu 'gizli' tutmak stigmaya neden olabilir. Açık, profesyonel ve bilimsel bir yaklaşımla sunulan eğitimler daha etkilidir ve konunun normalleşmesine yardımcı olur."
            },
            {
                text: "Semineri düzenlemeli, çalışan sağlığı her konuyu kapsar ve CYBE farkındalığı önemlidir",
                outcome: "Mükemmel karar! İş yerinde sağlık eğitimleri çalışan refahını artırır. CYBE farkındalığı toplum sağlığının bir parçasıdır ve profesyonel ortamlarda da ele alınmalıdır.",
                isCorrect: true,
                explanation: "İş yerleri çalışan sağlığını desteklemekle yükümlüdür. CYBE farkındalığı, genel sağlık eğitiminin önemli bir parçasıdır. Profesyonel ve bilimsel bir yaklaşımla sunulan bu tür seminerler, çalışanların sağlık bilincini artırır ve toplum sağlığına katkıda bulunur."
            }
        ]
    },
    {
        id: 8,
        title: "Sağlık Turizmi Riski",
        description: "Yurt dışı seyahat ve sağlık",
        icon: "✈️",
        difficulty: "Zor",
        situation: "Murat, arkadaşlarıyla yurt dışına tatile gidiyor. Tatil sırasında yeni tanıştığı biriyle yakınlaşıyor. Arkadaşları 'Tatilde herkes özgürdür, eğlen' diyor. Murat ne yapmalı?",
        choices: [
            {
                text: "Tatilde kurallar farklıdır, endişelenmesine gerek yok",
                outcome: "Çok tehlikeli! CYBE'ler tatil yapmaz. Yurt dışında risk daha da yüksek olabilir.",
                isCorrect: false,
                explanation: "Bu son derece tehlikeli bir düşüncedir. Tatil ortamları ve yeni tanışılan kişilerle olan ilişkiler daha yüksek risk taşıyabilir. Bazı ülkelerde CYBE oranları daha yüksektir. Tatilde de korunma önlemleri mutlaka alınmalıdır."
            },
            {
                text: "Arkadaşlarının tavsiyesini dinlemeli, herkes böyle yapıyor",
                outcome: "Yanlış! Akran baskısı sağlık kararlarınızı etkilememeli. Kendi sağlığınız önceliklidir.",
                isCorrect: false,
                explanation: "Akran baskısı ve 'herkes yapıyor' mantığı sağlık konularında tehlikelidir. Kendi sağlığınız ve geleceğiniz söz konusudur. Arkadaşlarınızın tavsiyeleri yerine bilimsel gerçeklere ve kendi sağlığınıza öncelik vermelisiniz."
            },
            {
                text: "Korunma yöntemlerini mutlaka kullanmalı, yurt dışında da riskler aynı",
                outcome: "Çok doğru! Coğrafi konum CYBE riskini değiştirmez. Tatilde de korunma önlemleri aynı derecede önemlidir.",
                isCorrect: true,
                explanation: "CYBE'ler coğrafi sınır tanımaz. Yurt dışında, tatilde veya farklı ortamlarda da korunma önlemleri aynı derecede önemlidir. 'Tatil özgürlüğü' sağlık risklerini ortadan kaldırmaz. Kondom kullanımı ve bilinçli davranmak her zaman gereklidir."
            }
        ]
    },
    {
        id: 9,
        title: "Genç Ebeveyn Sorumluluğu",
        description: "Çocuğa cinsel sağlık eğitimi",
        icon: "👨‍👩‍👧",
        difficulty: "Orta",
        situation: "18 yaşındaki kızı Zehra'nın üniversiteye başlayacağını öğrenen anne Fatma, kızıyla cinsel sağlık konusunda konuşmak istiyor. Ancak eşi 'Bu konuları konuşmak ayıp, kızımız zaten iyi bir çocuk' diyor. Fatma ne yapmalı?",
        choices: [
            {
                text: "Eşini ikna etmeli ve kızıyla açık, bilimsel bir şekilde konuşmalı",
                outcome: "Mükemmel! Ebeveyn-çocuk iletişimi çok önemli. Bilimsel ve açık iletişim gençleri korur.",
                isCorrect: true,
                explanation: "Ebeveynlerin çocuklarıyla cinsel sağlık konusunda açık ve bilimsel konuşması son derece önemlidir. Bu 'ayıp' değil, sorumluluktur. Doğru bilgiyle donanmış gençler daha bilinçli kararlar alır ve kendilerini koruyabilir. Sessiz kalmak gençleri yanlış bilgilere ve risklere açık bırakır."
            },
            {
                text: "Eşinin dediğini yapmalı, bu konular konuşulmaz",
                outcome: "Çok yanlış! Sessiz kalmak gençleri korumaz, aksine riske atar. Bilgi en iyi korumadır.",
                isCorrect: false,
                explanation: "Bu yaklaşım gençleri korumaz, aksine bilgisiz ve savunmasız bırakır. Cinsel sağlık eğitimi almayan gençler yanlış kaynaklardan bilgi edinir ve riskli davranışlarda bulunabilir. Ebeveyn sorumluluğu çocuğu doğru bilgiyle donatmaktır."
            },
            {
                text: "Kızına sadece 'dikkatli ol' demeli, detaya girmemeli",
                outcome: "Yetersiz! Genel uyarılar yeterli değil. Spesifik, bilimsel bilgi gereklidir.",
                isCorrect: false,
                explanation: "Genel ve belirsiz uyarılar gençlere yeterli koruma sağlamaz. Spesifik bilgiler (CYBE türleri, korunma yöntemleri, test yaptırma, acil durumlar) verilmelidir. 'Dikkatli ol' demek yeterli değildir, nasıl dikkatli olacağını öğretmek gerekir."
            }
        ]
    },
    {
        id: 10,
        title: "Sağlık Çalışanı Etiği",
        description: "Hasta mahremiyeti ve bilgilendirme",
        icon: "⚕️",
        difficulty: "Zor",
        situation: "Hemşire Elif, acil serviste 17 yaşında bir hastanın CYBE testi pozitif çıktığını öğreniyor. Hastanın ailesi test sonuçlarını öğrenmek istiyor. Hasta ailesine söylenmemesini rica ediyor. Elif ne yapmalı?",
        choices: [
            {
                text: "Aileye hemen bilgi vermeli, hasta reşit değil",
                outcome: "Yanlış! 17 yaş üzeri bireyin sağlık mahremiyeti vardır. Zorla bilgi vermek etik ihlaldir.",
                isCorrect: false,
                explanation: "Bu etik ve yasal bir ihlaldir. 17 yaş üzeri bireyler sağlık konularında karar verebilir. Hasta mahremiyetini ihlal etmek güven kaybına ve gençlerin sağlık hizmetlerinden kaçınmasına neden olur. Hasta rızası olmadan bilgi verilemez."
            },
            {
                text: "Hastayı ailesine söylemesi için zorlamalı, yoksa tedavi etmemeli",
                outcome: "Etik ihlal! Tedaviyi şarta bağlamak ve hasta zorlamak kabul edilemez.",
                isCorrect: false,
                explanation: "Tedaviyi şarta bağlamak ve hastayı zorlamak ciddi etik ihlaldir. Sağlık çalışanları hastayı desteklemeli, danışmanlık sunmalı ama asla zorlamamalıdır. Her hastanın kendi kararını verme hakkı vardır."
            },
            {
                text: "Hasta mahremiyetini korumalı, 17 yaş üzeri bireyin kendi kararı önemlidir",
                outcome: "Doğru! Hasta mahremiyeti ve özerkliği temel tıbbi etik ilkesidir. 17 yaş üzeri birey kendi sağlık bilgilerini kontrol edebilir.",
                isCorrect: true,
                explanation: "Hasta mahremiyeti temel bir haktır. 17 yaş üzeri bireyler kendi sağlık bilgileri konusunda karar verebilir. Sağlık çalışanları hasta mahremiyetini korumakla yükümlüdür. Hastayı ailesine danışmanlık almaya teşvik edebilir ama zorla bilgi veremez."
            }
        ]
    },
    {
        id: 11,
        title: "Kan Bağışı ve Güvenlik",
        description: "Şüpheli ilişki sonrası kan bağışı",
        icon: "🩸",
        difficulty: "Orta",
        situation: "Ahmet düzenli bir kan bağışçısıdır. Ancak geçen ay korunmasız ve şüpheli bir cinsel birlikteliği olmuştur. Bugün kan verme günü geldiğinde Ahmet ne yapmalı?",
        choices: [
            {
                text: "Durumu kan merkezi doktoruna dürüstçe anlatmalı ve test sonuçlarını beklemeli",
                outcome: "En güvenli ve sorumlu karar! Kan merkezleri bağışçı mahremiyetine saygı duyar ve bu dürüstlük hayat kurtarır.",
                isCorrect: true,
                explanation: "Kan bağışçılarının dürüstlüğü kan güvenliği için kritiktir. Şüpheli bir durum sonrası 'pencere dönemi' riski nedeniyle kan verilmemelidir. Doktorla yapılan görüşme sonucunda Ahmet'in bir süre bağış yapmaması gerekebilir. Bu hem kanı alacak hastayı hem de Ahmet'in sağlığını korur."
            },
            {
                text: "Bir şey olmaz diyerek kan vermeli, zaten kanlar test ediliyor",
                outcome: "Çok tehlikeli! Bazı enfeksiyonlar testlerde hemen görünmeyebilir (pencere dönemi). Bu risk bir başkasının hayatını tehlikeye atar.",
                isCorrect: false,
                explanation: "Bağışlanan kanlar test edilir ancak 'pencere dönemi' denilen dönemde enfeksiyonlar testlerde saptanamayabilir. Bu nedenle dürüstlük ilk savunma hattıdır. 'Test ediliyor zaten' diyerek risk almak etik dışıdır."
            },
            {
                text: "Sadece AIDS testim negatif çıktı diyerek diğer riskleri gizlemeli",
                outcome: "Eksik bilgi risktir! Sadece HIV değil, Hepatit, Sifiliz gibi diğer CYBE'ler de kan yoluyla bulaşabilir.",
                isCorrect: false,
                explanation: "Cinsel yolla bulaşan birçok hastalık kan yoluyla da geçebilir. Tek bir testin negatif olması tüm risklerin bittiği anlamına gelmez. Sağlık geçmişi bir bütün olarak değerlendirilmelidir."
            }
        ]
    },
    {
        id: 12,
        title: "Dövme ve Piercing Hijyeni",
        description: "Vücut süsleme ve sağlık riskleri",
        icon: "🎨",
        difficulty: "Kolay",
        situation: "Leyla yeni bir dövme yaptırmak istiyor ancak gittiği stüdyoda iğnelerin paketinden çıkarılmadığını ve sanatçının eldiven kullanmadığını fark ediyor. Sanatçı 'Biz 10 yıldır böyleyiz, bir şey olmaz' diyor. Leyla ne yapmalı?",
        choices: [
            {
                text: "Ucuz olduğu için hemen yaptırmalı",
                outcome: "Çok büyük bir risk! Sağlığınızı birkaç lira için tehlikeye atıyorsunuz. Enfeksiyon riski çok yüksek.",
                isCorrect: false,
                explanation: "Sağlık maliyetten daha önemlidir. Steril olmayan bir ortamda dövme yaptırmak Hepatit B, C ve HIV gibi kan yoluyla bulaşan hastalıkların yanı sıra ciddi cilt enfeksiyonlarına da neden olabilir."
            },
            {
                text: "İğnelerin tek kullanımlık olduğunu ve sterilizasyonun yapıldığını sorgulamalı, emin değilse yaptırmamalı",
                outcome: "Harika karar! Kendi sağlığınızın takipçisi olmak sizi birçok hastalıktan korur. Hijyenden emin değilseniz oradan uzaklaşmalısınız.",
                isCorrect: true,
                explanation: "Dövme ve piercing gibi işlemler kanlı işlemlerdir. Bu yüzden iğnelerin tek kullanımlık (disposable) olması, aletlerin otoklavda steril edilmesi ve sanatçının eldiven kullanması zorunluluktur. Bu kurallara uymayan yerlerden kaçınmak sağlığınızı korur."
            },
            {
                text: "Arkadaşları orada yaptırdığı için güvenmeli",
                outcome: "Yanlış! Arkadaşlarınızın şanslı olması sizin de olacağınız anlamına gelmez. Hijyen standartları her zaman sorgulanmalıdır.",
                isCorrect: false,
                explanation: "Başkalarının o yerde sorun yaşamamış olması, hijyen kurallarının ihlal edildiği gerçeğini değiştirmez. Sağlık kişisel bir sorumluluktur ve başkalarının deneyimine değil, bilimsel hijyen kurallarına güvenilmelidir."
            }
        ]
    }
];

// ==========================================
// CYBE Bilgi İçeriği
// ==========================================

const cybeInfo = [
    {
        name: "HIV/AIDS",
        icon: "🔴",
        symptoms: [
            "Grip benzeri belirtiler (erken dönem)",
            "Uzun süreli yorgunluk",
            "Tekrarlayan enfeksiyonlar",
            "Hızlı kilo kaybı"
        ],
        transmission: [
            "Korunmasız cinsel ilişki",
            "Enfekte kan transfüzyonu",
            "Anneden bebeğe geçiş",
            "Enfekte iğne paylaşımı"
        ],
        prevention: [
            "Kondom kullanımı",
            "Tek eşlilik",
            "Düzenli test",
            "PrEP (Profilaksi) kullanımı"
        ]
    },
    {
        name: "HPV (İnsan Papilloma Virüsü)",
        icon: "🟡",
        symptoms: [
            "Genital siğiller",
            "Çoğu zaman belirti vermez",
            "Rahim ağzı hücrelerinde değişiklikler"
        ],
        transmission: [
            "Cilt teması",
            "Cinsel temas",
            "Doğum sırasında anneden bebeğe"
        ],
        prevention: [
            "HPV aşısı (9-26 yaş)",
            "Kondom kullanımı",
            "Düzenli smear testi",
            "Tek eşlilik"
        ]
    },
    {
        name: "Hepatit B",
        icon: "🟠",
        symptoms: [
            "Sarılık",
            "Yorgunluk",
            "Karın ağrısı",
            "Koyu renkli idrar"
        ],
        transmission: [
            "Cinsel temas",
            "Kan yoluyla",
            "Anneden bebeğe",
            "Enfekte iğne paylaşımı"
        ],
        prevention: [
            "Hepatit B aşısı",
            "Kondom kullanımı",
            "Kişisel eşyaları paylaşmama",
            "Güvenli kan transfüzyonu"
        ]
    },
    {
        name: "Klamidya",
        icon: "🔵",
        symptoms: [
            "Çoğu zaman belirti vermez",
            "Ağrılı idrar yapma",
            "Anormal akıntı",
            "Alt karın ağrısı"
        ],
        transmission: [
            "Korunmasız cinsel ilişki",
            "Vajinal, anal veya oral seks"
        ],
        prevention: [
            "Kondom kullanımı",
            "Düzenli tarama",
            "Tek eşlilik",
            "Partner tedavisi"
        ]
    },
    {
        name: "Gonore (Bel Soğukluğu)",
        icon: "🟢",
        symptoms: [
            "Ağrılı idrar yapma",
            "Sarı-yeşil akıntı",
            "Testis ağrısı (erkeklerde)",
            "Pelvik ağrı (kadınlarda)"
        ],
        transmission: [
            "Korunmasız cinsel ilişki",
            "Vajinal, anal veya oral seks"
        ],
        prevention: [
            "Kondom kullanımı",
            "Düzenli test",
            "Tek eşlilik",
            "Erken tedavi"
        ]
    },
    {
        name: "Sifiliz (Frengi)",
        icon: "🟣",
        symptoms: [
            "Ağrısız yara (birincil dönem)",
            "Deri döküntüleri (ikincil dönem)",
            "Organ hasarı (üçüncül dönem)",
            "Lenf bezi şişmesi"
        ],
        transmission: [
            "Cinsel temas",
            "Yara teması",
            "Anneden bebeğe"
        ],
        prevention: [
            "Kondom kullanımı",
            "Düzenli tarama",
            "Tek eşlilik",
            "Erken tedavi"
        ]
    },
    {
        name: "Trikomonas (Trikomoniazis)",
        icon: "🔵",
        symptoms: [
            "Köpüklü, sarı-yeşil akıntı",
            "Genital bölgede kaşıntı ve yanma",
            "Ağrılı idrar yapma",
            "Erkeklerde genellikle belirti vermez"
        ],
        transmission: [
            "Korunmasız cinsel ilişki",
            "Vajinal seks",
            "Enfekte kişiyle cinsel temas"
        ],
        prevention: [
            "Kondom kullanımı",
            "Tek eşlilik",
            "Düzenli tarama",
            "Partner tedavisi",
            "Kişisel hijyen"
        ]
    },
    {
        name: "Genital Herpes (HSV-2)",
        icon: "🔴",
        symptoms: [
            "Genital bölgede ağrılı su toplaması",
            "Kaşıntı ve yanma hissi",
            "Grip benzeri belirtiler",
            "Tekrarlayan alevlenmeler"
        ],
        transmission: [
            "Cilt teması",
            "Cinsel temas",
            "Aktif yara döneminde daha bulaşıcı",
            "Belirti olmadan da bulaşabilir"
        ],
        prevention: [
            "Kondom kullanımı (kısmi koruma)",
            "Aktif yara döneminde cinsel ilişkiden kaçınma",
            "Antiviral ilaç kullanımı",
            "Partner bilgilendirmesi",
            "Düzenli kontrol"
        ]
    },
    {
        name: "Hepatit C",
        icon: "🟠",
        symptoms: [
            "Yorgunluk ve halsizlik",
            "Sarılık (geç dönem)",
            "Karın ağrısı",
            "Çoğu zaman belirti vermez"
        ],
        transmission: [
            "Kan yoluyla (en yaygın)",
            "Enfekte iğne paylaşımı",
            "Korunmasız cinsel ilişki (düşük risk)",
            "Anneden bebeğe (nadir)"
        ],
        prevention: [
            "İğne paylaşımından kaçınma",
            "Güvenli kan transfüzyonu",
            "Kondom kullanımı",
            "Kişisel eşyaları paylaşmama",
            "Düzenli tarama"
        ]
    },
    {
        name: "Mikoplazma ve Ureaplazma",
        icon: "🟣",
        symptoms: [
            "Hafif akıntı",
            "İdrar yaparken yanma",
            "Genellikle belirti vermez",
            "Pelvik ağrı (kadınlarda)"
        ],
        transmission: [
            "Korunmasız cinsel ilişki",
            "Vajinal, anal veya oral seks",
            "Anneden bebeğe (doğum sırasında)"
        ],
        prevention: [
            "Kondom kullanımı",
            "Tek eşlilik",
            "Düzenli tarama",
            "Partner tedavisi",
            "Hamilelik öncesi kontrol"
        ]
    }
];

// ==========================================
// Asepsi ve Mikrobiyoloji Bilgileri
// ==========================================

const asepsisInfo = {
    principles: [
        {
            title: "Asepsi Nedir?",
            content: "Asepsi, mikroorganizmaların bulunmaması veya bulaşmasının önlenmesi için alınan tüm önlemlerdir. Tıbbi asepsi ve cerrahi asepsi olmak üzere iki türü vardır."
        },
        {
            title: "Tıbbi Asepsi",
            content: "Mikroorganizmaların sayısını azaltmayı ve yayılmasını önlemeyi amaçlar. El yıkama, temizlik ve dezenfeksiyon bu kapsamdadır."
        },
        {
            title: "Cerrahi Asepsi",
            content: "Tüm mikroorganizmaların tamamen yok edilmesini amaçlar. Ameliyathanelerde ve invaziv işlemlerde uygulanır."
        }
    ],
    handHygiene: [
        {
            step: 1,
            title: "Elleri Islatın",
            description: "Ellerinizi temiz, akan suyla ıslatın"
        },
        {
            step: 2,
            title: "Sabun Uygulayın",
            description: "Yeterli miktarda sabun alın"
        },
        {
            step: 3,
            title: "Ovun",
            description: "Avuç içi, avuç dışı, parmak araları ve tırnakları en az 20 saniye ovun"
        },
        {
            step: 4,
            title: "Durulayın",
            description: "Elleri akan suyla iyice durulayın"
        },
        {
            step: 5,
            title: "Kurulayın",
            description: "Temiz bir havlu veya kağıt havluyla kurulayın"
        }
    ],
    microbiology: [
        {
            title: "Bakteriler",
            content: "Tek hücreli mikroorganizmalardır. Bazıları yararlı, bazıları zararlıdır. Antibiyotiklerle tedavi edilebilir."
        },
        {
            title: "Virüsler",
            content: "Canlı hücre içinde çoğalan mikroorganizmalardır. Antibiyotiklerle tedavi edilemez, antiviral ilaçlar kullanılır."
        },
        {
            title: "Mantarlar",
            content: "Nem ve sıcak ortamları seven mikroorganizmalardır. Antifungal ilaçlarla tedavi edilir."
        },
        {
            title: "Bulaşma Yolları",
            content: "Direkt temas, damlacık, hava yolu, kan yolu ve cinsel temas yoluyla bulaşabilir."
        }
    ]
};


// İngilizce Quiz Verileri
const quizDataEn = [
    {
        id: 1,
        question: "How is HIV NOT transmitted?",
        options: [
            "Unprotected sexual intercourse",
            "Handshaking and hugging",
            "Infected blood transfusion",
            "Mother to baby transmission"
        ],
        correctAnswer: 1,
        explanation: "HIV is not transmitted through casual social contact (handshaking, hugging, kissing). It is only transmitted through blood, sexual fluids, and breast milk.",
        category: "sti"
    },
    {
        id: 2,
        question: "At what age range is the HPV vaccine most effective?",
        options: [
            "40-50 years old",
            "9-26 years old",
            "Over 60 years old",
            "Only at 18 years old"
        ],
        correctAnswer: 1,
        explanation: "The HPV vaccine is most effective between ages 9-26 and is recommended before sexual activity begins.",
        category: "sti"
    },
    {
        id: 3,
        question: "What is the most effective protection method against Hepatitis B?",
        options: [
            "Antibiotic use",
            "Vaccination",
            "Vitamin supplements",
            "Only hygienic living"
        ],
        correctAnswer: 1,
        explanation: "The most effective protection against Hepatitis B is vaccination. The vaccine provides 95% protection.",
        category: "sti"
    },
    {
        id: 4,
        question: "What is the most common symptom of Chlamydia infection?",
        options: [
            "High fever and headache",
            "Usually no symptoms (asymptomatic)",
            "Severe abdominal pain",
            "Skin rashes"
        ],
        correctAnswer: 1,
        explanation: "Chlamydia infection often shows no symptoms, which is why regular screening is important.",
        category: "sti"
    },
    {
        id: 5,
        question: "What complication can untreated Gonorrhea lead to?",
        options: [
            "Infertility",
            "Diabetes",
            "Hypertension",
            "Asthma"
        ],
        correctAnswer: 0,
        explanation: "Untreated gonorrhea can lead to infertility in both men and women.",
        category: "sti"
    },
    {
        id: 6,
        question: "At which stage is Syphilis most contagious?",
        options: [
            "Tertiary (late) stage",
            "Primary and secondary stage",
            "Latent (hidden) stage",
            "Not contagious at any stage"
        ],
        correctAnswer: 1,
        explanation: "Syphilis is most contagious during primary and secondary stages. Sores and rashes appear during these stages.",
        category: "sti"
    },
    {
        id: 7,
        question: "Does condom use provide 100% protection against all STIs?",
        options: [
            "100% protection against all STIs",
            "No protection at all",
            "Not complete protection but significantly reduces risk",
            "Only protects against HIV"
        ],
        correctAnswer: 2,
        explanation: "When used correctly, condoms significantly reduce STI risk but don't provide 100% protection. However, they are one of the most effective protection methods.",
        category: "sti"
    },
    {
        id: 8,
        question: "Does a person looking healthy from the outside mean they don't have an STI (e.g., HIV, Hepatitis B)?",
        options: [
            "Yes, a person without symptoms cannot transmit",
            "No, many STIs can remain in the body for years without symptoms and can be transmitted",
            "Only if there are physical wounds is there disease",
            "Only febrile illnesses are sexually transmitted"
        ],
        correctAnswer: 1,
        explanation: "Many sexually transmitted infections (especially HIV, HPV, and Hepatitis viruses) can live in the body for years without any physical symptoms. These people are called 'carriers'; even though the person feels healthy, they can transmit the infection to others. That's why getting tested is the only sure way.",
        category: "sti"
    },
    {
        id: 9,
        question: "What is the minimum duration for proper handwashing?",
        options: [
            "5 seconds",
            "10 seconds",
            "20 seconds",
            "60 seconds"
        ],
        correctAnswer: 2,
        explanation: "Hands should be washed with soap and water for at least 20 seconds.",
        category: "asepsis"
    },
    {
        id: 10,
        question: "What is the difference between sterilization and disinfection?",
        options: [
            "They are the same thing",
            "Sterilization destroys all microorganisms, disinfection reduces most",
            "Disinfection is more effective",
            "Sterilization only kills bacteria"
        ],
        correctAnswer: 1,
        explanation: "Sterilization destroys all microorganisms (including spores), while disinfection reduces or destroys most microorganisms.",
        category: "asepsis"
    },
    {
        id: 11,
        question: "In which situations must hands be washed?",
        options: [
            "Only after using the toilet",
            "Only before eating",
            "After toilet, before/after meals, after visiting sick people",
            "Once a day is enough"
        ],
        correctAnswer: 2,
        explanation: "Handwashing must be done after using the toilet, before and after meals, after visiting sick people, and after coughing/sneezing.",
        category: "asepsis"
    },
    {
        id: 12,
        question: "In which environment do bacteria multiply fastest?",
        options: [
            "Cold and dry environment",
            "Warm and humid environment",
            "Extremely hot environment",
            "Frozen environment"
        ],
        correctAnswer: 1,
        explanation: "Bacteria multiply fastest in warm (20-40°C) and humid environments. This is why hygiene and proper storage conditions are important.",
        category: "microbiology"
    },
    {
        id: 13,
        question: "What is the fundamental difference between viruses and bacteria?",
        options: [
            "Viruses are larger",
            "Viruses multiply inside living cells, bacteria can multiply independently",
            "Bacteria cannot be treated with antibiotics",
            "There is no difference"
        ],
        correctAnswer: 1,
        explanation: "Viruses multiply inside living cells, while bacteria can multiply independently. This is why treatment methods differ.",
        category: "microbiology"
    },
    {
        id: 14,
        question: "Why is regular STI screening important?",
        options: [
            "Only those with symptoms should get tested",
            "Most STIs show no symptoms, early diagnosis facilitates treatment",
            "There is no need for testing",
            "Only elderly people should get tested"
        ],
        correctAnswer: 1,
        explanation: "Many STIs show no symptoms or show symptoms late. Regular screening is critically important for early diagnosis and treatment.",
        category: "sti"
    },
    {
        id: 15,
        question: "What is the most reliable source for information about sexual health?",
        options: [
            "Social media posts",
            "Healthcare professionals and official health organizations",
            "Friend recommendations",
            "Internet forums"
        ],
        correctAnswer: 1,
        explanation: "The most reliable source of information about sexual health is healthcare professionals and official organizations like the CDC and WHO.",
        category: "sti"
    }
];

// Dile göre quiz verilerini döndür
function getQuizData() {
    return getCurrentDataLanguage() === 'en' ? quizDataEn : quizDataTr;
}

// Geriye uyumluluk için
const quizData = getQuizData();

// ==========================================
// ENGLISH TRANSLATIONS - CYBE Info
// ==========================================

const cybeInfoEn = [
    {
        name: "HIV/AIDS",
        icon: "🔴",
        symptoms: [
            "Flu-like symptoms (early stage)",
            "Prolonged fatigue",
            "Recurring infections",
            "Rapid weight loss"
        ],
        transmission: [
            "Unprotected sexual intercourse",
            "Infected blood transfusion",
            "Mother to baby transmission",
            "Sharing infected needles"
        ],
        prevention: [
            "Condom use",
            "Monogamy",
            "Regular testing",
            "PrEP (Prophylaxis) use"
        ]
    },
    {
        name: "HPV (Human Papillomavirus)",
        icon: "🟡",
        symptoms: [
            "Genital warts",
            "Often no symptoms",
            "Changes in cervical cells"
        ],
        transmission: [
            "Skin contact",
            "Sexual contact",
            "Mother to baby during birth"
        ],
        prevention: [
            "HPV vaccine (ages 9-26)",
            "Condom use",
            "Regular Pap smear",
            "Monogamy"
        ]
    },
    {
        name: "Hepatitis B",
        icon: "🟠",
        symptoms: [
            "Jaundice",
            "Fatigue",
            "Abdominal pain",
            "Dark urine"
        ],
        transmission: [
            "Sexual contact",
            "Through blood",
            "Mother to baby",
            "Sharing infected needles"
        ],
        prevention: [
            "Hepatitis B vaccine",
            "Condom use",
            "Not sharing personal items",
            "Safe blood transfusion"
        ]
    },
    {
        name: "Chlamydia",
        icon: "🔵",
        symptoms: [
            "Often no symptoms",
            "Painful urination",
            "Abnormal discharge",
            "Lower abdominal pain"
        ],
        transmission: [
            "Unprotected sexual intercourse",
            "Vaginal, anal or oral sex"
        ],
        prevention: [
            "Condom use",
            "Regular screening",
            "Monogamy",
            "Partner treatment"
        ]
    },
    {
        name: "Gonorrhea",
        icon: "🟢",
        symptoms: [
            "Painful urination",
            "Yellow-green discharge",
            "Testicular pain (in men)",
            "Pelvic pain (in women)"
        ],
        transmission: [
            "Unprotected sexual intercourse",
            "Vaginal, anal or oral sex"
        ],
        prevention: [
            "Condom use",
            "Regular testing",
            "Monogamy",
            "Early treatment"
        ]
    },
    {
        name: "Syphilis",
        icon: "🟣",
        symptoms: [
            "Painless sore (primary stage)",
            "Skin rashes (secondary stage)",
            "Organ damage (tertiary stage)",
            "Lymph node swelling"
        ],
        transmission: [
            "Sexual contact",
            "Contact with sores",
            "Mother to baby"
        ],
        prevention: [
            "Condom use",
            "Regular screening",
            "Monogamy",
            "Early treatment"
        ]
    },
    {
        name: "Trichomoniasis",
        icon: "🔵",
        symptoms: [
            "Frothy, yellow-green discharge",
            "Itching and burning in genital area",
            "Painful urination",
            "Often no symptoms in men"
        ],
        transmission: [
            "Unprotected sexual intercourse",
            "Vaginal sex",
            "Sexual contact with infected person"
        ],
        prevention: [
            "Condom use",
            "Monogamy",
            "Regular screening",
            "Partner treatment",
            "Personal hygiene"
        ]
    },
    {
        name: "Genital Herpes (HSV-2)",
        icon: "🔴",
        symptoms: [
            "Painful blisters in genital area",
            "Itching and burning sensation",
            "Flu-like symptoms",
            "Recurring outbreaks"
        ],
        transmission: [
            "Skin contact",
            "Sexual contact",
            "More contagious during active outbreak",
            "Can transmit without symptoms"
        ],
        prevention: [
            "Condom use (partial protection)",
            "Avoid sexual contact during active outbreak",
            "Antiviral medication use",
            "Partner notification",
            "Regular checkups"
        ]
    },
    {
        name: "Hepatitis C",
        icon: "🟠",
        symptoms: [
            "Fatigue and weakness",
            "Jaundice (late stage)",
            "Abdominal pain",
            "Often no symptoms"
        ],
        transmission: [
            "Through blood (most common)",
            "Sharing infected needles",
            "Unprotected sexual intercourse (low risk)",
            "Mother to baby (rare)"
        ],
        prevention: [
            "Avoid sharing needles",
            "Safe blood transfusion",
            "Condom use",
            "Not sharing personal items",
            "Regular screening"
        ]
    },
    {
        name: "Mycoplasma and Ureaplasma",
        icon: "🟣",
        symptoms: [
            "Mild discharge",
            "Burning during urination",
            "Often no symptoms",
            "Pelvic pain (in women)"
        ],
        transmission: [
            "Unprotected sexual intercourse",
            "Vaginal, anal or oral sex",
            "Mother to baby (during birth)"
        ],
        prevention: [
            "Condom use",
            "Monogamy",
            "Regular screening",
            "Partner treatment",
            "Pre-pregnancy checkup"
        ]
    }
];

// ==========================================
// ENGLISH TRANSLATIONS - Asepsis Info
// ==========================================

const asepsisInfoEn = {
    principles: [
        {
            title: "What is Asepsis?",
            content: "Asepsis is all measures taken to prevent the presence or transmission of microorganisms. There are two types: medical asepsis and surgical asepsis."
        },
        {
            title: "Medical Asepsis",
            content: "Aims to reduce the number of microorganisms and prevent their spread. Handwashing, cleaning and disinfection are included in this scope."
        },
        {
            title: "Surgical Asepsis",
            content: "Aims to completely eliminate all microorganisms. Applied in operating rooms and invasive procedures."
        }
    ],
    handHygiene: [
        {
            step: 1,
            title: "Wet Your Hands",
            description: "Wet your hands with clean, running water"
        },
        {
            step: 2,
            title: "Apply Soap",
            description: "Take sufficient amount of soap"
        },
        {
            step: 3,
            title: "Scrub",
            description: "Scrub palms, backs of hands, between fingers and nails for at least 20 seconds"
        },
        {
            step: 4,
            title: "Rinse",
            description: "Rinse hands thoroughly with running water"
        },
        {
            step: 5,
            title: "Dry",
            description: "Dry with a clean towel or paper towel"
        }
    ],
    microbiology: [
        {
            title: "Bacteria",
            content: "Single-celled microorganisms. Some are beneficial, some are harmful. Can be treated with antibiotics."
        },
        {
            title: "Viruses",
            content: "Microorganisms that multiply inside living cells. Cannot be treated with antibiotics, antiviral drugs are used."
        },
        {
            title: "Fungi",
            content: "Microorganisms that love humid and warm environments. Treated with antifungal drugs."
        },
        {
            title: "Transmission Routes",
            content: "Can be transmitted through direct contact, droplets, airborne, bloodborne and sexual contact."
        }
    ]
};

// ==========================================
// Dynamic Data Functions
// ==========================================

function getCybeInfo() {
    return getCurrentDataLanguage() === 'en' ? cybeInfoEn : cybeInfo;
}

function getAsepsisInfo() {
    return getCurrentDataLanguage() === 'en' ? asepsisInfoEn : asepsisInfo;
}


// ==========================================
// ENGLISH TRANSLATIONS - Scenarios (ALL 12)
// ==========================================

const scenariosDataEn = [
    {
        id: 1,
        title: "New Relationship Beginning",
        description: "You're starting a new relationship",
        icon: "💑",
        difficulty: "Easy",
        situation: "Ayşe and Mehmet have been together for 3 months and are thinking about taking their relationship to the next level. Ayşe is concerned about sexual health and isn't sure what to do. Mehmet also wants to be informed about this topic.",
        choices: [
            {
                text: "Both should get STI tested and share results",
                outcome: "Excellent decision! By both getting tested, you showed respect for each other and established a healthy relationship foundation. This open communication will strengthen your relationship.",
                isCorrect: true,
                explanation: "Before starting a new sexual relationship, it's healthiest for both partners to get STI tested and share results. This builds trust and protects your health. Open communication is the foundation of healthy relationships."
            },
            {
                text: "No need for testing, just using condoms is enough",
                outcome: "Condom use is important but not sufficient. Getting tested provides a safer start and it's important for both partners to know their health status.",
                isCorrect: false,
                explanation: "Condom use is an important protection method but doesn't provide 100% protection. Also, some STIs (like HPV) cannot be fully protected against with condoms. Getting tested is the safest approach and ensures a healthy start to the relationship."
            },
            {
                text: "If they trust each other, no need for testing",
                outcome: "Trust is important but you shouldn't take risks with health. Many STIs show no symptoms and a person may not know they're infected.",
                isCorrect: false,
                explanation: "Trust is the foundation of a relationship, but many STIs show no symptoms and a person may not know they're infected. Getting tested is not a sign of distrust, but of responsibility. Being health-conscious protects the relationship."
            }
        ]
    },
    {
        id: 2,
        title: "Emergency Management",
        description: "Concern after unprotected intercourse",
        icon: "🚨",
        difficulty: "Medium",
        situation: "Can realizes he had unprotected sexual intercourse after a party. When he wakes up in the morning and realizes the situation, Can is very worried and doesn't know what to do. He's thinking about consulting friends but feels embarrassed.",
        choices: [
            {
                text: "Should wait a few weeks and go to doctor if symptoms appear",
                outcome: "Waiting is risky! Many STIs show no symptoms and you may miss the chance for early intervention. Some preventive treatments are only effective in the first days.",
                isCorrect: false,
                explanation: "Waiting is dangerous because some preventive treatments are only effective within the first 72 hours. Also, many STIs show no symptoms, so early testing and intervention are vital. Losing time puts your health at risk."
            },
            {
                text: "Should immediately go to a healthcare facility and explain the situation",
                outcome: "Correct decision! Early intervention is very important. Healthcare professionals will help you in the best way and take necessary precautions. No need to be embarrassed, this is a very common situation.",
                isCorrect: true,
                explanation: "After unprotected intercourse, it's important to visit a healthcare facility within 72 hours (preferably within 24 hours). Preventive treatments like PEP (Post-Exposure Prophylaxis) are effective when started early. Healthcare professionals encounter these situations frequently and are there to help."
            },
            {
                text: "Should research medicine online and self-treat",
                outcome: "Dangerous! Self-treatment can lead to serious health problems. Wrong medication use can worsen the situation. You must get expert support.",
                isCorrect: false,
                explanation: "Self-treatment is extremely dangerous. Wrong medication use can worsen the situation, cause side effects, and delay proper treatment. You must consult a healthcare professional."
            }
        ]
    },
    {
        id: 3,
        title: "Friend Support",
        description: "Your friend is consulting you",
        icon: "🤝",
        difficulty: "Easy",
        situation: "Zeynep learned that her close friend Elif is afraid and embarrassed to get an STI test. Elif has a new relationship and wants to get tested but can't gather courage. She's asking Zeynep for advice and questioning what to do.",
        choices: [
            {
                text: "Tell Elif that testing is unnecessary and she shouldn't worry",
                outcome: "Wrong advice! Getting tested is important and shouldn't be postponed. This advice can put your friend's health at risk.",
                isCorrect: false,
                explanation: "Postponing or dismissing testing is wrong advice. Early diagnosis increases treatment chances and prevents transmission. Giving your friend correct information protects their health."
            },
            {
                text: "Shouldn't give advice, should wait for Elif to make her own decision",
                outcome: "Support is important. Instead of staying silent, be informative and supportive. Your friend trusts you and needs your help.",
                isCorrect: false,
                explanation: "When your friend consults you, it's important to be informative and supportive. Giving correct information and support is part of friendship. Staying silent doesn't help."
            },
            {
                text: "Tell Elif that getting tested is normal and important, offer to go together",
                outcome: "You're a great friend! Supporting and informing is the right approach. Being there for Elif will boost her courage and help her make a healthy decision.",
                isCorrect: true,
                explanation: "Getting an STI test is nothing to be ashamed of, it's actually responsible behavior. Supporting your friend and going together can boost their courage. Healthcare professionals are very understanding about this and are there to help."
            }
        ]
    },
    {
        id: 4,
        title: "University Life",
        description: "Sexual health awareness on campus",
        icon: "🎓",
        difficulty: "Medium",
        situation: "University student Deniz notices that friends on campus don't have enough knowledge about sexual health. Some friends find condoms unnecessary, others think STI tests are expensive. What should Deniz do?",
        choices: [
            {
                text: "Everyone should mind their own business, this is personal",
                outcome: "Wrong approach! Sexual health affects public health. Information sharing and awareness is everyone's responsibility.",
                isCorrect: false,
                explanation: "Sexual health is not just personal, it's a public issue. STIs are contagious and ignorance causes their spread. Sharing correct information protects public health and can save lives."
            },
            {
                text: "Should get information from university health center and share with friends, create awareness",
                outcome: "Excellent! Information sharing and creating awareness is very important for public health. University health centers usually offer free or affordable services.",
                isCorrect: true,
                explanation: "Creating awareness about sexual health is critically important for public health. University health centers usually offer students free or very affordable STI tests and counseling services. Spreading correct information can save lives."
            },
            {
                text: "Should only tell friends to use condoms, testing is unnecessary",
                outcome: "Incomplete information! Condoms are important but not enough alone. Regular testing and education are also necessary.",
                isCorrect: false,
                explanation: "Condom use is an important protection method but not sufficient alone. Regular tests, correct education and awareness are also important parts of sexual health. A comprehensive approach is needed."
            }
        ]
    },
    {
        id: 5,
        title: "Family Planning Counseling",
        description: "Pre-marriage preparation",
        icon: "💍",
        difficulty: "Easy",
        situation: "Selin and Emre decided to get married. While wedding preparations continue, Selin's mother suggests they get pre-marriage health checkups. Emre says 'We're already healthy, no need'. What should Selin do?",
        choices: [
            {
                text: "Emre is right, if they look healthy, testing is unnecessary",
                outcome: "Wrong! Many STIs show no symptoms. Looking healthy doesn't mean there's no infection. Getting tested is important.",
                isCorrect: false,
                explanation: "Many STIs show no symptoms and a person may not know they're infected. Looking healthy doesn't mean there's no infection. Pre-marriage testing prevents future health problems and is important for family planning."
            },
            {
                text: "Only the woman should get tested, STI risk is low in men",
                outcome: "Completely wrong! STIs affect both men and women equally. Both partners should get tested.",
                isCorrect: false,
                explanation: "This is completely wrong thinking. STIs affect both men and women equally. Both partners need to get tested. Gender discrimination is dangerous in health matters."
            },
            {
                text: "Should listen to mother's advice, both should get comprehensive health checkup and STI testing",
                outcome: "Very correct! Pre-marriage health checkup and STI testing lay the foundation for a healthy family life. This is important for both your and your future children's health.",
                isCorrect: true,
                explanation: "Pre-marriage health checkup and STI testing lay the foundation for a healthy family life. Some STIs can be carried without symptoms and can also be transmitted to children in the future. Early diagnosis and treatment protect both your and your future children's health."
            }
        ]
    },
    {
        id: 6,
        title: "Social Media Information",
        description: "Fighting misinformation",
        icon: "📱",
        difficulty: "Medium",
        situation: "Ahmet sees a social media post saying 'STIs only occur in people with certain lifestyles'. Many people in the comments believe this information and find testing unnecessary. What should Ahmet do?",
        choices: [
            {
                text: "Shouldn't interfere, everyone acts according to their own knowledge",
                outcome: "Wrong! False health information can be life-threatening. Sharing correct information is social responsibility.",
                isCorrect: false,
                explanation: "False health information can be life-threatening and put people's health at risk. Sharing correct information and correcting false information is social responsibility. Staying silent contributes to the spread of false information."
            },
            {
                text: "Should share correct information from reliable sources and correct false information",
                outcome: "Great! Sharing correct information and correcting false information on social media is very important for public health. Your referral to reliable sources is valuable.",
                isCorrect: true,
                explanation: "False health information can spread quickly on social media and lead to serious consequences. STIs can affect anyone regardless of lifestyle. Sharing correct information from reliable sources (Ministry of Health, WHO) and correcting false information is critically important for public health."
            },
            {
                text: "Should like and support the post, the majority is right",
                outcome: "Very wrong! The majority is not always right, especially in health matters. Relying on scientific facts is important.",
                isCorrect: false,
                explanation: "In health matters, scientific facts are important, not majority opinion. STIs can affect anyone and lifestyle discrimination is dangerous. Supporting false information harms public health."
            }
        ]
    },
    {
        id: 7,
        title: "Workplace Awareness",
        description: "Health consciousness in work environment",
        icon: "💼",
        difficulty: "Medium",
        situation: "Aylin, an HR specialist at a large company, is thinking of organizing a seminar to inform employees about sexual health. However, some managers say 'This topic is too private, not appropriate for workplace'. The company owner asks Aylin for her opinion.",
        choices: [
            {
                text: "Should cancel the seminar, this topic is not appropriate for workplace",
                outcome: "Wrong! Employee health covers all topics. STI awareness is an important public health issue.",
                isCorrect: false,
                explanation: "Sexual health is an integral part of general health. Workplaces are responsible for supporting employees' physical and mental health. STI awareness is not taboo, it's a scientific topic and should be addressed in professional settings."
            },
            {
                text: "Should organize a private, secret meeting only for volunteer employees",
                outcome: "Partially correct but not sufficient. An open and professional approach is more effective than secrecy.",
                isCorrect: false,
                explanation: "While voluntariness is important, keeping the topic 'secret' can cause stigma. Education presented with an open, professional and scientific approach is more effective and helps normalize the topic."
            },
            {
                text: "Should organize the seminar, employee health covers all topics and STI awareness is important",
                outcome: "Excellent decision! Health education in the workplace increases employee welfare. STI awareness is part of public health and should be addressed in professional settings.",
                isCorrect: true,
                explanation: "Workplaces are obligated to support employee health. STI awareness is an important part of general health education. Such seminars presented with a professional and scientific approach increase employees' health consciousness and contribute to public health."
            }
        ]
    },
    {
        id: 8,
        title: "Health Tourism Risk",
        description: "Travel abroad and health",
        icon: "✈️",
        difficulty: "Hard",
        situation: "Murat is going on vacation abroad with friends. During the vacation, he gets close to someone he just met. His friends say 'Everyone is free on vacation, have fun'. What should Murat do?",
        choices: [
            {
                text: "Rules are different on vacation, no need to worry",
                outcome: "Very dangerous! STIs don't take vacations. Risk can be even higher abroad.",
                isCorrect: false,
                explanation: "This is extremely dangerous thinking. Vacation environments and relationships with newly met people can carry higher risk. STI rates are higher in some countries. Protection measures must be taken on vacation too."
            },
            {
                text: "Should listen to friends' advice, everyone does it",
                outcome: "Wrong! Peer pressure shouldn't affect your health decisions. Your own health is priority.",
                isCorrect: false,
                explanation: "Peer pressure and 'everyone does it' logic is dangerous in health matters. Your health and future are at stake. You should prioritize scientific facts and your own health over friends' advice."
            },
            {
                text: "Must use protection methods, risks are the same abroad",
                outcome: "Very correct! Geographic location doesn't change STI risk. Protection measures are equally important on vacation.",
                isCorrect: true,
                explanation: "STIs know no geographic boundaries. Protection measures are equally important abroad, on vacation or in different environments. 'Vacation freedom' doesn't eliminate health risks. Condom use and conscious behavior are always necessary."
            }
        ]
    },
    {
        id: 9,
        title: "Young Parent Responsibility",
        description: "Sexual health education for child",
        icon: "👨‍👩‍👧",
        difficulty: "Medium",
        situation: "Mother Fatma learns that her 18-year-old daughter Zehra will start university and wants to talk to her about sexual health. However, her husband says 'Talking about these topics is shameful, our daughter is already a good child'. What should Fatma do?",
        choices: [
            {
                text: "Should convince husband and talk to daughter openly and scientifically",
                outcome: "Excellent! Parent-child communication is very important. Scientific and open communication protects youth.",
                isCorrect: true,
                explanation: "It's extremely important for parents to talk openly and scientifically with their children about sexual health. This is not 'shameful', it's responsibility. Youth equipped with correct information make more conscious decisions and can protect themselves. Staying silent leaves youth open to false information and risks."
            },
            {
                text: "Should do what husband says, these topics shouldn't be discussed",
                outcome: "Very wrong! Staying silent doesn't protect youth, it puts them at risk. Information is the best protection.",
                isCorrect: false,
                explanation: "This approach doesn't protect youth, it leaves them ignorant and defenseless. Youth who don't receive sexual health education get information from wrong sources and may engage in risky behaviors. Parental responsibility is to equip the child with correct information."
            },
            {
                text: "Should only tell daughter 'be careful', shouldn't go into detail",
                outcome: "Insufficient! General warnings are not enough. Specific, scientific information is necessary.",
                isCorrect: false,
                explanation: "General and vague warnings don't provide sufficient protection for youth. Specific information (STI types, protection methods, testing, emergencies) should be given. Saying 'be careful' is not enough, you need to teach how to be careful."
            }
        ]
    },
    {
        id: 10,
        title: "Healthcare Worker Ethics",
        description: "Patient privacy and information",
        icon: "⚕️",
        difficulty: "Hard",
        situation: "Nurse Elif learns that a 17-year-old patient's STI test came back positive in the emergency room. The patient's family wants to know the test results. The patient asks that the family not be told. What should Elif do?",
        choices: [
            {
                text: "Should immediately inform family, patient is not an adult",
                outcome: "Wrong! Individuals over 17 have health privacy. Forcing information is ethical violation.",
                isCorrect: false,
                explanation: "This is an ethical and legal violation. Individuals over 17 can make decisions about health matters. Violating patient privacy causes loss of trust and youth avoiding health services. Information cannot be given without patient consent."
            },
            {
                text: "Should force patient to tell family, otherwise shouldn't treat",
                outcome: "Ethical violation! Making treatment conditional and forcing patient is unacceptable.",
                isCorrect: false,
                explanation: "Making treatment conditional and forcing the patient is a serious ethical violation. Healthcare workers should support the patient, offer counseling but never force. Every patient has the right to make their own decision."
            },
            {
                text: "Should protect patient privacy, individual over 17's own decision is important",
                outcome: "Correct! Patient privacy and autonomy is a fundamental medical ethics principle. Individuals over 17 can control their own health information.",
                isCorrect: true,
                explanation: "Patient privacy is a fundamental right. Individuals over 17 can make decisions about their own health information. Healthcare workers are obligated to protect patient privacy. Can encourage patient to seek family counseling but cannot force information."
            }
        ]
    },
    {
        id: 11,
        title: "Blood Donation and Safety",
        description: "Blood donation after suspicious relationship",
        icon: "🩸",
        difficulty: "Medium",
        situation: "Ahmet is a regular blood donor. However, last month he had unprotected and suspicious sexual contact. When his blood donation day comes, what should Ahmet do?",
        choices: [
            {
                text: "Should honestly tell blood center doctor and wait for test results",
                outcome: "Safest and most responsible decision! Blood centers respect donor privacy and this honesty saves lives.",
                isCorrect: true,
                explanation: "Blood donors' honesty is critical for blood safety. After a suspicious situation, blood should not be given due to 'window period' risk. After consultation with doctor, Ahmet may need to not donate for a while. This protects both the patient receiving blood and Ahmet's health."
            },
            {
                text: "Should donate blood saying nothing will happen, blood is tested anyway",
                outcome: "Very dangerous! Some infections may not show up in tests immediately (window period). This risk endangers someone else's life.",
                isCorrect: false,
                explanation: "Donated blood is tested but infections may not be detected in tests during the 'window period'. Therefore honesty is the first line of defense. Taking risks saying 'it's tested anyway' is unethical."
            },
            {
                text: "Should hide other risks saying only AIDS test came back negative",
                outcome: "Incomplete information is risk! Not only HIV, but other STIs like Hepatitis, Syphilis can also be transmitted through blood.",
                isCorrect: false,
                explanation: "Many sexually transmitted diseases can also be transmitted through blood. One negative test doesn't mean all risks are over. Health history should be evaluated as a whole."
            }
        ]
    },
    {
        id: 12,
        title: "Tattoo and Piercing Hygiene",
        description: "Body decoration and health risks",
        icon: "🎨",
        difficulty: "Easy",
        situation: "Leyla wants to get a new tattoo but notices at the studio she went to that needles aren't taken out of packages and the artist doesn't use gloves. The artist says 'We've been like this for 10 years, nothing happens'. What should Leyla do?",
        choices: [
            {
                text: "Should get it done immediately because it's cheap",
                outcome: "Very big risk! You're endangering your health for a few dollars. Infection risk is very high.",
                isCorrect: false,
                explanation: "Health is more important than cost. Getting a tattoo in a non-sterile environment can cause bloodborne diseases like Hepatitis B, C and HIV as well as serious skin infections."
            },
            {
                text: "Should question if needles are disposable and sterilization is done, shouldn't get it if not sure",
                outcome: "Great decision! Being in charge of your own health protects you from many diseases. If you're not sure about hygiene, you should stay away.",
                isCorrect: true,
                explanation: "Procedures like tattoos and piercings are bloody procedures. Therefore needles must be disposable, tools must be sterilized in autoclave and artist must use gloves. Avoiding places that don't follow these rules protects your health."
            },
            {
                text: "Should trust because friends got it done there",
                outcome: "Wrong! Your friends being lucky doesn't mean you will be too. Hygiene standards should always be questioned.",
                isCorrect: false,
                explanation: "Others not having problems at that place doesn't change the fact that hygiene rules are violated. Health is a personal responsibility and you should trust scientific hygiene rules, not others' experiences."
            }
        ]
    }
];

function getScenariosData() {
    return getCurrentDataLanguage() === 'en' ? scenariosDataEn : scenariosData;
}

// ==========================================
// Timeline Verileri - Türkçe
// ==========================================

const timelineDataTr = {
    "HIV/AIDS": {
        icon: "🔴",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma Anı",
                description: "Virüs vücuda girer",
                symptoms: ["Belirti yok", "Virüs kan dolaşımına karışır"],
                risk: "Bulaşıcı değil (henüz)"
            },
            {
                time: "Gün 1-14",
                title: "Pencere Dönemi",
                description: "Virüs çoğalmaya başlar",
                symptoms: ["Testler negatif çıkabilir", "Belirti genellikle yok"],
                risk: "Bulaşıcı ama test negatif!"
            },
            {
                time: "2-4 Hafta",
                title: "Akut HIV Sendromu",
                description: "İlk belirtiler ortaya çıkar",
                symptoms: ["Grip benzeri belirtiler", "Ateş, yorgunluk", "Lenf bezi şişmesi"],
                risk: "Çok bulaşıcı!"
            },
            {
                time: "Ay 1-10 Yıl",
                title: "Asemptomatik Dönem",
                description: "Belirti vermez ama virüs aktif",
                symptoms: ["Görünürde sağlıklı", "Bağışıklık sistemi yavaşça zayıflar"],
                risk: "Bulaşıcı - test pozitif"
            },
            {
                time: "Yıl 10+",
                title: "AIDS Dönemi",
                description: "Bağışıklık sistemi çöker",
                symptoms: ["Fırsatçı enfeksiyonlar", "Ciddi hastalıklar", "Kilo kaybı"],
                risk: "Hayati tehlike"
            }
        ],
        warning: "Erken teşhis hayat kurtarır! Tedavi ile normal yaşam sürdürülebilir."
    },
    "HPV": {
        icon: "🟡",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Cilt teması ile virüs geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı"
            },
            {
                time: "Hafta 2-8",
                title: "İnkübasyon",
                description: "Virüs hücrelere yerleşir",
                symptoms: ["Belirti yok", "Bağışıklık sistemi tepki verir"],
                risk: "Bulaşıcı"
            },
            {
                time: "Ay 2-6",
                title: "Siğil Oluşumu",
                description: "Genital siğiller görünebilir",
                symptoms: ["Küçük siğiller", "Kaşıntı olabilir"],
                risk: "Bulaşıcı"
            },
            {
                time: "Yıl 1-2",
                title: "Bağışıklık Tepkisi",
                description: "Vücut virüsü temizlemeye çalışır",
                symptoms: ["%90 vakada virüs kendiliğinden temizlenir", "Siğiller kaybolabilir"],
                risk: "Azalan bulaşıcılık"
            },
            {
                time: "Yıl 10-20",
                title: "Yüksek Riskli HPV",
                description: "Bazı tipler kansere yol açabilir",
                symptoms: ["Rahim ağzı hücre değişiklikleri", "Kanser riski"],
                risk: "Düzenli tarama önemli!"
            }
        ],
        warning: "HPV aşısı %90 koruma sağlar! 9-26 yaş arası aşı olun."
    },
    "Hepatit B": {
        icon: "🟠",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Virüs kan/vücut sıvıları ile geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı"
            },
            {
                time: "Hafta 6-12",
                title: "İnkübasyon",
                description: "Virüs karaciğere yerleşir",
                symptoms: ["Belirti yok", "Testler pozitif olabilir"],
                risk: "Bulaşıcı"
            },
            {
                time: "Ay 2-6",
                title: "Akut Hepatit",
                description: "Karaciğer iltihaplanır",
                symptoms: ["Sarılık", "Yorgunluk", "Karın ağrısı", "Koyu idrar"],
                risk: "Çok bulaşıcı"
            },
            {
                time: "Ay 6+",
                title: "Kronik Hepatit",
                description: "%5-10 vakada kronikleşir",
                symptoms: ["Hafif veya belirti yok", "Karaciğer hasarı devam eder"],
                risk: "Bulaşıcı - tedavi gerekli"
            },
            {
                time: "Yıl 20-30",
                title: "Siroz/Kanser Riski",
                description: "Tedavi edilmezse ciddi hasar",
                symptoms: ["Karaciğer sirozu", "Karaciğer kanseri riski"],
                risk: "Hayati tehlike"
            }
        ],
        warning: "Hepatit B aşısı %95 koruma sağlar! Mutlaka aşı olun."
    },
    "Klamidya": {
        icon: "🔵",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Bakteri cinsel temas ile geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı"
            },
            {
                time: "Gün 7-21",
                title: "İnkübasyon",
                description: "Bakteri çoğalır",
                symptoms: ["%70-80 vakada belirti yok!", "Hafif yanma olabilir"],
                risk: "Bulaşıcı ama farkında değil"
            },
            {
                time: "Hafta 2-4",
                title: "Belirtiler (varsa)",
                description: "Bazı vakalarda belirti görülür",
                symptoms: ["Ağrılı idrar", "Akıntı", "Alt karın ağrısı"],
                risk: "Bulaşıcı"
            },
            {
                time: "Ay 1-6",
                title: "Tedavi Edilmezse",
                description: "Enfeksiyon yayılır",
                symptoms: ["Pelvik inflamatuar hastalık", "Ağrı artar"],
                risk: "Kısırlık riski başlar"
            },
            {
                time: "Yıl 1+",
                title: "Komplikasyonlar",
                description: "Ciddi sorunlar gelişir",
                symptoms: ["Kısırlık", "Kronik ağrı", "Ektopik gebelik riski"],
                risk: "Kalıcı hasar"
            }
        ],
        warning: "Belirti olmasa da test yaptırın! Tedavi ile %95 iyileşme."
    },
    "Gonore": {
        icon: "🟢",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Bakteri cinsel temas ile geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı"
            },
            {
                time: "Gün 2-7",
                title: "Hızlı Gelişim",
                description: "Gonore hızlı belirti verir",
                symptoms: ["Yanma başlar", "Akıntı başlar"],
                risk: "Çok bulaşıcı"
            },
            {
                time: "Hafta 1-2",
                title: "Akut Belirtiler",
                description: "Belirtiler belirginleşir",
                symptoms: ["Sarı-yeşil akıntı", "Ağrılı idrar", "Şişlik"],
                risk: "Çok bulaşıcı"
            },
            {
                time: "Hafta 2-4",
                title: "Yayılma",
                description: "Tedavi edilmezse yayılır",
                symptoms: ["Testis/yumurtalık iltihabı", "Ateş", "Şiddetli ağrı"],
                risk: "Kısırlık riski"
            },
            {
                time: "Ay 1+",
                title: "Komplikasyonlar",
                description: "Ciddi sorunlar",
                symptoms: ["Kısırlık", "Eklem iltihabı", "Kalp kapak enfeksiyonu"],
                risk: "Hayati tehlike olabilir"
            }
        ],
        warning: "Hızlı tedavi önemli! Antibiyotik direnci gelişebilir."
    },
    "Sifiliz": {
        icon: "🟣",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Bakteri yara teması ile geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı"
            },
            {
                time: "Hafta 3",
                title: "Birincil Sifiliz",
                description: "İlk yara (şankr) çıkar",
                symptoms: ["Ağrısız yara", "Lenf bezi şişmesi"],
                risk: "Çok bulaşıcı"
            },
            {
                time: "Hafta 6-12",
                title: "İkincil Sifiliz",
                description: "Vücuda yayılır",
                symptoms: ["Deri döküntüleri", "Ateş", "Yorgunluk", "Saç dökülmesi"],
                risk: "Çok bulaşıcı"
            },
            {
                time: "Yıl 1-20",
                title: "Latent (Gizli) Sifiliz",
                description: "Belirti vermez ama aktif",
                symptoms: ["Belirti yok", "Test pozitif"],
                risk: "Az bulaşıcı ama tehlikeli"
            },
            {
                time: "Yıl 10-30",
                title: "Üçüncül Sifiliz",
                description: "Organlar hasar görür",
                symptoms: ["Kalp hasarı", "Beyin hasarı", "Körlük", "Felç"],
                risk: "Hayati tehlike"
            }
        ],
        warning: "Erken tedavi %100 iyileşme! Geç tedavi kalıcı hasar bırakır."
    },
    "Trikomonas": {
        icon: "🔵",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Parazit cinsel temas ile geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı"
            },
            {
                time: "Gün 5-28",
                title: "İnkübasyon",
                description: "Parazit çoğalmaya başlar",
                symptoms: ["Çoğu vakada belirti yok", "Hafif rahatsızlık olabilir"],
                risk: "Bulaşıcı ama farkında değil"
            },
            {
                time: "Hafta 1-4",
                title: "Belirtiler Başlar",
                description: "Karakteristik belirtiler ortaya çıkar",
                symptoms: ["Köpüklü sarı-yeşil akıntı", "Genital kaşıntı", "Yanma hissi", "Kötü koku"],
                risk: "Çok bulaşıcı"
            },
            {
                time: "Ay 1-6",
                title: "Kronik Enfeksiyon",
                description: "Tedavi edilmezse devam eder",
                symptoms: ["Belirtiler devam eder", "Cinsel ilişkide ağrı", "İdrar yaparken yanma"],
                risk: "Diğer CYBE'lere açık hale gelir"
            },
            {
                time: "Ay 6+",
                title: "Komplikasyonlar",
                description: "Uzun vadeli sorunlar",
                symptoms: ["Pelvik inflamatuar hastalık", "Hamilelikte erken doğum riski", "HIV bulaşma riski artar"],
                risk: "Kısırlık ve komplikasyon riski"
            }
        ],
        warning: "Tek doz ilaçla tedavi edilir! Partner tedavisi şart."
    },
    "Genital Herpes": {
        icon: "🔴",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Virüs cilt teması ile geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı (özellikle aktif yara varsa)"
            },
            {
                time: "Gün 2-12",
                title: "İnkübasyon",
                description: "Virüs sinir hücrelerine yerleşir",
                symptoms: ["Hafif karıncalanma", "Kaşıntı başlayabilir"],
                risk: "Bulaşıcı"
            },
            {
                time: "Gün 4-7",
                title: "İlk Atak (Primer)",
                description: "İlk su toplamaları çıkar",
                symptoms: ["Ağrılı su toplamaları", "Ateş, baş ağrısı", "Lenf bezi şişmesi", "Grip benzeri belirtiler"],
                risk: "Çok bulaşıcı!"
            },
            {
                time: "Hafta 2-4",
                title: "İyileşme",
                description: "Yaralar iyileşir ama virüs kalır",
                symptoms: ["Yaralar kabuklanır", "Ağrı azalır", "Virüs sinir köklerinde saklanır"],
                risk: "Azalan bulaşıcılık"
            },
            {
                time: "Ömür Boyu",
                title: "Tekrarlayan Ataklar",
                description: "Virüs periyodik olarak aktifleşir",
                symptoms: ["Yılda 4-5 kez atak", "Stres, hastalık, güneş tetikler", "Her atak daha hafif"],
                risk: "Atak dönemlerinde bulaşıcı"
            }
        ],
        warning: "Tedavi yok ama antiviral ilaçlar atakları azaltır. Kondom kısmi koruma sağlar."
    },
    "Hepatit C": {
        icon: "🟠",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Virüs kan yoluyla geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı"
            },
            {
                time: "Hafta 2-12",
                title: "İnkübasyon",
                description: "Virüs karaciğere yerleşir",
                symptoms: ["Belirti yok", "Testler negatif olabilir"],
                risk: "Bulaşıcı ama test negatif"
            },
            {
                time: "Ay 2-6",
                title: "Akut Hepatit C",
                description: "%20-30 vakada belirti verir",
                symptoms: ["Yorgunluk", "Karın ağrısı", "Sarılık (nadir)", "İştahsızlık"],
                risk: "Bulaşıcı"
            },
            {
                time: "Ay 6+",
                title: "Kronik Hepatit C",
                description: "%75-85 vakada kronikleşir",
                symptoms: ["Çoğu zaman belirti yok", "Hafif yorgunluk", "Karaciğer enzimleri yüksek"],
                risk: "Bulaşıcı - sessiz hasar"
            },
            {
                time: "Yıl 20-30",
                title: "Siroz ve Kanser",
                description: "Tedavi edilmezse ciddi hasar",
                symptoms: ["Karaciğer sirozu (%20)", "Karaciğer kanseri riski", "Karaciğer yetmezliği"],
                risk: "Hayati tehlike"
            }
        ],
        warning: "Modern ilaçlarla %95+ iyileşme! Erken teşhis çok önemli."
    },
    "Mikoplazma/Ureaplazma": {
        icon: "🟣",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Bakteri cinsel temas ile geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı"
            },
            {
                time: "Gün 7-21",
                title: "İnkübasyon",
                description: "Bakteri üreme yollarına yerleşir",
                symptoms: ["Çoğu vakada belirti yok", "Hafif rahatsızlık olabilir"],
                risk: "Bulaşıcı ama farkında değil"
            },
            {
                time: "Hafta 2-4",
                title: "Hafif Belirtiler",
                description: "Belirti verenler azınlıkta",
                symptoms: ["Hafif akıntı", "İdrar yaparken hafif yanma", "Genital bölgede rahatsızlık"],
                risk: "Bulaşıcı"
            },
            {
                time: "Ay 1-6",
                title: "Kronik Taşıyıcılık",
                description: "Tedavi edilmezse devam eder",
                symptoms: ["Belirti olmadan taşıyıcılık", "Ara sıra hafif belirtiler", "Partner enfeksiyonu"],
                risk: "Sessiz bulaşma"
            },
            {
                time: "Ay 6+",
                title: "Komplikasyonlar",
                description: "Özellikle hamilelikte riskli",
                symptoms: ["Pelvik inflamatuar hastalık", "Hamilelikte erken doğum", "Kısırlık riski", "Prostat iltihabı (erkek)"],
                risk: "Üreme sağlığı riski"
            }
        ],
        warning: "Hamilelik öncesi tarama önemli! Antibiyotikle kolayca tedavi edilir."
    }
};

function getTimelineData() {
    return getCurrentDataLanguage() === 'en' ? timelineDataEn : timelineDataTr;
}

// ==========================================
// Timeline Data - English
// ==========================================

const timelineDataEn = {
    "HIV/AIDS": {
        icon: "🔴",
        stages: [
            {
                time: "Day 0",
                title: "Moment of Transmission",
                description: "Virus enters the body",
                symptoms: ["No symptoms", "Virus enters bloodstream"],
                risk: "Not contagious (yet)"
            },
            {
                time: "Day 1-14",
                title: "Window Period",
                description: "Virus begins to multiply",
                symptoms: ["Tests may be negative", "Usually no symptoms"],
                risk: "Contagious but test negative!"
            },
            {
                time: "2-4 Weeks",
                title: "Acute HIV Syndrome",
                description: "First symptoms appear",
                symptoms: ["Flu-like symptoms", "Fever, fatigue", "Swollen lymph nodes"],
                risk: "Highly contagious!"
            },
            {
                time: "Month 1-10 Years",
                title: "Asymptomatic Period",
                description: "No symptoms but virus active",
                symptoms: ["Appears healthy", "Immune system slowly weakens"],
                risk: "Contagious - test positive"
            },
            {
                time: "Year 10+",
                title: "AIDS Stage",
                description: "Immune system collapses",
                symptoms: ["Opportunistic infections", "Serious illnesses", "Weight loss"],
                risk: "Life-threatening"
            }
        ],
        warning: "Early diagnosis saves lives! Normal life possible with treatment."
    },
    "HPV": {
        icon: "🟡",
        stages: [
            {
                time: "Day 0",
                title: "Transmission",
                description: "Virus passes through skin contact",
                symptoms: ["No symptoms"],
                risk: "Contagious"
            },
            {
                time: "Week 2-8",
                title: "Incubation",
                description: "Virus settles in cells",
                symptoms: ["No symptoms", "Immune system responds"],
                risk: "Contagious"
            },
            {
                time: "Month 2-6",
                title: "Wart Formation",
                description: "Genital warts may appear",
                symptoms: ["Small warts", "May itch"],
                risk: "Contagious"
            },
            {
                time: "Year 1-2",
                title: "Immune Response",
                description: "Body tries to clear virus",
                symptoms: ["90% of cases clear naturally", "Warts may disappear"],
                risk: "Decreasing contagiousness"
            },
            {
                time: "Year 10-20",
                title: "High-Risk HPV",
                description: "Some types can lead to cancer",
                symptoms: ["Cervical cell changes", "Cancer risk"],
                risk: "Regular screening important!"
            }
        ],
        warning: "HPV vaccine provides 90% protection! Get vaccinated ages 9-26."
    },
    "Hepatit B": {
        icon: "🟠",
        stages: [
            {
                time: "Day 0",
                title: "Transmission",
                description: "Virus passes through blood/body fluids",
                symptoms: ["No symptoms"],
                risk: "Contagious"
            },
            {
                time: "Week 6-12",
                title: "Incubation",
                description: "Virus settles in liver",
                symptoms: ["No symptoms", "Tests may be positive"],
                risk: "Contagious"
            },
            {
                time: "Month 2-6",
                title: "Acute Hepatitis",
                description: "Liver becomes inflamed",
                symptoms: ["Jaundice", "Fatigue", "Abdominal pain", "Dark urine"],
                risk: "Highly contagious"
            },
            {
                time: "Month 6+",
                title: "Chronic Hepatitis",
                description: "Becomes chronic in 5-10% of cases",
                symptoms: ["Mild or no symptoms", "Liver damage continues"],
                risk: "Contagious - treatment needed"
            },
            {
                time: "Year 20-30",
                title: "Cirrhosis/Cancer Risk",
                description: "Serious damage if untreated",
                symptoms: ["Liver cirrhosis", "Liver cancer risk"],
                risk: "Life-threatening"
            }
        ],
        warning: "Hepatitis B vaccine provides 95% protection! Get vaccinated."
    },
    "Klamidya": {
        icon: "🔵",
        stages: [
            {
                time: "Day 0",
                title: "Transmission",
                description: "Bacteria passes through sexual contact",
                symptoms: ["No symptoms"],
                risk: "Contagious"
            },
            {
                time: "Day 7-21",
                title: "Incubation",
                description: "Bacteria multiplies",
                symptoms: ["70-80% of cases have no symptoms!", "Mild burning possible"],
                risk: "Contagious but unaware"
            },
            {
                time: "Week 2-4",
                title: "Symptoms (if any)",
                description: "Some cases show symptoms",
                symptoms: ["Painful urination", "Discharge", "Lower abdominal pain"],
                risk: "Contagious"
            },
            {
                time: "Month 1-6",
                title: "If Untreated",
                description: "Infection spreads",
                symptoms: ["Pelvic inflammatory disease", "Pain increases"],
                risk: "Infertility risk begins"
            },
            {
                time: "Year 1+",
                title: "Complications",
                description: "Serious problems develop",
                symptoms: ["Infertility", "Chronic pain", "Ectopic pregnancy risk"],
                risk: "Permanent damage"
            }
        ],
        warning: "Get tested even without symptoms! 95% recovery with treatment."
    },
    "Gonore": {
        icon: "🟢",
        stages: [
            {
                time: "Day 0",
                title: "Transmission",
                description: "Bacteria passes through sexual contact",
                symptoms: ["No symptoms"],
                risk: "Contagious"
            },
            {
                time: "Day 2-7",
                title: "Rapid Development",
                description: "Gonorrhea shows symptoms quickly",
                symptoms: ["Burning begins", "Discharge begins"],
                risk: "Highly contagious"
            },
            {
                time: "Week 1-2",
                title: "Acute Symptoms",
                description: "Symptoms become pronounced",
                symptoms: ["Yellow-green discharge", "Painful urination", "Swelling"],
                risk: "Highly contagious"
            },
            {
                time: "Week 2-4",
                title: "Spread",
                description: "Spreads if untreated",
                symptoms: ["Testicular/ovarian inflammation", "Fever", "Severe pain"],
                risk: "Infertility risk"
            },
            {
                time: "Month 1+",
                title: "Complications",
                description: "Serious problems",
                symptoms: ["Infertility", "Joint inflammation", "Heart valve infection"],
                risk: "Can be life-threatening"
            }
        ],
        warning: "Quick treatment important! Antibiotic resistance can develop."
    },
    "Sifiliz": {
        icon: "🟣",
        stages: [
            {
                time: "Day 0",
                title: "Transmission",
                description: "Bacteria passes through wound contact",
                symptoms: ["No symptoms"],
                risk: "Contagious"
            },
            {
                time: "Week 3",
                title: "Primary Syphilis",
                description: "First sore (chancre) appears",
                symptoms: ["Painless sore", "Swollen lymph nodes"],
                risk: "Highly contagious"
            },
            {
                time: "Week 6-12",
                title: "Secondary Syphilis",
                description: "Spreads throughout body",
                symptoms: ["Skin rashes", "Fever", "Fatigue", "Hair loss"],
                risk: "Highly contagious"
            },
            {
                time: "Year 1-20",
                title: "Latent (Hidden) Syphilis",
                description: "No symptoms but active",
                symptoms: ["No symptoms", "Test positive"],
                risk: "Less contagious but dangerous"
            },
            {
                time: "Year 10-30",
                title: "Tertiary Syphilis",
                description: "Organs are damaged",
                symptoms: ["Heart damage", "Brain damage", "Blindness", "Paralysis"],
                risk: "Life-threatening"
            }
        ],
        warning: "Early treatment 100% recovery! Late treatment causes permanent damage."
    },
    "Trikomonas": {
        icon: "🔵",
        stages: [
            {
                time: "Day 0",
                title: "Transmission",
                description: "Parasite passes through sexual contact",
                symptoms: ["No symptoms"],
                risk: "Contagious"
            },
            {
                time: "Day 5-28",
                title: "Incubation",
                description: "Parasite begins to multiply",
                symptoms: ["Most cases have no symptoms", "Mild discomfort possible"],
                risk: "Contagious but unaware"
            },
            {
                time: "Week 1-4",
                title: "Symptoms Begin",
                description: "Characteristic symptoms appear",
                symptoms: ["Frothy yellow-green discharge", "Genital itching", "Burning sensation", "Bad odor"],
                risk: "Highly contagious"
            },
            {
                time: "Month 1-6",
                title: "Chronic Infection",
                description: "Continues if untreated",
                symptoms: ["Symptoms persist", "Pain during intercourse", "Burning during urination"],
                risk: "Vulnerable to other STIs"
            },
            {
                time: "Month 6+",
                title: "Complications",
                description: "Long-term problems",
                symptoms: ["Pelvic inflammatory disease", "Premature birth risk in pregnancy", "Increased HIV transmission risk"],
                risk: "Infertility and complication risk"
            }
        ],
        warning: "Treated with single dose! Partner treatment required."
    },
    "Genital Herpes": {
        icon: "🔴",
        stages: [
            {
                time: "Day 0",
                title: "Transmission",
                description: "Virus passes through skin contact",
                symptoms: ["No symptoms"],
                risk: "Contagious (especially with active sores)"
            },
            {
                time: "Day 2-12",
                title: "Incubation",
                description: "Virus settles in nerve cells",
                symptoms: ["Mild tingling", "Itching may begin"],
                risk: "Contagious"
            },
            {
                time: "Day 4-7",
                title: "First Outbreak (Primary)",
                description: "First blisters appear",
                symptoms: ["Painful blisters", "Fever, headache", "Swollen lymph nodes", "Flu-like symptoms"],
                risk: "Highly contagious!"
            },
            {
                time: "Week 2-4",
                title: "Healing",
                description: "Sores heal but virus remains",
                symptoms: ["Sores scab over", "Pain decreases", "Virus hides in nerve roots"],
                risk: "Decreasing contagiousness"
            },
            {
                time: "Lifelong",
                title: "Recurring Outbreaks",
                description: "Virus periodically reactivates",
                symptoms: ["4-5 outbreaks per year", "Stress, illness, sun triggers", "Each outbreak milder"],
                risk: "Contagious during outbreaks"
            }
        ],
        warning: "No cure but antiviral drugs reduce outbreaks. Condoms provide partial protection."
    },
    "Hepatit C": {
        icon: "🟠",
        stages: [
            {
                time: "Day 0",
                title: "Transmission",
                description: "Virus passes through blood",
                symptoms: ["No symptoms"],
                risk: "Contagious"
            },
            {
                time: "Week 2-12",
                title: "Incubation",
                description: "Virus settles in liver",
                symptoms: ["No symptoms", "Tests may be negative"],
                risk: "Contagious but test negative"
            },
            {
                time: "Month 2-6",
                title: "Acute Hepatitis C",
                description: "20-30% of cases show symptoms",
                symptoms: ["Fatigue", "Abdominal pain", "Jaundice (rare)", "Loss of appetite"],
                risk: "Contagious"
            },
            {
                time: "Month 6+",
                title: "Chronic Hepatitis C",
                description: "Becomes chronic in 75-85% of cases",
                symptoms: ["Usually no symptoms", "Mild fatigue", "Elevated liver enzymes"],
                risk: "Contagious - silent damage"
            },
            {
                time: "Year 20-30",
                title: "Cirrhosis and Cancer",
                description: "Serious damage if untreated",
                symptoms: ["Liver cirrhosis (20%)", "Liver cancer risk", "Liver failure"],
                risk: "Life-threatening"
            }
        ],
        warning: "95%+ recovery with modern drugs! Early diagnosis very important."
    },
    "Mikoplazma/Ureaplazma": {
        icon: "🟣",
        stages: [
            {
                time: "Day 0",
                title: "Transmission",
                description: "Bacteria passes through sexual contact",
                symptoms: ["No symptoms"],
                risk: "Contagious"
            },
            {
                time: "Day 7-21",
                title: "Incubation",
                description: "Bacteria settles in reproductive tract",
                symptoms: ["Most cases have no symptoms", "Mild discomfort possible"],
                risk: "Contagious but unaware"
            },
            {
                time: "Week 2-4",
                title: "Mild Symptoms",
                description: "Minority show symptoms",
                symptoms: ["Mild discharge", "Mild burning during urination", "Genital discomfort"],
                risk: "Contagious"
            },
            {
                time: "Month 1-6",
                title: "Chronic Carrier",
                description: "Continues if untreated",
                symptoms: ["Asymptomatic carrier", "Occasional mild symptoms", "Partner infection"],
                risk: "Silent transmission"
            },
            {
                time: "Month 6+",
                title: "Complications",
                description: "Especially risky in pregnancy",
                symptoms: ["Pelvic inflammatory disease", "Premature birth in pregnancy", "Infertility risk", "Prostatitis (male)"],
                risk: "Reproductive health risk"
            }
        ],
        warning: "Pre-pregnancy screening important! Easily treated with antibiotics."
    }
};
