# basic.js El Kitabı — Web Sitesi

basic.js'in kullanımını öğreten el kitabının web sayfası hali. Sayfanın tamamı **basic.js** ile, saf JavaScript ile çizilir.
Framework, derleme adımı ve CSS dosyası yoktur.

Çalıştırmak için klasörü bir web sunucusu ile açın (VS Code Live Server: port 5505) ve `index.htm` sayfasına gidin.
Bölümler `fetch` ile okunduğu için sayfa dosya olarak (`file://`) açılırsa çalışmaz; sayfa bunu bir mesajla bildirir.

---

## İçerik nereden geliyor?

Bölümler **Markdown** dosyalarından okunur ve basic.js nesneleriyle çizilir. Dosyalar, deponun `__handbook/english` ve
`__handbook/turkce` klasörlerinin bu sitedeki kopyasıdır: `handbook/english`, `handbook/turkce`. El kitabını güncellemek için
`__handbook` içindeki dosyaları düzenleyin, sonra `./_update-copies.sh` çalıştırın (bkz. Dosyalar).

Tek istisna **Hızlı Başlangıç** bölümüdür: boş bir sayfanın nasıl kurulacağını anlatır ve `js/texts.js` → `quickStart`
içindedir (iki dilde).

Bölümlerin menüdeki sırası ve grupları: `js/config.js` → `chapters`.

---

## Özellikler

- **Canlı örnekler:** Ekrana nesne çizen her JavaScript örneğinin üstünde **Çalıştır** düğmesi vardır. Kod, basic.js
  yüklü küçük bir sayfa olarak aynı yerde (WebView, iframe) çalışır. `console.log`, `println` ve hatalar örneğin
  altındaki konsolda görünür.
- **Düzenlenebilir kod:** İlk çalıştırmadan sonra kod değiştirilebilir. Ctrl (Cmd) + Enter tekrar çalıştırır,
  Tab 4 boşluk ekler, **Sıfırla** kodu ilk haline döndürür.
- `window.onload` veya `start()` içermeyen kısa örnekler, bir `start()` fonksiyonunun içine konularak çalıştırılır.
  Daha önceki bir örneğin değişkenini kullanan parçalar hata verebilir; bu durumda konsolda bir not çıkar.
- Örneklerdeki göreli dosya yolları (`test.png`) el kitabı klasörüne göre çözülür.
- **Arama:** Bütün bölümlerin başlık ve metinlerinde arar (comp-m4 `SearchResults`). `/` veya Ctrl (Cmd) + K arama kutusuna gider.
- **Bu sayfada:** Geniş ekranda sağda, bölümün başlıkları; okunan başlık işaretlenir.
- **Adresler:** `index.htm#/box` (bölüm), `index.htm#/box/examples` (bölümdeki başlık). Tarayıcının geri düğmesi çalışır.
- **Dil:** Üst çubuktaki TR/EN düğmesi. Seçim `basic.storage` içinde saklanır; ilk girişte tarayıcı dili Türkçe ise Türkçe açılır.
- **Mobil:** 960 px altında bölüm listesi menü düğmesiyle açılan bir çekmecedir.
- Markdown içindeki `02-box.md` gibi dosya adları, o bölüme bağlantı olur.

---

## Dosyalar

| Dosya | İçerik |
|---|---|
| `index.htm` | Kütüphane, bileşen ve site dosyalarını yükler. |
| `js/config.js` | Ayarlar: yollar, bölüm sırası, bağlantılar, ölçüler, dil. |
| `js/texts.js` | Arayüz yazıları ve Hızlı Başlangıç bölümü (`en` / `tr`). |
| `js/theme.js` | Renkler, ölçüler, ikonlar, düğme; Markdown HTML'i için küçük stil (`.hb-text`). |
| `js/markdown.js` | Bağımlılıksız Markdown ayrıştırıcı (başlık, paragraf, liste, alıntı, kod, tablo, satır içi biçimler). |
| `js/code-highlight.js` | JavaScript / HTML renklendirici (ana dizindeki bileşen sitesinin `index/code-highlight.js` dosyasının kopyası). |
| `js/code-block.js` | Kod blokları: Kopyala, Çalıştır, düzenleme, konsol. |
| `js/doc-view.js` | Bölümü çizer; "Bu sayfada", önceki / sonraki. |
| `js/layout.js` | Üst çubuk, bölüm listesi (çekmece), arama kutusu. |
| `js/site.js` | `start()`, dosyaları okuma, adres yönlendirme, dil, arama dizini. |

Kullanılan bileşenler: `WebView`, `SearchResults` (comp-m4, `.min.js`), `Toast` (comp-m4, kaynak dosya) ve `ScrollBar` (basic).
**Site kendi içinden çalışır:** Klasör olduğu gibi başka bir yere (ör. `https://bug7a.github.io/basic.js-handbook/`
reposunun köküne) kopyalanıp yayınlanabilir. Deponun başka hiçbir dosyasını kullanmaz; gereken dosyaların kopyası içindedir:

| Klasör | Kaynağı (depoda) |
|---|---|
| `basic/` | `basic/`: `basic.min.js`, `basic.min.css`, `scroll-bar.min.js`, `LICENSE`, `font/`, `img/` |
| `comp/` | `comp-m4/`: `web-view.min.js`, `search-results.min.js` ve `toast.js`'ten yapılan `toast.min.js` |
| `handbook/` | `__handbook/`: `english/`, `turkce/` (bölümler ve örneklerin dosyaları, `test.png`…) |

