import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const basePath = "/happy-bank/privacy-policy/";
const email = "devfallingstar@gmail.com";
const bundleId = "com.devstar.happybank";
const effectiveDate = "2026-05-14";

const languageLinks = [
  ["ko.html", "한국어"],
  ["en.html", "English"],
  ["jp.html", "日本語"],
  ["de.html", "Deutsch"],
  ["es.html", "Español"],
  ["fr.html", "Français"],
  ["pt-BR.html", "Português"],
  ["zh-Hans.html", "简体中文"],
];

const locales = {
  ko: {
    file: "ko.html",
    htmlLang: "ko",
    title: "행복 저금통 개인정보처리방침",
    appName: "행복 저금통 (HappyBank)",
    heading: "개인정보처리방침",
    lead:
      "행복 저금통은 사용자가 기록한 행복한 순간을 기기와 사용자의 iCloud 환경에 보관하고, 앱 기능 제공에 필요한 범위에서만 정보를 처리합니다.",
    meta: {
      effective: "시행일",
      appId: "앱 식별자",
      contact: "문의",
    },
    sections: [
      {
        title: "1. 수집 및 저장하는 정보",
        items: [
          "사용자가 직접 입력한 행복 기록, 행복 점수, 카테고리, 기록 날짜",
          "사용자가 선택하거나 촬영해 기록에 첨부한 사진",
          "위젯 표시를 위한 총 행복 점수와 최근 기록 요약",
          "알림 제공을 위한 알림 권한 상태 및 예약 알림 정보",
          "앱 내 광고 제공과 측정을 위해 Google Mobile Ads SDK가 처리할 수 있는 광고 관련 정보",
        ],
      },
      {
        title: "2. 이용 목적",
        items: [
          "행복 기록 저장, 조회, 검색, 수정 및 삭제",
          "행복 점수와 기록을 바탕으로 한 주간 보고서 생성",
          "홈 화면 위젯에 행복 점수와 최근 기록 표시",
          "매일 기록 알림과 보고서 알림 제공",
          "앱 내 광고 표시 및 광고 성과 측정",
        ],
      },
      {
        title: "3. 저장 위치와 동기화",
        paragraphs: [
          "행복 기록은 기기 내 앱 저장소에 저장됩니다. 사용자의 iCloud 설정과 앱 환경에 따라 CloudKit을 통해 사용자의 Apple 기기 사이에서 동기화될 수 있습니다.",
          "기록에 첨부한 사진은 앱 전용 저장 공간에 저장되며, iCloud 사용 가능 시 앱의 iCloud 컨테이너로 복사될 수 있습니다. 위젯 데이터는 앱 그룹 저장소에 최소한의 요약 정보로 저장됩니다.",
        ],
      },
      {
        title: "4. 광고 및 추적",
        paragraphs: [
          "행복 저금통은 Google Mobile Ads SDK를 사용해 앱 내 광고를 표시합니다. 맞춤형 광고가 필요한 경우 Apple의 앱 추적 투명성(ATT) 동의 절차를 거치며, 사용자는 iOS 설정에서 추적 허용 여부를 변경할 수 있습니다.",
          'Google의 데이터 처리 방식은 <a href="https://policies.google.com/privacy" rel="noopener">Google 개인정보처리방침</a>을 참고해 주세요.',
          `부적절하거나 연령에 맞지 않는 광고를 발견한 경우 광고 화면의 스크린샷과 내용을 <a href="mailto:${email}?subject=HappyBank%20ad%20report">${email}</a>으로 신고할 수 있습니다.`,
        ],
      },
      {
        title: "5. 권한 사용",
        items: [
          "카메라 권한은 사용자가 사진을 촬영해 기록에 첨부할 때만 요청합니다.",
          "사진 보관함 접근은 사용자가 사진을 선택하거나 저장할 때 사용됩니다.",
          "알림 권한은 기록 알림과 보고서 알림을 제공하기 위해 사용됩니다.",
        ],
      },
      {
        title: "6. 제3자 서비스",
        items: [
          "Apple iCloud 및 CloudKit: 사용자 기기 간 데이터 동기화",
          "Google AdMob: 앱 내 광고 제공 및 광고 측정",
          "GitHub Pages: 본 개인정보처리방침 웹페이지 호스팅",
        ],
      },
      {
        title: "7. 데이터 삭제 및 관리",
        items: [
          "사용자는 앱 안에서 행복 기록과 보고서를 삭제할 수 있습니다.",
          "기록 삭제 시 앱에 저장된 연결 사진도 함께 삭제됩니다.",
          "앱 삭제 시 기기 내 앱 데이터는 삭제됩니다.",
          "iCloud에 동기화된 데이터는 사용자의 iCloud 설정 또는 기기 설정에 따라 별도로 관리될 수 있습니다.",
        ],
      },
      {
        title: "8. 개인정보처리방침 변경",
        paragraphs: [
          "앱 기능, 법령, 제3자 서비스 정책 변경에 따라 본 방침이 업데이트될 수 있습니다. 중요한 변경이 있을 경우 앱 내 화면 또는 본 페이지를 통해 고지합니다.",
        ],
      },
      {
        title: "9. 문의",
        paragraphs: [
          `개인정보 처리와 관련한 문의는 <a href="mailto:${email}">${email}</a>으로 연락해 주세요.`,
        ],
      },
    ],
    footer:
      "이 문서는 행복 저금통 앱의 개인정보 처리 내용을 설명하기 위한 문서입니다. App Store Connect의 개인정보처리방침 URL로 사용할 수 있습니다.",
  },
  en: {
    file: "en.html",
    htmlLang: "en",
    title: "Happy Bank Privacy Policy",
    appName: "Happy Bank",
    heading: "Privacy Policy",
    lead:
      "Happy Bank keeps the happy moments you record on your device and in your iCloud environment, and processes information only as needed to provide app features.",
    meta: {
      effective: "Effective date",
      appId: "App identifier",
      contact: "Contact",
    },
    sections: [
      {
        title: "1. Information We Collect and Store",
        items: [
          "Happy records, happiness scores, categories, and record dates entered by the user",
          "Photos selected or taken by the user and attached to records",
          "Total happiness score and recent record summaries for widgets",
          "Notification permission status and scheduled notification information",
          "Advertising-related information that may be processed by the Google Mobile Ads SDK to provide and measure in-app ads",
        ],
      },
      {
        title: "2. Purpose of Use",
        items: [
          "Saving, viewing, searching, editing, and deleting happy records",
          "Creating weekly reports based on happiness scores and records",
          "Showing happiness scores and recent records in Home Screen widgets",
          "Providing daily record reminders and report notifications",
          "Displaying in-app ads and measuring ad performance",
        ],
      },
      {
        title: "3. Storage and Sync",
        paragraphs: [
          "Happy records are stored in the app storage on your device. Depending on your iCloud settings and app environment, they may be synced across your Apple devices through CloudKit.",
          "Photos attached to records are stored in app-specific storage and may be copied to the app's iCloud container when iCloud is available. Widget data is stored in app group storage as minimal summary information.",
        ],
      },
      {
        title: "4. Advertising and Tracking",
        paragraphs: [
          "Happy Bank uses the Google Mobile Ads SDK to display in-app ads. If personalized advertising is needed, the app follows Apple's App Tracking Transparency (ATT) consent process, and you can change tracking permission in iOS Settings.",
          'For information about how Google processes data, please see the <a href="https://policies.google.com/privacy" rel="noopener">Google Privacy Policy</a>.',
          `If you see an inappropriate or age-unsuitable ad, you can report it with a screenshot and description to <a href="mailto:${email}?subject=HappyBank%20ad%20report">${email}</a>.`,
        ],
      },
      {
        title: "5. Permission Use",
        items: [
          "Camera permission is requested only when you take a photo to attach to a record.",
          "Photo library access is used when you select or save photos.",
          "Notification permission is used to provide record reminders and report notifications.",
        ],
      },
      {
        title: "6. Third-Party Services",
        items: [
          "Apple iCloud and CloudKit: syncing data across your devices",
          "Google AdMob: providing and measuring in-app ads",
          "GitHub Pages: hosting this privacy policy webpage",
        ],
      },
      {
        title: "7. Data Deletion and Management",
        items: [
          "You can delete happy records and reports within the app.",
          "When a record is deleted, the photos linked to that record in the app are also deleted.",
          "When the app is deleted, app data stored on the device is deleted.",
          "Data synced to iCloud may be managed separately through your iCloud or device settings.",
        ],
      },
      {
        title: "8. Changes to This Privacy Policy",
        paragraphs: [
          "This policy may be updated when app features, laws, or third-party service policies change. Important changes will be announced in the app or on this page.",
        ],
      },
      {
        title: "9. Contact",
        paragraphs: [
          `For privacy-related questions, please contact <a href="mailto:${email}">${email}</a>.`,
        ],
      },
    ],
    footer:
      "This document explains how the Happy Bank app handles privacy. It may be used as the privacy policy URL in App Store Connect.",
  },
  jp: {
    file: "jp.html",
    htmlLang: "ja",
    title: "しあわせ貯金箱 プライバシーポリシー",
    appName: "しあわせ貯金箱 (Happy Bank)",
    heading: "プライバシーポリシー",
    lead:
      "しあわせ貯金箱は、ユーザーが記録したしあわせな瞬間を端末およびユーザーの iCloud 環境に保存し、アプリ機能の提供に必要な範囲でのみ情報を処理します。",
    meta: {
      effective: "施行日",
      appId: "アプリ識別子",
      contact: "お問い合わせ",
    },
    sections: [
      {
        title: "1. 収集および保存する情報",
        items: [
          "ユーザーが入力したしあわせの記録、しあわせスコア、カテゴリ、記録日",
          "ユーザーが選択または撮影し、記録に添付した写真",
          "ウィジェット表示のための合計しあわせスコアと最近の記録の要約",
          "通知権限の状態および予約された通知情報",
          "アプリ内広告の提供と測定のために Google Mobile Ads SDK が処理する可能性のある広告関連情報",
        ],
      },
      {
        title: "2. 利用目的",
        items: [
          "しあわせの記録の保存、閲覧、検索、編集、削除",
          "しあわせスコアと記録に基づく週間レポートの作成",
          "ホーム画面ウィジェットへのしあわせスコアと最近の記録の表示",
          "毎日の記録リマインダーおよびレポート通知の提供",
          "アプリ内広告の表示および広告成果の測定",
        ],
      },
      {
        title: "3. 保存場所と同期",
        paragraphs: [
          "しあわせの記録は端末内のアプリ保存領域に保存されます。ユーザーの iCloud 設定とアプリ環境によっては、CloudKit を通じて Apple デバイス間で同期される場合があります。",
          "記録に添付された写真はアプリ専用の保存領域に保存され、iCloud が利用可能な場合はアプリの iCloud コンテナへコピーされる場合があります。ウィジェットデータは、最小限の要約情報としてアプリグループの保存領域に保存されます。",
        ],
      },
      {
        title: "4. 広告およびトラッキング",
        paragraphs: [
          "しあわせ貯金箱は、Google Mobile Ads SDK を使用してアプリ内広告を表示します。パーソナライズ広告が必要な場合は、Apple の App Tracking Transparency (ATT) の同意手続きを行い、ユーザーは iOS 設定でトラッキング許可を変更できます。",
          'Google のデータ処理については、<a href="https://policies.google.com/privacy" rel="noopener">Google プライバシーポリシー</a>をご確認ください。',
          `不適切または年齢に適さない広告を見つけた場合は、広告画面のスクリーンショットと内容を <a href="mailto:${email}?subject=HappyBank%20ad%20report">${email}</a> まで報告できます。`,
        ],
      },
      {
        title: "5. 権限の使用",
        items: [
          "カメラ権限は、ユーザーが写真を撮影して記録に添付する場合にのみ要求します。",
          "写真ライブラリへのアクセスは、ユーザーが写真を選択または保存する場合に使用されます。",
          "通知権限は、記録リマインダーとレポート通知を提供するために使用されます。",
        ],
      },
      {
        title: "6. 第三者サービス",
        items: [
          "Apple iCloud および CloudKit: ユーザーのデバイス間でのデータ同期",
          "Google AdMob: アプリ内広告の提供および広告測定",
          "GitHub Pages: 本プライバシーポリシーのウェブページホスティング",
        ],
      },
      {
        title: "7. データの削除と管理",
        items: [
          "ユーザーはアプリ内でしあわせの記録とレポートを削除できます。",
          "記録を削除すると、アプリ内でその記録に紐づく写真も削除されます。",
          "アプリを削除すると、端末内のアプリデータは削除されます。",
          "iCloud に同期されたデータは、ユーザーの iCloud 設定または端末設定で別途管理される場合があります。",
        ],
      },
      {
        title: "8. プライバシーポリシーの変更",
        paragraphs: [
          "アプリ機能、法令、第三者サービスのポリシー変更に応じて、本ポリシーは更新される場合があります。重要な変更がある場合は、アプリ内画面または本ページでお知らせします。",
        ],
      },
      {
        title: "9. お問い合わせ",
        paragraphs: [
          `個人情報の取り扱いに関するお問い合わせは、<a href="mailto:${email}">${email}</a> までご連絡ください。`,
        ],
      },
    ],
    footer:
      "この文書は、しあわせ貯金箱アプリの個人情報の取り扱いを説明するためのものです。App Store Connect のプライバシーポリシー URL として使用できます。",
  },
  de: {
    file: "de.html",
    htmlLang: "de",
    title: "Happy Bank Datenschutzrichtlinie",
    appName: "Happy Bank",
    heading: "Datenschutzrichtlinie",
    lead:
      "Happy Bank speichert die von dir festgehaltenen gluecklichen Momente auf deinem Geraet und in deiner iCloud-Umgebung und verarbeitet Informationen nur, soweit dies fuer die App-Funktionen erforderlich ist.",
    meta: {
      effective: "Gueltig ab",
      appId: "App-Kennung",
      contact: "Kontakt",
    },
    sections: [
      {
        title: "1. Erhobene und gespeicherte Informationen",
        items: [
          "Vom Nutzer eingegebene Glueckseintraege, Glueckswerte, Kategorien und Aufzeichnungsdaten",
          "Fotos, die der Nutzer auswaehlt oder aufnimmt und Eintraegen hinzufuegt",
          "Gesamter Glueckswert und Zusammenfassungen neuerer Eintraege fuer Widgets",
          "Status der Benachrichtigungsberechtigung und geplante Benachrichtigungen",
          "Werbebezogene Informationen, die das Google Mobile Ads SDK zur Bereitstellung und Messung von In-App-Werbung verarbeiten kann",
        ],
      },
      {
        title: "2. Zwecke der Nutzung",
        items: [
          "Speichern, Anzeigen, Suchen, Bearbeiten und Loeschen von Glueckseintraegen",
          "Erstellen von Wochenberichten auf Basis von Glueckswerten und Eintraegen",
          "Anzeige von Glueckswerten und neuen Eintraegen in Home-Bildschirm-Widgets",
          "Bereitstellung taeglicher Erinnerungen und Berichtbenachrichtigungen",
          "Anzeige von In-App-Werbung und Messung der Anzeigenleistung",
        ],
      },
      {
        title: "3. Speicherung und Synchronisierung",
        paragraphs: [
          "Glueckseintraege werden im App-Speicher auf deinem Geraet gespeichert. Abhaengig von deinen iCloud-Einstellungen und der App-Umgebung koennen sie ueber CloudKit zwischen deinen Apple-Geraeten synchronisiert werden.",
          "Fotos, die Eintraegen hinzugefuegt werden, werden im app-spezifischen Speicher abgelegt und koennen bei verfuegbarer iCloud in den iCloud-Container der App kopiert werden. Widget-Daten werden als minimale Zusammenfassung im App-Group-Speicher abgelegt.",
        ],
      },
      {
        title: "4. Werbung und Tracking",
        paragraphs: [
          "Happy Bank verwendet das Google Mobile Ads SDK, um In-App-Werbung anzuzeigen. Wenn personalisierte Werbung erforderlich ist, wird Apples App Tracking Transparency (ATT) Einwilligungsprozess genutzt. Du kannst die Tracking-Erlaubnis in den iOS-Einstellungen aendern.",
          'Informationen zur Datenverarbeitung durch Google findest du in der <a href="https://policies.google.com/privacy" rel="noopener">Google Datenschutzerklaerung</a>.',
          `Wenn du unangemessene oder nicht altersgerechte Werbung siehst, kannst du sie mit Screenshot und Beschreibung an <a href="mailto:${email}?subject=HappyBank%20ad%20report">${email}</a> melden.`,
        ],
      },
      {
        title: "5. Verwendung von Berechtigungen",
        items: [
          "Die Kameraberechtigung wird nur angefordert, wenn du ein Foto aufnimmst, um es einem Eintrag hinzuzufuegen.",
          "Der Zugriff auf die Fotomediathek wird genutzt, wenn du Fotos auswaehlst oder speicherst.",
          "Die Benachrichtigungsberechtigung wird fuer Erinnerungen und Berichtbenachrichtigungen genutzt.",
        ],
      },
      {
        title: "6. Dienste Dritter",
        items: [
          "Apple iCloud und CloudKit: Synchronisierung von Daten zwischen deinen Geraeten",
          "Google AdMob: Bereitstellung und Messung von In-App-Werbung",
          "GitHub Pages: Hosting dieser Datenschutz-Webseite",
        ],
      },
      {
        title: "7. Loeschung und Verwaltung von Daten",
        items: [
          "Du kannst Glueckseintraege und Berichte innerhalb der App loeschen.",
          "Beim Loeschen eines Eintrags werden auch die in der App damit verknuepften Fotos geloescht.",
          "Beim Loeschen der App werden die auf dem Geraet gespeicherten App-Daten geloescht.",
          "Mit iCloud synchronisierte Daten koennen separat ueber deine iCloud- oder Geraeteeinstellungen verwaltet werden.",
        ],
      },
      {
        title: "8. Aenderungen dieser Datenschutzrichtlinie",
        paragraphs: [
          "Diese Richtlinie kann aktualisiert werden, wenn sich App-Funktionen, Gesetze oder Richtlinien von Drittanbietern aendern. Wichtige Aenderungen werden in der App oder auf dieser Seite bekannt gegeben.",
        ],
      },
      {
        title: "9. Kontakt",
        paragraphs: [
          `Bei Fragen zum Datenschutz kontaktiere bitte <a href="mailto:${email}">${email}</a>.`,
        ],
      },
    ],
    footer:
      "Dieses Dokument erklaert, wie die App Happy Bank mit Datenschutz umgeht. Es kann als Datenschutz-URL in App Store Connect verwendet werden.",
  },
  es: {
    file: "es.html",
    htmlLang: "es",
    title: "Politica de privacidad de Happy Bank",
    appName: "Happy Bank",
    heading: "Politica de privacidad",
    lead:
      "Happy Bank guarda los momentos felices que registras en tu dispositivo y en tu entorno de iCloud, y procesa informacion solo en la medida necesaria para ofrecer las funciones de la app.",
    meta: {
      effective: "Fecha de vigencia",
      appId: "Identificador de la app",
      contact: "Contacto",
    },
    sections: [
      {
        title: "1. Informacion que recopilamos y almacenamos",
        items: [
          "Registros de felicidad, puntuaciones, categorias y fechas introducidas por el usuario",
          "Fotos seleccionadas o tomadas por el usuario y adjuntas a los registros",
          "Puntuacion total de felicidad y resumenes de registros recientes para widgets",
          "Estado del permiso de notificaciones e informacion de notificaciones programadas",
          "Informacion relacionada con anuncios que el SDK de Google Mobile Ads puede procesar para ofrecer y medir anuncios dentro de la app",
        ],
      },
      {
        title: "2. Finalidad de uso",
        items: [
          "Guardar, ver, buscar, editar y eliminar registros de felicidad",
          "Crear informes semanales basados en puntuaciones y registros de felicidad",
          "Mostrar puntuaciones y registros recientes en widgets de la pantalla de inicio",
          "Proporcionar recordatorios diarios e informes mediante notificaciones",
          "Mostrar anuncios dentro de la app y medir su rendimiento",
        ],
      },
      {
        title: "3. Almacenamiento y sincronizacion",
        paragraphs: [
          "Los registros de felicidad se almacenan en el almacenamiento de la app en tu dispositivo. Segun tu configuracion de iCloud y el entorno de la app, pueden sincronizarse entre tus dispositivos Apple mediante CloudKit.",
          "Las fotos adjuntas a los registros se almacenan en un espacio propio de la app y pueden copiarse al contenedor de iCloud de la app cuando iCloud esta disponible. Los datos del widget se guardan en el almacenamiento del grupo de apps como informacion minima de resumen.",
        ],
      },
      {
        title: "4. Publicidad y seguimiento",
        paragraphs: [
          "Happy Bank utiliza el SDK de Google Mobile Ads para mostrar anuncios dentro de la app. Si se requiere publicidad personalizada, la app sigue el proceso de consentimiento de App Tracking Transparency (ATT) de Apple, y puedes cambiar el permiso de seguimiento en Ajustes de iOS.",
          'Para conocer como Google procesa los datos, consulta la <a href="https://policies.google.com/privacy" rel="noopener">Politica de privacidad de Google</a>.',
          `Si ves un anuncio inapropiado o no apto para la edad, puedes reportarlo con una captura de pantalla y una descripcion a <a href="mailto:${email}?subject=HappyBank%20ad%20report">${email}</a>.`,
        ],
      },
      {
        title: "5. Uso de permisos",
        items: [
          "El permiso de camara se solicita solo cuando tomas una foto para adjuntarla a un registro.",
          "El acceso a la biblioteca de fotos se usa cuando seleccionas o guardas fotos.",
          "El permiso de notificaciones se usa para ofrecer recordatorios de registro y notificaciones de informes.",
        ],
      },
      {
        title: "6. Servicios de terceros",
        items: [
          "Apple iCloud y CloudKit: sincronizacion de datos entre tus dispositivos",
          "Google AdMob: publicacion y medicion de anuncios dentro de la app",
          "GitHub Pages: alojamiento de esta pagina de politica de privacidad",
        ],
      },
      {
        title: "7. Eliminacion y gestion de datos",
        items: [
          "Puedes eliminar registros de felicidad e informes dentro de la app.",
          "Al eliminar un registro, tambien se eliminan las fotos vinculadas a ese registro dentro de la app.",
          "Al eliminar la app, se eliminan los datos de la app almacenados en el dispositivo.",
          "Los datos sincronizados con iCloud pueden gestionarse por separado desde tus ajustes de iCloud o del dispositivo.",
        ],
      },
      {
        title: "8. Cambios en esta politica",
        paragraphs: [
          "Esta politica puede actualizarse cuando cambien las funciones de la app, las leyes o las politicas de servicios de terceros. Los cambios importantes se anunciaran en la app o en esta pagina.",
        ],
      },
      {
        title: "9. Contacto",
        paragraphs: [
          `Para preguntas relacionadas con la privacidad, contacta con <a href="mailto:${email}">${email}</a>.`,
        ],
      },
    ],
    footer:
      "Este documento explica como la app Happy Bank gestiona la privacidad. Puede usarse como URL de politica de privacidad en App Store Connect.",
  },
  fr: {
    file: "fr.html",
    htmlLang: "fr",
    title: "Politique de confidentialite de Happy Bank",
    appName: "Happy Bank",
    heading: "Politique de confidentialite",
    lead:
      "Happy Bank conserve les moments heureux que vous enregistrez sur votre appareil et dans votre environnement iCloud, et traite les informations uniquement dans la mesure necessaire au fonctionnement de l'app.",
    meta: {
      effective: "Date d'entree en vigueur",
      appId: "Identifiant de l'app",
      contact: "Contact",
    },
    sections: [
      {
        title: "1. Informations collectees et stockees",
        items: [
          "Registres de bonheur, scores de bonheur, categories et dates saisis par l'utilisateur",
          "Photos selectionnees ou prises par l'utilisateur et ajoutees aux registres",
          "Score total de bonheur et resumes de registres recents pour les widgets",
          "Etat de l'autorisation de notifications et informations sur les notifications programmees",
          "Informations liees a la publicite pouvant etre traitees par le SDK Google Mobile Ads pour afficher et mesurer les publicites dans l'app",
        ],
      },
      {
        title: "2. Finalites d'utilisation",
        items: [
          "Enregistrer, consulter, rechercher, modifier et supprimer les registres de bonheur",
          "Creer des rapports hebdomadaires a partir des scores et registres de bonheur",
          "Afficher les scores de bonheur et les registres recents dans les widgets de l'ecran d'accueil",
          "Fournir des rappels quotidiens et des notifications de rapports",
          "Afficher des publicites dans l'app et mesurer leurs performances",
        ],
      },
      {
        title: "3. Stockage et synchronisation",
        paragraphs: [
          "Les registres de bonheur sont stockes dans l'espace de stockage de l'app sur votre appareil. Selon vos reglages iCloud et l'environnement de l'app, ils peuvent etre synchronises entre vos appareils Apple via CloudKit.",
          "Les photos jointes aux registres sont stockees dans l'espace propre a l'app et peuvent etre copiees dans le conteneur iCloud de l'app lorsque iCloud est disponible. Les donnees des widgets sont stockees dans l'espace du groupe d'apps sous forme de resume minimal.",
        ],
      },
      {
        title: "4. Publicite et suivi",
        paragraphs: [
          "Happy Bank utilise le SDK Google Mobile Ads pour afficher des publicites dans l'app. Si la publicite personnalisee est necessaire, l'app suit la procedure de consentement App Tracking Transparency (ATT) d'Apple, et vous pouvez modifier l'autorisation de suivi dans les reglages iOS.",
          'Pour en savoir plus sur le traitement des donnees par Google, consultez la <a href="https://policies.google.com/privacy" rel="noopener">Politique de confidentialite de Google</a>.',
          `Si vous voyez une publicite inappropriee ou non adaptee a l'age, vous pouvez la signaler avec une capture d'ecran et une description a <a href="mailto:${email}?subject=HappyBank%20ad%20report">${email}</a>.`,
        ],
      },
      {
        title: "5. Utilisation des autorisations",
        items: [
          "L'autorisation d'acces a l'appareil photo est demandee uniquement lorsque vous prenez une photo a joindre a un registre.",
          "L'acces a la phototheque est utilise lorsque vous selectionnez ou enregistrez des photos.",
          "L'autorisation de notifications est utilisee pour fournir des rappels et des notifications de rapports.",
        ],
      },
      {
        title: "6. Services tiers",
        items: [
          "Apple iCloud et CloudKit : synchronisation des donnees entre vos appareils",
          "Google AdMob : diffusion et mesure des publicites dans l'app",
          "GitHub Pages : hebergement de cette page de politique de confidentialite",
        ],
      },
      {
        title: "7. Suppression et gestion des donnees",
        items: [
          "Vous pouvez supprimer les registres de bonheur et les rapports dans l'app.",
          "Lorsqu'un registre est supprime, les photos liees a ce registre dans l'app sont egalement supprimees.",
          "Lorsque l'app est supprimee, les donnees de l'app stockees sur l'appareil sont supprimees.",
          "Les donnees synchronisees avec iCloud peuvent etre gerees separement dans vos reglages iCloud ou de l'appareil.",
        ],
      },
      {
        title: "8. Modifications de cette politique",
        paragraphs: [
          "Cette politique peut etre mise a jour en cas de changement des fonctions de l'app, des lois ou des politiques de services tiers. Les changements importants seront annonces dans l'app ou sur cette page.",
        ],
      },
      {
        title: "9. Contact",
        paragraphs: [
          `Pour toute question relative a la confidentialite, contactez <a href="mailto:${email}">${email}</a>.`,
        ],
      },
    ],
    footer:
      "Ce document explique la maniere dont l'app Happy Bank traite la confidentialite. Il peut etre utilise comme URL de politique de confidentialite dans App Store Connect.",
  },
  "pt-BR": {
    file: "pt-BR.html",
    htmlLang: "pt-BR",
    title: "Politica de Privacidade do Happy Bank",
    appName: "Happy Bank",
    heading: "Politica de Privacidade",
    lead:
      "O Happy Bank guarda os momentos felizes que voce registra no seu dispositivo e no seu ambiente iCloud, e processa informacoes somente na medida necessaria para oferecer os recursos do app.",
    meta: {
      effective: "Data de vigencia",
      appId: "Identificador do app",
      contact: "Contato",
    },
    sections: [
      {
        title: "1. Informacoes que coletamos e armazenamos",
        items: [
          "Registros de felicidade, pontuacoes, categorias e datas informadas pelo usuario",
          "Fotos selecionadas ou tiradas pelo usuario e anexadas aos registros",
          "Pontuacao total de felicidade e resumos de registros recentes para widgets",
          "Status da permissao de notificacoes e informacoes de notificacoes agendadas",
          "Informacoes relacionadas a anuncios que o SDK Google Mobile Ads pode processar para fornecer e medir anuncios no app",
        ],
      },
      {
        title: "2. Finalidade de uso",
        items: [
          "Salvar, visualizar, pesquisar, editar e excluir registros de felicidade",
          "Criar relatorios semanais com base nas pontuacoes e registros de felicidade",
          "Mostrar pontuacoes de felicidade e registros recentes em widgets da tela inicial",
          "Fornecer lembretes diarios e notificacoes de relatorios",
          "Exibir anuncios no app e medir o desempenho de anuncios",
        ],
      },
      {
        title: "3. Armazenamento e sincronizacao",
        paragraphs: [
          "Os registros de felicidade sao armazenados no armazenamento do app no seu dispositivo. Dependendo dos seus ajustes do iCloud e do ambiente do app, eles podem ser sincronizados entre seus dispositivos Apple por meio do CloudKit.",
          "As fotos anexadas aos registros sao armazenadas em um espaco proprio do app e podem ser copiadas para o conteiner iCloud do app quando o iCloud estiver disponivel. Os dados do widget sao armazenados no armazenamento do grupo de apps como informacoes minimas de resumo.",
        ],
      },
      {
        title: "4. Anuncios e rastreamento",
        paragraphs: [
          "O Happy Bank usa o SDK Google Mobile Ads para exibir anuncios no app. Se anuncios personalizados forem necessarios, o app segue o processo de consentimento App Tracking Transparency (ATT) da Apple, e voce pode alterar a permissao de rastreamento nos Ajustes do iOS.",
          'Para saber como o Google processa dados, consulte a <a href="https://policies.google.com/privacy" rel="noopener">Politica de Privacidade do Google</a>.',
          `Se voce vir um anuncio inadequado ou improprio para a idade, pode denuncia-lo com uma captura de tela e descricao para <a href="mailto:${email}?subject=HappyBank%20ad%20report">${email}</a>.`,
        ],
      },
      {
        title: "5. Uso de permissoes",
        items: [
          "A permissao de camera e solicitada apenas quando voce tira uma foto para anexar a um registro.",
          "O acesso a biblioteca de fotos e usado quando voce seleciona ou salva fotos.",
          "A permissao de notificacoes e usada para fornecer lembretes e notificacoes de relatorios.",
        ],
      },
      {
        title: "6. Servicos de terceiros",
        items: [
          "Apple iCloud e CloudKit: sincronizacao de dados entre seus dispositivos",
          "Google AdMob: fornecimento e medicao de anuncios no app",
          "GitHub Pages: hospedagem desta pagina de politica de privacidade",
        ],
      },
      {
        title: "7. Exclusao e gerenciamento de dados",
        items: [
          "Voce pode excluir registros de felicidade e relatorios dentro do app.",
          "Quando um registro e excluido, as fotos vinculadas a ele no app tambem sao excluidas.",
          "Quando o app e excluido, os dados do app armazenados no dispositivo sao excluidos.",
          "Dados sincronizados com o iCloud podem ser gerenciados separadamente nos ajustes do iCloud ou do dispositivo.",
        ],
      },
      {
        title: "8. Alteracoes nesta politica",
        paragraphs: [
          "Esta politica pode ser atualizada quando houver mudancas nos recursos do app, nas leis ou nas politicas de servicos de terceiros. Mudancas importantes serao anunciadas no app ou nesta pagina.",
        ],
      },
      {
        title: "9. Contato",
        paragraphs: [
          `Para duvidas relacionadas a privacidade, entre em contato pelo e-mail <a href="mailto:${email}">${email}</a>.`,
        ],
      },
    ],
    footer:
      "Este documento explica como o app Happy Bank trata a privacidade. Ele pode ser usado como URL da politica de privacidade no App Store Connect.",
  },
  "zh-Hans": {
    file: "zh-Hans.html",
    htmlLang: "zh-Hans",
    title: "幸福储蓄罐隐私政策",
    appName: "幸福储蓄罐 (Happy Bank)",
    heading: "隐私政策",
    lead:
      "幸福储蓄罐会将你记录的幸福瞬间保存在你的设备和 iCloud 环境中，并且只在提供应用功能所需的范围内处理信息。",
    meta: {
      effective: "生效日期",
      appId: "应用标识符",
      contact: "联系",
    },
    sections: [
      {
        title: "1. 我们收集和存储的信息",
        items: [
          "用户自行输入的幸福记录、幸福分数、类别和记录日期",
          "用户选择或拍摄并附加到记录中的照片",
          "用于小组件显示的幸福总分和最近记录摘要",
          "通知权限状态和已安排的通知信息",
          "Google Mobile Ads SDK 为提供和衡量应用内广告可能处理的广告相关信息",
        ],
      },
      {
        title: "2. 使用目的",
        items: [
          "保存、查看、搜索、编辑和删除幸福记录",
          "根据幸福分数和记录生成每周报告",
          "在主屏幕小组件中显示幸福分数和最近记录",
          "提供每日记录提醒和报告通知",
          "展示应用内广告并衡量广告效果",
        ],
      },
      {
        title: "3. 存储位置和同步",
        paragraphs: [
          "幸福记录会存储在你设备上的应用存储空间中。根据你的 iCloud 设置和应用环境，记录可能通过 CloudKit 在你的 Apple 设备之间同步。",
          "附加到记录的照片会存储在应用专用存储空间中，并且在 iCloud 可用时可能复制到应用的 iCloud 容器。小组件数据会以最少摘要信息的形式存储在 App Group 存储空间中。",
        ],
      },
      {
        title: "4. 广告和跟踪",
        paragraphs: [
          "幸福储蓄罐使用 Google Mobile Ads SDK 展示应用内广告。如需个性化广告，应用会遵循 Apple 的 App Tracking Transparency (ATT) 同意流程；你可以在 iOS 设置中更改是否允许跟踪。",
          '有关 Google 如何处理数据，请参阅 <a href="https://policies.google.com/privacy" rel="noopener">Google 隐私权政策</a>。',
          `如果你看到不适当或不符合年龄的广告，可以将广告截图和说明发送至 <a href="mailto:${email}?subject=HappyBank%20ad%20report">${email}</a> 进行举报。`,
        ],
      },
      {
        title: "5. 权限使用",
        items: [
          "仅当你拍摄照片并将其附加到记录时，才会请求相机权限。",
          "当你选择或保存照片时，会使用照片图库访问权限。",
          "通知权限用于提供记录提醒和报告通知。",
        ],
      },
      {
        title: "6. 第三方服务",
        items: [
          "Apple iCloud 和 CloudKit：在你的设备之间同步数据",
          "Google AdMob：提供和衡量应用内广告",
          "GitHub Pages：托管本隐私政策网页",
        ],
      },
      {
        title: "7. 数据删除和管理",
        items: [
          "你可以在应用内删除幸福记录和报告。",
          "删除记录时，应用中与该记录关联的照片也会一起删除。",
          "删除应用时，设备上的应用数据会被删除。",
          "同步到 iCloud 的数据可能需要通过你的 iCloud 设置或设备设置单独管理。",
        ],
      },
      {
        title: "8. 隐私政策变更",
        paragraphs: [
          "当应用功能、法律或第三方服务政策发生变化时，本政策可能会更新。重要变更会通过应用内界面或本页面通知。",
        ],
      },
      {
        title: "9. 联系我们",
        paragraphs: [
          `如有隐私相关问题，请联系 <a href="mailto:${email}">${email}</a>。`,
        ],
      },
    ],
    footer:
      "本文档用于说明幸福储蓄罐应用的隐私处理方式，可作为 App Store Connect 中的隐私政策 URL 使用。",
  },
};

function renderPage(locale) {
  const sectionMarkup = locale.sections
    .map((section) => {
      const body = section.items
        ? `<ul>\n${section.items.map((item) => `          <li>${item}</li>`).join("\n")}\n        </ul>`
        : section.paragraphs.map((paragraph) => `        <p>${paragraph}</p>`).join("\n");

      return `      <section>\n        <h2>${section.title}</h2>\n        ${body}\n      </section>`;
    })
    .join("\n\n");

  const links = languageLinks
    .map(([file, label]) => `<a href="${file}">${label}</a>`)
    .join("\n          ");

  return `<!doctype html>
<html lang="${locale.htmlLang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="dark light">
  <title>${locale.title}</title>
  <link rel="canonical" href="https://devfallingstar.github.io${basePath}${locale.file}">
  <style>
    :root {
      --background: #121421;
      --surface: #1b2033;
      --surface-strong: #242b45;
      --text: #f5f6fb;
      --muted: #b7bdd3;
      --accent: #f5c84c;
      --line: rgba(255, 255, 255, 0.12);
      --shadow: rgba(0, 0, 0, 0.22);
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background:
        radial-gradient(circle at top left, rgba(245, 200, 76, 0.14), transparent 28rem),
        var(--background);
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
      line-height: 1.72;
      overflow-wrap: anywhere;
    }

    a {
      color: var(--accent);
    }

    .page {
      width: min(920px, calc(100% - 32px));
      margin: 0 auto;
      padding: 56px 0 72px;
    }

    header {
      padding: 36px 0 28px;
      border-bottom: 1px solid var(--line);
    }

    .app-name {
      color: var(--accent);
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 0;
      margin: 0 0 8px;
    }

    h1 {
      font-size: clamp(30px, 6vw, 46px);
      line-height: 1.12;
      margin: 0 0 16px;
      letter-spacing: 0;
    }

    .lead {
      color: var(--muted);
      font-size: 17px;
      margin: 0;
      max-width: 720px;
    }

    .language-links {
      display: flex;
      flex-wrap: wrap;
      gap: 10px 14px;
      margin-top: 22px;
      font-size: 14px;
    }

    .meta {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      margin: 24px 0 8px;
    }

    .meta div,
    section {
      background: linear-gradient(180deg, var(--surface-strong), var(--surface));
      border: 1px solid var(--line);
      border-radius: 10px;
      box-shadow: 0 18px 42px var(--shadow);
    }

    .meta div {
      padding: 16px 18px;
    }

    .meta strong {
      display: block;
      color: var(--accent);
      font-size: 13px;
      margin-bottom: 4px;
    }

    main {
      display: grid;
      gap: 16px;
      margin-top: 24px;
    }

    section {
      padding: 24px;
    }

    h2 {
      font-size: 20px;
      line-height: 1.35;
      margin: 0 0 12px;
      letter-spacing: 0;
    }

    p {
      margin: 0 0 12px;
      color: var(--muted);
    }

    p:last-child {
      margin-bottom: 0;
    }

    ul {
      margin: 0;
      padding-left: 20px;
      color: var(--muted);
    }

    li + li {
      margin-top: 8px;
    }

    footer {
      color: var(--muted);
      font-size: 14px;
      margin-top: 28px;
      padding-top: 20px;
      border-top: 1px solid var(--line);
    }

    @media (max-width: 640px) {
      .page {
        width: min(100% - 24px, 920px);
        padding: 32px 0 48px;
      }

      header {
        padding-top: 20px;
      }

      section {
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="page">
    <header>
      <p class="app-name">${locale.appName}</p>
      <h1>${locale.heading}</h1>
      <p class="lead">${locale.lead}</p>
      <nav class="language-links" aria-label="Privacy policy languages">
          ${links}
      </nav>
      <div class="meta" aria-label="Basic information">
        <div>
          <strong>${locale.meta.effective}</strong>
          ${effectiveDate}
        </div>
        <div>
          <strong>${locale.meta.appId}</strong>
          ${bundleId}
        </div>
        <div>
          <strong>${locale.meta.contact}</strong>
          <a href="mailto:${email}">${email}</a>
        </div>
      </div>
    </header>

    <main>
${sectionMarkup}
    </main>

    <footer>
      ${locale.footer}
    </footer>
  </div>
</body>
</html>
`;
}

function redirectPage(title, destination) {
  return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="refresh" content="0; url=${destination}">
  <title>${title}</title>
  <link rel="canonical" href="https://devfallingstar.github.io${destination}">
</head>
<body>
  <p><a href="${destination}">개인정보처리방침으로 이동</a></p>
</body>
</html>
`;
}

const policyDir = join("happy-bank", "privacy-policy");
mkdirSync(policyDir, { recursive: true });

for (const locale of Object.values(locales)) {
  writeFileSync(join(policyDir, locale.file), renderPage(locale), "utf8");
}

writeFileSync(
  join(policyDir, "index.html"),
  redirectPage("행복 저금통 개인정보처리방침", `${basePath}ko.html`),
  "utf8",
);

writeFileSync(
  "privacy-policy.html",
  redirectPage("행복 저금통 개인정보처리방침", `${basePath}ko.html`),
  "utf8",
);