Kopyalar kendiliğinden güncellenmez. Kütüphane, bu bileşenler veya el kitabı değişince `./_update-copies.sh`
çalıştırın (her yerden çalışır; `toast.min.js` için `npx terser` kullanır). Yollar `js/config.js` içindedir
(`rootPath: "./"`, `handbookPath: "handbook/"`).

Klasörün adı `handbook` (`__handbook` değil): GitHub Pages'in Jekyll'ı, adı `_` ile başlayan klasörleri yayınlamaz.

---

## Yeni bir bölüm eklemek

1. `__handbook/english/` ve `__handbook/turkce/` içine aynı adla Markdown dosyasını ekleyin (ilk satır `# basic.js — Başlık`).
2. `js/config.js` → `chapters` listesine bir satır ekleyin: `{ id: "storage", file: "14-storage.md", group: "more" }`.

---

## Uygulama (PWA) ve çevrimdışı çalışma

El kitabı kurulabilir bir uygulamadır ve **internet yokken de açılır**. Bunu `04-template-m2/easy-pwa-script`'in
`easy-pwa.js` dosyası yapar (kütüphanesiz tek dosya; hem sayfa script'i hem service worker).

| Dosya | İçerik |
|---|---|
| `easy-pwa.js` | easy-pwa-script'in bu siteye ayarlanmış kopyası. Ayarlar en üstte (`SETTINGS`). |
| `manifest.webmanifest` | Uygulamanın adı ("basic.js Handbook", kısa adı "Handbook"), renkleri, ikonları. Adresleri göreli (`./`). |
| `icon/` | 192, 512, maskable 512 ve iOS için 180 px ikonlar (sayfanın SVG simgesinden). |

Ayarlar: `offlineMode: true` (önce ağ: internet varken her dosya ağdan gelir ve kaydı yenilenir, yokken kayıtlı olan),
`theme: "light"`, açılış ekranı (`launchScreen`, sadece kurulu uygulamada; `launchScreenHideByCode: true`: bölümler
çizilince `js/site.js` → `SiteApp.hideLaunchScreen()` kapatır), vurgu rengi `#2F6FEB`.

**`offlineFiles`:** İlk ziyarette kaydedilen dosyalar: sitenin bütün dosyaları (iki dilin bütün bölümleri, örneklerin
dosyaları, `basic/`, `comp/`, `js/`). Böylece ziyaretçi Türkçeye geçmeden veya bir örneği çalıştırmadan da hepsi
çevrimdışı açılır. Liste elle yazılmaz: `./_update-copies.sh` her çalıştığında `easy-pwa.js` içindeki
`OFFLINE FILES START` / `END` arasına yeniden yazar. **Yeni bir bölüm ekledikten sonra `./_update-copies.sh` çalıştırın.**

**easy-pwa-script güncellenirse:** Yeni `easy-pwa.js`'i buraya kopyalayın, `SETTINGS`'teki bu sitenin ayarlarını
(yukarıdakiler ve `OFFLINE FILES` işaretleri) geri yazın, sonra `./_update-copies.sh` çalıştırın.

Test: DevTools > Application > Service workers, sonra Network > **Offline**: bölümler, arama ve canlı örnekler
çalışmaya devam eder. Açılış ekranını tarayıcıda görmek için geçici olarak `launchScreenInBrowser: true`.

## SEO

- **Dil adreste:** Varsayılan dil adresin kendisidir, diğer dil `?lang=tr` / `?lang=en` ile açılır (`js/site.js` → `loadLanguage`).
  Dil değişince adres de değişir; kopyalanan bağlantı aynı dilde açılır. Arama motoru iki dili ayrı adreslerde okur.
- **`CONFIG.siteURL`** (`js/config.js`): Sayfanın yayın adresi. Yazılınca sayfa `canonical`, `hreflang` (tr / en / x-default)
  ve `og:url` etiketlerini kendisi ekler. Adres belli olunca `index.htm` içindeki `og:image` değerini de tam adres yapın
  (bağlantı önizlemeleri JavaScript çalıştırmaz).
- **`index.htm`:** `<head>` içinde paylaşım etiketleri (Open Graph, `summary_large_image`) ve JSON-LD (schema.org) var;
  `<body>` içindeki `<noscript>` bölümü sayfanın içeriğini düz HTML olarak verir. İkisi de `js/texts.js`'teki
  (varsayılan dildeki) metinlerden yapıldı: metinler değişince bunları da güncelleyin. Bölüm listesi `js/config.js` ve `__handbook/english` başlıklarından gelir.
- **`assets/og-image.jpg`:** Bağlantı önizleme resmi (1200 × 630), sayfanın ilk ekranı.

## English

The basic.js handbook as a website, built with basic.js. The chapters are read from the Markdown files in
`__handbook/english` and `__handbook/turkce` (serve the folder with a web server; `file://` can not read them).
Every JavaScript example that draws objects has a **Run** button: it runs in the page, its console output is shown
under it, and the code can be edited and run again (Ctrl/Cmd + Enter). Search (`/`), "On this page", previous/next,
TR/EN, and a drawer menu on small screens. Chapter order: `js/config.js`, interface texts and the Quick Start chapter: `js/texts.js`.
