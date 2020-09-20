(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('leafletGestureHandling', ['exports'], factory) :
    (factory((global.leafletGestureHandling = {})));
}(this, (function (exports) { 'use strict';

    var LanguageContent = {
        //Arabic
        ar: {
            touch: "\u0627\u0633\u062a\u062e\u062f\u0645 \u0625\u0635\u0628\u0639\u064a\u0646 \u0644\u062a\u062d\u0631\u064a\u0643 \u0627\u0644\u062e\u0631\u064a\u0637\u0629",
            scroll: "\u200f\u0627\u0633\u062a\u062e\u062f\u0645 ctrl + scroll \u0644\u062a\u0635\u063a\u064a\u0631/\u062a\u0643\u0628\u064a\u0631 \u0627\u0644\u062e\u0631\u064a\u0637\u0629",
            scrollMac: "\u064a\u0645\u0643\u0646\u0643 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u2318 + \u0627\u0644\u062a\u0645\u0631\u064a\u0631 \u0644\u062a\u0643\u0628\u064a\u0631/\u062a\u0635\u063a\u064a\u0631 \u0627\u0644\u062e\u0631\u064a\u0637\u0629"
        },
        //Bulgarian
        bg: {
            touch: "\u0418\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0439\u0442\u0435 \u0434\u0432\u0430 \u043f\u0440\u044a\u0441\u0442\u0430, \u0437\u0430 \u0434\u0430 \u043f\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u043a\u0430\u0440\u0442\u0430\u0442\u0430",
            scroll: "\u0417\u0430\u0434\u0440\u044a\u0436\u0442\u0435 \u0431\u0443\u0442\u043e\u043d\u0430 Ctrl \u043d\u0430\u0442\u0438\u0441\u043d\u0430\u0442, \u0434\u043e\u043a\u0430\u0442\u043e \u043f\u0440\u0435\u0432\u044a\u0440\u0442\u0430\u0442\u0435, \u0437\u0430 \u0434\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u043c\u0430\u0449\u0430\u0431\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0430\u0442\u0430",
            scrollMac: "\u0417\u0430\u0434\u0440\u044a\u0436\u0442\u0435 \u0431\u0443\u0442\u043e\u043d\u0430 \u2318 \u043d\u0430\u0442\u0438\u0441\u043d\u0430\u0442, \u0434\u043e\u043a\u0430\u0442\u043e \u043f\u0440\u0435\u0432\u044a\u0440\u0442\u0430\u0442\u0435, \u0437\u0430 \u0434\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u043c\u0430\u0449\u0430\u0431\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0430\u0442\u0430"
        },
        //Bengali
        bn: {
            touch: "\u09ae\u09be\u09a8\u099a\u09bf\u09a4\u09cd\u09b0\u099f\u09bf\u0995\u09c7 \u09b8\u09b0\u09be\u09a4\u09c7 \u09a6\u09c1\u099f\u09bf \u0986\u0999\u09cd\u0997\u09c1\u09b2 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0 \u0995\u09b0\u09c1\u09a8",
            scroll: "\u09ae\u09cd\u09af\u09be\u09aa \u099c\u09c1\u09ae \u0995\u09b0\u09a4\u09c7 ctrl + scroll \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0 \u0995\u09b0\u09c1\u09a8",
            scrollMac: "\u09ae\u09cd\u09af\u09be\u09aa\u09c7 \u099c\u09c1\u09ae \u0995\u09b0\u09a4\u09c7 \u2318 \u09ac\u09cb\u09a4\u09be\u09ae \u099f\u09bf\u09aa\u09c7 \u09b8\u09cd\u0995\u09cd\u09b0\u09b2 \u0995\u09b0\u09c1\u09a8"
        },
        //Catalan
        ca: {
            touch: "Fes servir dos dits per moure el mapa",
            scroll: "Prem la tecla Control mentre et desplaces per apropar i allunyar el mapa",
            scrollMac: "Prem la tecla \u2318 mentre et desplaces per apropar i allunyar el mapa"
        },
        //Czech
        cs: {
            touch: "K\u00a0posunut\u00ed mapy pou\u017eijte dva prsty",
            scroll: "Velikost zobrazen\u00ed mapy zm\u011b\u0148te podr\u017een\u00edm kl\u00e1vesy Ctrl a\u00a0posouv\u00e1n\u00edm kole\u010dka my\u0161i",
            scrollMac: "Velikost zobrazen\u00ed mapy zm\u011bn\u00edte podr\u017een\u00edm kl\u00e1vesy \u2318 a\u00a0posunut\u00edm kole\u010dka my\u0161i / touchpadu"
        },
        //Danish
        da: {
            touch: "Brug to fingre til at flytte kortet",
            scroll: "Brug ctrl + rullefunktionen til at zoome ind og ud p\u00e5 kortet",
            scrollMac: "Brug \u2318 + rullefunktionen til at zoome ind og ud p\u00e5 kortet"
        },
        //German
        de: {
            touch: "Verschieben der Karte mit zwei Fingern",
            scroll: "Verwende Strg+Scrollen zum Zoomen der Karte",
            scrollMac: "\u2318"
        },
        //Greek
        el: {
            touch: "\u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03b4\u03cd\u03bf \u03b4\u03ac\u03c7\u03c4\u03c5\u03bb\u03b1 \u03b3\u03b9\u03b1 \u03bc\u03b5\u03c4\u03b1\u03ba\u03af\u03bd\u03b7\u03c3\u03b7 \u03c3\u03c4\u03bf\u03bd \u03c7\u03ac\u03c1\u03c4\u03b7",
            scroll: "\u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf \u03c0\u03bb\u03ae\u03ba\u03c4\u03c1\u03bf Ctrl \u03ba\u03b1\u03b9 \u03ba\u03cd\u03bb\u03b9\u03c3\u03b7, \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03bc\u03b5\u03b3\u03b5\u03b8\u03cd\u03bd\u03b5\u03c4\u03b5 \u03c4\u03bf\u03bd \u03c7\u03ac\u03c1\u03c4\u03b7",
            scrollMac: "\u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf \u03c0\u03bb\u03ae\u03ba\u03c4\u03c1\u03bf \u2318 + \u03ba\u03cd\u03bb\u03b9\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03b5\u03c3\u03c4\u03af\u03b1\u03c3\u03b7 \u03c3\u03c4\u03bf\u03bd \u03c7\u03ac\u03c1\u03c4\u03b7"
        },
        //English
        en: {
            touch: "Use two fingers to move the map",
            scroll: "Use ctrl + scroll to zoom the map",
            scrollMac: "Use \u2318 + scroll to zoom the map"
        },
        //English (Australian)
        "en-AU": {
            touch: "Use two fingers to move the map",
            scroll: "Use ctrl + scroll to zoom the map",
            scrollMac: "Use \u2318 + scroll to zoom the map"
        },
        //English (Great Britain)
        "en-GB": {
            touch: "Use two fingers to move the map",
            scroll: "Use ctrl + scroll to zoom the map",
            scrollMac: "Use \u2318 + scroll to zoom the map"
        },
        //Spanish
        es: {
            touch: "Para mover el mapa, utiliza dos dedos",
            scroll: "Mant\u00e9n pulsada la tecla Ctrl mientras te desplazas para acercar o alejar el mapa",
            scrollMac: "Mant\u00e9n pulsada la tecla \u2318 mientras te desplazas para acercar o alejar el mapa"
        },
        //Basque
        eu: {
            touch: "Erabili bi hatz mapa mugitzeko",
            scroll: "Mapan zooma aplikatzeko, sakatu Ktrl eta egin gora edo behera",
            scrollMac: "Eduki sakatuta \u2318 eta egin gora eta behera mapa handitu eta txikitzeko"
        },
        //Farsi
        fa: {
            touch: "\u0628\u0631\u0627\u06cc \u062d\u0631\u06a9\u062a \u062f\u0627\u062f\u0646 \u0646\u0642\u0634\u0647 \u0627\u0632 \u062f\u0648 \u0627\u0646\u06af\u0634\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f.",
            scroll: "\u200f\u0628\u0631\u0627\u06cc \u0628\u0632\u0631\u06af\u200c\u0646\u0645\u0627\u06cc\u06cc \u0646\u0642\u0634\u0647 \u0627\u0632 ctrl + scroll \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f",
            scrollMac: "\u0628\u0631\u0627\u06cc \u0628\u0632\u0631\u06af\u200c\u0646\u0645\u0627\u06cc\u06cc \u0646\u0642\u0634\u0647\u060c \u0627\u0632 \u2318 + \u067e\u06cc\u0645\u0627\u06cc\u0634 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."
        },
        //Finnish
        fi: {
            touch: "Siirr\u00e4 karttaa kahdella sormella.",
            scroll: "Zoomaa karttaa painamalla Ctrl-painiketta ja vieritt\u00e4m\u00e4ll\u00e4.",
            scrollMac: "Zoomaa karttaa pit\u00e4m\u00e4ll\u00e4 painike \u2318 painettuna ja vieritt\u00e4m\u00e4ll\u00e4."
        },
        //Filipino
        fil: {
            touch: "Gumamit ng dalawang daliri upang iusog ang mapa",
            scroll: "Gamitin ang ctrl + scroll upang i-zoom ang mapa",
            scrollMac: "Gamitin ang \u2318 + scroll upang i-zoom ang mapa"
        },
        //French
        fr: {
            touch: "Utilisez deux\u00a0doigts pour d\u00e9placer la carte",
            scroll: "Vous pouvez zoomer sur la carte \u00e0 l'aide de CTRL+Molette de d\u00e9filement",
            scrollMac: "Vous pouvez zoomer sur la carte \u00e0 l'aide de \u2318+Molette de d\u00e9filement"
        },
        //Galician
        gl: {
            touch: "Utiliza dous dedos para mover o mapa",
            scroll: "Preme Ctrl mentres te desprazas para ampliar o mapa",
            scrollMac: "Preme \u2318 e despr\u00e1zate para ampliar o mapa"
        },
        //Gujarati
        gu: {
            touch: "\u0aa8\u0a95\u0ab6\u0acb \u0a96\u0ab8\u0ac7\u0aa1\u0ab5\u0abe \u0aac\u0ac7 \u0a86\u0a82\u0a97\u0ab3\u0ac0\u0a93\u0aa8\u0acb \u0a89\u0aaa\u0aaf\u0acb\u0a97 \u0a95\u0ab0\u0acb",
            scroll: "\u0aa8\u0a95\u0ab6\u0abe\u0aa8\u0ac7 \u0a9d\u0ac2\u0aae \u0a95\u0ab0\u0ab5\u0abe \u0aae\u0abe\u0a9f\u0ac7 ctrl + \u0ab8\u0acd\u0a95\u0acd\u0ab0\u0acb\u0ab2\u0aa8\u0acb \u0a89\u0aaa\u0aaf\u0acb\u0a97 \u0a95\u0ab0\u0acb",
            scrollMac: "\u0aa8\u0a95\u0ab6\u0abe\u0aa8\u0ac7 \u0a9d\u0ac2\u0aae \u0a95\u0ab0\u0ab5\u0abe \u2318 + \u0ab8\u0acd\u0a95\u0acd\u0ab0\u0acb\u0ab2\u0aa8\u0acb \u0a89\u0aaa\u0aaf\u0acb\u0a97 \u0a95\u0ab0\u0acb"
        },
        //Hindi
        hi: {
            touch: "\u092e\u0948\u092a \u090f\u0915 \u091c\u0917\u0939 \u0938\u0947 \u0926\u0942\u0938\u0930\u0940 \u091c\u0917\u0939 \u0932\u0947 \u091c\u093e\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0926\u094b \u0909\u0902\u0917\u0932\u093f\u092f\u094b\u0902 \u0915\u093e \u0907\u0938\u094d\u0924\u0947\u092e\u093e\u0932 \u0915\u0930\u0947\u0902",
            scroll: "\u092e\u0948\u092a \u0915\u094b \u091c\u093c\u0942\u092e \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f ctrl + \u0938\u094d\u0915\u094d\u0930\u094b\u0932 \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0947\u0902",
            scrollMac: "\u092e\u0948\u092a \u0915\u094b \u091c\u093c\u0942\u092e \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u2318 + \u0938\u094d\u0915\u094d\u0930\u094b\u0932 \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0947\u0902"
        },
        //Croatian
        hr: {
            touch: "Pomi\u010dite kartu pomo\u0107u dva prsta",
            scroll: "Upotrijebite Ctrl i kliza\u010d mi\u0161a da biste zumirali kartu",
            scrollMac: "Upotrijebite gumb \u2318 dok se pomi\u010dete za zumiranje karte"
        },
        //Hungarian
        hu: {
            touch: "K\u00e9t ujjal mozgassa a t\u00e9rk\u00e9pet",
            scroll: "A t\u00e9rk\u00e9p a ctrl + g\u00f6rget\u00e9s haszn\u00e1lat\u00e1val nagy\u00edthat\u00f3",
            scrollMac: "A t\u00e9rk\u00e9p a \u2318 + g\u00f6rget\u00e9s haszn\u00e1lat\u00e1val nagy\u00edthat\u00f3"
        },
        //Indonesian
        id: {
            touch: "Gunakan dua jari untuk menggerakkan peta",
            scroll: "Gunakan ctrl + scroll untuk memperbesar atau memperkecil peta",
            scrollMac: "Gunakan \u2318 + scroll untuk memperbesar atau memperkecil peta"
        },
        //Italian
        it: {
            touch: "Utilizza due dita per spostare la mappa",
            scroll: "Utilizza CTRL + scorrimento per eseguire lo zoom della mappa",
            scrollMac: "Utilizza \u2318 + scorrimento per eseguire lo zoom della mappa"
        },
        //Hebrew
        iw: {
            touch: "\u05d4\u05d6\u05d6 \u05d0\u05ea \u05d4\u05de\u05e4\u05d4 \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05e9\u05ea\u05d9 \u05d0\u05e6\u05d1\u05e2\u05d5\u05ea",
            scroll: "\u200f\u05d0\u05e4\u05e9\u05e8 \u05dc\u05e9\u05e0\u05d5\u05ea \u05d0\u05ea \u05de\u05e8\u05d7\u05e7 \u05d4\u05ea\u05e6\u05d5\u05d2\u05d4 \u05d1\u05de\u05e4\u05d4 \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05de\u05e7\u05e9 ctrl \u05d5\u05d2\u05dc\u05d9\u05dc\u05d4",
            scrollMac: "\u05d0\u05e4\u05e9\u05e8 \u05dc\u05e9\u05e0\u05d5\u05ea \u05d0\u05ea \u05de\u05e8\u05d7\u05e7 \u05d4\u05ea\u05e6\u05d5\u05d2\u05d4 \u05d1\u05de\u05e4\u05d4 \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05de\u05e7\u05e9 \u2318 \u05d5\u05d2\u05dc\u05d9\u05dc\u05d4"
        },
        //Japanese
        ja: {
            touch: "\u5730\u56f3\u3092\u79fb\u52d5\u3055\u305b\u308b\u306b\u306f\u6307 2 \u672c\u3067\u64cd\u4f5c\u3057\u307e\u3059",
            scroll: "\u5730\u56f3\u3092\u30ba\u30fc\u30e0\u3059\u308b\u306b\u306f\u3001Ctrl \u30ad\u30fc\u3092\u62bc\u3057\u306a\u304c\u3089\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044",
            scrollMac: "\u5730\u56f3\u3092\u30ba\u30fc\u30e0\u3059\u308b\u306b\u306f\u3001\u2318 \u30ad\u30fc\u3092\u62bc\u3057\u306a\u304c\u3089\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044"
        },
        //Kannada
        kn: {
            touch: "Use two fingers to move the map",
            scroll: "Use Ctrl + scroll to zoom the map",
            scrollMac: "Use ⌘ + scroll to zoom the map"
        },
        //Korean
        ko: {
            touch: "\uc9c0\ub3c4\ub97c \uc6c0\uc9c1\uc774\ub824\uba74 \ub450 \uc190\uac00\ub77d\uc744 \uc0ac\uc6a9\ud558\uc138\uc694.",
            scroll: "\uc9c0\ub3c4\ub97c \ud655\ub300/\ucd95\uc18c\ud558\ub824\uba74 Ctrl\uc744 \ub204\ub978 \ucc44 \uc2a4\ud06c\ub864\ud558\uc138\uc694.",
            scrollMac: "\uc9c0\ub3c4\ub97c \ud655\ub300\ud558\ub824\uba74 \u2318 + \uc2a4\ud06c\ub864 \uc0ac\uc6a9"
        },
        //Lithuanian
        lt: {
            touch: "Perkelkite \u017eem\u0117lap\u012f dviem pir\u0161tais",
            scroll: "Slinkite nuspaud\u0119 klavi\u0161\u0105 \u201eCtrl\u201c, kad pakeistum\u0117te \u017eem\u0117lapio mastel\u012f",
            scrollMac: "Paspauskite klavi\u0161\u0105 \u2318 ir slinkite, kad priartintum\u0117te \u017eem\u0117lap\u012f"
        },
        //Latvian
        lv: {
            touch: "Lai p\u0101rvietotu karti, b\u012bdiet to ar diviem pirkstiem",
            scroll: "Kartes t\u0101lummai\u0146ai izmantojiet ctrl + ritin\u0101\u0161anu",
            scrollMac: "Lai veiktu kartes t\u0101lummai\u0146u, izmantojiet \u2318 + ritin\u0101\u0161anu"
        },
        //Malayalam
        ml: {
            touch: "\u0d2e\u0d3e\u0d2a\u0d4d\u0d2a\u0d4d \u0d28\u0d40\u0d15\u0d4d\u0d15\u0d3e\u0d7b \u0d30\u0d23\u0d4d\u0d1f\u0d4d \u0d35\u0d3f\u0d30\u0d32\u0d41\u0d15\u0d7e \u0d09\u0d2a\u0d2f\u0d4b\u0d17\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d15",
            scroll: "\u0d15\u0d7a\u0d1f\u0d4d\u0d30\u0d4b\u0d7e + \u0d38\u0d4d\u200c\u0d15\u0d4d\u0d30\u0d4b\u0d7e \u0d09\u0d2a\u0d2f\u0d4b\u0d17\u0d3f\u0d1a\u0d4d\u0d1a\u0d4d \u200c\u0d2e\u0d3e\u0d2a\u0d4d\u0d2a\u0d4d \u200c\u0d38\u0d42\u0d02 \u0d1a\u0d46\u0d2f\u0d4d\u0d2f\u0d41\u0d15",
            scrollMac: "\u2318 + \u0d38\u0d4d\u200c\u0d15\u0d4d\u0d30\u0d4b\u0d7e \u0d09\u0d2a\u0d2f\u0d4b\u0d17\u0d3f\u0d1a\u0d4d\u0d1a\u0d4d \u200c\u0d2e\u0d3e\u0d2a\u0d4d\u0d2a\u0d4d \u200c\u0d38\u0d42\u0d02 \u0d1a\u0d46\u0d2f\u0d4d\u0d2f\u0d41\u0d15"
        },
        //Marathi
        mr: {
            touch: "\u0928\u0915\u093e\u0936\u093e \u0939\u0932\u0935\u093f\u0923\u094d\u092f\u093e\u0938\u093e\u0920\u0940 \u0926\u094b\u0928 \u092c\u094b\u091f\u0947 \u0935\u093e\u092a\u0930\u093e",
            scroll: "\u0928\u0915\u093e\u0936\u093e \u091d\u0942\u092e \u0915\u0930\u0923\u094d\u092f\u093e\u0938\u093e\u0920\u0940 ctrl + scroll \u0935\u093e\u092a\u0930\u093e",
            scrollMac: "\u0928\u0915\u093e\u0936\u093e\u0935\u0930 \u091d\u0942\u092e \u0915\u0930\u0923\u094d\u092f\u093e\u0938\u093e\u0920\u0940 \u2318 + \u0938\u094d\u0915\u094d\u0930\u094b\u0932 \u0935\u093e\u092a\u0930\u093e"
        },
        //Dutch
        nl: {
            touch: "Gebruik twee vingers om de kaart te verplaatsen",
            scroll: "Gebruik Ctrl + scrollen om in- en uit te zoomen op de kaart",
            scrollMac: "Gebruik \u2318 + scrollen om in en uit te zoomen op de kaart"
        },
        //Norwegian
        no: {
            touch: "Bruk to fingre for \u00e5 flytte kartet",
            scroll: "Hold ctrl-tasten inne og rull for \u00e5 zoome p\u00e5 kartet",
            scrollMac: "Hold inne \u2318-tasten og rull for \u00e5 zoome p\u00e5 kartet"
        },
        //Polish
        pl: {
            touch: "Przesu\u0144 map\u0119 dwoma palcami",
            scroll: "Naci\u015bnij CTRL i przewi\u0144, by przybli\u017cy\u0107 map\u0119",
            scrollMac: "Naci\u015bnij\u00a0\u2318 i przewi\u0144, by przybli\u017cy\u0107 map\u0119"
        },
        //Portuguese
        pt: {
            touch: "Use dois dedos para mover o mapa",
            scroll: "Pressione Ctrl e role a tela simultaneamente para aplicar zoom no mapa",
            scrollMac: "Use \u2318 e role a tela simultaneamente para aplicar zoom no mapa"
        },
        //Portuguese (Brazil)
        "pt-BR": {
            touch: "Use dois dedos para mover o mapa",
            scroll: "Pressione Ctrl e role a tela simultaneamente para aplicar zoom no mapa",
            scrollMac: "Use \u2318 e role a tela simultaneamente para aplicar zoom no mapa"
        },
        //Portuguese (Portugal
        "pt-PT": {
            touch: "Utilize dois dedos para mover o mapa",
            scroll: "Utilizar ctrl + deslocar para aumentar/diminuir zoom do mapa",
            scrollMac: "Utilize \u2318 + deslocar para aumentar/diminuir o zoom do mapa"
        },
        //Romanian
        ro: {
            touch: "Folosi\u021bi dou\u0103 degete pentru a deplasa harta",
            scroll: "Ap\u0103sa\u021bi tasta ctrl \u0219i derula\u021bi simultan pentru a m\u0103ri harta",
            scrollMac: "Folosi\u021bi \u2318 \u0219i derula\u021bi pentru a m\u0103ri/mic\u0219ora harta"
        },
        //Russian
        ru: {
            touch: "\u0427\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0443, \u043f\u0440\u043e\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e \u043d\u0435\u0439 \u0434\u0432\u0443\u043c\u044f \u043f\u0430\u043b\u044c\u0446\u0430\u043c\u0438",
            scroll: "\u0427\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043c\u0430\u0441\u0448\u0442\u0430\u0431, \u043f\u0440\u043e\u043a\u0440\u0443\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u043a\u0430\u0440\u0442\u0443, \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0448\u0443 Ctrl.",
            scrollMac: "\u0427\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043c\u0430\u0441\u0448\u0442\u0430\u0431, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u2318\u00a0+ \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0430"
        },
        //Slovak
        sk: {
            touch: "Mapu m\u00f4\u017eete posun\u00fa\u0165 dvoma prstami",
            scroll: "Ak chcete pribl\u00ed\u017ei\u0165 mapu, stla\u010dte kl\u00e1ves ctrl a\u00a0pos\u00favajte",
            scrollMac: "Ak chcete pribl\u00ed\u017ei\u0165 mapu, stla\u010dte kl\u00e1ves \u2318 a\u00a0pos\u00favajte kolieskom my\u0161i"
        },
        //Slovenian
        sl: {
            touch: "Premaknite zemljevid z dvema prstoma",
            scroll: "Zemljevid pove\u010date tako, da dr\u017eite tipko Ctrl in vrtite kolesce na mi\u0161ki",
            scrollMac: "Uporabite \u2318 + funkcijo pomika, da pove\u010date ali pomanj\u0161ate zemljevid"
        },
        //Serbian
        sr: {
            touch: "\u041c\u0430\u043f\u0443 \u043f\u043e\u043c\u0435\u0440\u0430\u0458\u0442\u0435 \u043f\u043e\u043c\u043e\u045b\u0443 \u0434\u0432\u0430 \u043f\u0440\u0441\u0442\u0430",
            scroll: "\u041f\u0440\u0438\u0442\u0438\u0441\u043d\u0438\u0442\u0435 ctrl \u0442\u0430\u0441\u0442\u0435\u0440 \u0434\u043e\u043a \u043f\u043e\u043c\u0435\u0440\u0430\u0442\u0435 \u0434\u0430 \u0431\u0438\u0441\u0442\u0435 \u0437\u0443\u043c\u0438\u0440\u0430\u043b\u0438 \u043c\u0430\u043f\u0443",
            scrollMac: "\u041f\u0440\u0438\u0442\u0438\u0441\u043d\u0438\u0442\u0435 \u0442\u0430\u0441\u0442\u0435\u0440 \u2318 \u0434\u043e\u043a \u043f\u043e\u043c\u0435\u0440\u0430\u0442\u0435 \u0434\u0430 \u0431\u0438\u0441\u0442\u0435 \u0437\u0443\u043c\u0438\u0440\u0430\u043b\u0438 \u043c\u0430\u043f\u0443"
        },
        //Swedish
        sv: {
            touch: "Anv\u00e4nd tv\u00e5 fingrar f\u00f6r att flytta kartan",
            scroll: "Anv\u00e4nd ctrl + rulla f\u00f6r att zooma kartan",
            scrollMac: "Anv\u00e4nd \u2318 + rulla f\u00f6r att zooma p\u00e5 kartan"
        },
        //Tamil
        ta: {
            touch: "\u0bae\u0bc7\u0baa\u0bcd\u0baa\u0bc8 \u0ba8\u0b95\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4 \u0b87\u0bb0\u0ba3\u0bcd\u0b9f\u0bc1 \u0bb5\u0bbf\u0bb0\u0bb2\u0bcd\u0b95\u0bb3\u0bc8\u0baa\u0bcd \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bb5\u0bc1\u0bae\u0bcd",
            scroll: "\u0bae\u0bc7\u0baa\u0bcd\u0baa\u0bc8 \u0baa\u0bc6\u0bb0\u0bbf\u0ba4\u0bbe\u0b95\u0bcd\u0b95\u0bbf/\u0b9a\u0bbf\u0bb1\u0bbf\u0ba4\u0bbe\u0b95\u0bcd\u0b95\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0bb0\u0bcd\u0b95\u0bcd\u0b95, ctrl \u0baa\u0b9f\u0bcd\u0b9f\u0ba9\u0bc8\u0baa\u0bcd \u0baa\u0bbf\u0b9f\u0bbf\u0ba4\u0bcd\u0ba4\u0baa\u0b9f\u0bbf, \u0bae\u0bc7\u0bb2\u0bc7/\u0b95\u0bc0\u0bb4\u0bc7 \u0bb8\u0bcd\u0b95\u0bcd\u0bb0\u0bbe\u0bb2\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb5\u0bc1\u0bae\u0bcd",
            scrollMac: "\u0bae\u0bc7\u0baa\u0bcd\u0baa\u0bc8 \u0baa\u0bc6\u0bb0\u0bbf\u0ba4\u0bbe\u0b95\u0bcd\u0b95\u0bbf/\u0b9a\u0bbf\u0bb1\u0bbf\u0ba4\u0bbe\u0b95\u0bcd\u0b95\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0bb0\u0bcd\u0b95\u0bcd\u0b95, \u2318 \u0baa\u0b9f\u0bcd\u0b9f\u0ba9\u0bc8\u0baa\u0bcd \u0baa\u0bbf\u0b9f\u0bbf\u0ba4\u0bcd\u0ba4\u0baa\u0b9f\u0bbf, \u0bae\u0bc7\u0bb2\u0bc7/\u0b95\u0bc0\u0bb4\u0bc7 \u0bb8\u0bcd\u0b95\u0bcd\u0bb0\u0bbe\u0bb2\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb5\u0bc1\u0bae\u0bcd"
        },
        //Telugu
        te: {
            touch: "\u0c2e\u0c4d\u0c2f\u0c3e\u0c2a\u0c4d\u200c\u0c28\u0c3f \u0c24\u0c30\u0c32\u0c3f\u0c02\u0c1a\u0c21\u0c02 \u0c15\u0c4b\u0c38\u0c02 \u0c30\u0c46\u0c02\u0c21\u0c41 \u0c35\u0c47\u0c33\u0c4d\u0c32\u0c28\u0c41 \u0c09\u0c2a\u0c2f\u0c4b\u0c17\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f",
            scroll: "\u0c2e\u0c4d\u0c2f\u0c3e\u0c2a\u0c4d\u200c\u0c28\u0c3f \u0c1c\u0c42\u0c2e\u0c4d \u0c1a\u0c47\u0c2f\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f ctrl \u0c2c\u0c1f\u0c28\u0c4d\u200c\u0c28\u0c41 \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c3f \u0c09\u0c02\u0c1a\u0c3f, \u0c38\u0c4d\u0c15\u0c4d\u0c30\u0c4b\u0c32\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f",
            scrollMac: "\u0c2e\u0c4d\u0c2f\u0c3e\u0c2a\u0c4d \u0c1c\u0c42\u0c2e\u0c4d \u0c1a\u0c47\u0c2f\u0c3e\u0c32\u0c02\u0c1f\u0c47 \u2318 + \u0c38\u0c4d\u0c15\u0c4d\u0c30\u0c4b\u0c32\u0c4d \u0c09\u0c2a\u0c2f\u0c4b\u0c17\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f"
        },
        //Thai
        th: {
            touch: "\u0e43\u0e0a\u0e49 2 \u0e19\u0e34\u0e49\u0e27\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48",
            scroll: "\u0e01\u0e14 Ctrl \u0e04\u0e49\u0e32\u0e07\u0e44\u0e27\u0e49 \u0e41\u0e25\u0e49\u0e27\u0e40\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e08\u0e2d\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e0b\u0e39\u0e21\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48",
            scrollMac: "\u0e01\u0e14 \u2318 \u0e41\u0e25\u0e49\u0e27\u0e40\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e08\u0e2d\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e0b\u0e39\u0e21\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48"
        },
        //Tagalog
        tl: {
            touch: "Gumamit ng dalawang daliri upang iusog ang mapa",
            scroll: "Gamitin ang ctrl + scroll upang i-zoom ang mapa",
            scrollMac: "Gamitin ang \u2318 + scroll upang i-zoom ang mapa"
        },
        //Turkish
        tr: {
            touch: "Haritada gezinmek i\u00e7in iki parma\u011f\u0131n\u0131z\u0131 kullan\u0131n",
            scroll: "Haritay\u0131 yak\u0131nla\u015ft\u0131rmak i\u00e7in ctrl + kayd\u0131rma kombinasyonunu kullan\u0131n",
            scrollMac: "Haritay\u0131 yak\u0131nla\u015ft\u0131rmak i\u00e7in \u2318 tu\u015funa bas\u0131p ekran\u0131 kayd\u0131r\u0131n"
        },
        //Ukrainian
        uk: {
            touch: "\u041f\u0435\u0440\u0435\u043c\u0456\u0449\u0443\u0439\u0442\u0435 \u043a\u0430\u0440\u0442\u0443 \u0434\u0432\u043e\u043c\u0430 \u043f\u0430\u043b\u044c\u0446\u044f\u043c\u0438",
            scroll: "\u0429\u043e\u0431 \u0437\u043c\u0456\u043d\u044e\u0432\u0430\u0442\u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431 \u043a\u0430\u0440\u0442\u0438, \u043f\u0440\u043e\u043a\u0440\u0443\u0447\u0443\u0439\u0442\u0435 \u043a\u043e\u043b\u0456\u0449\u0430\u0442\u043a\u043e \u043c\u0438\u0448\u0456, \u0443\u0442\u0440\u0438\u043c\u0443\u044e\u0447\u0438 \u043a\u043b\u0430\u0432\u0456\u0448\u0443 Ctrl",
            scrollMac: "\u0429\u043e\u0431 \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431 \u043a\u0430\u0440\u0442\u0438, \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0439\u0442\u0435 \u2318 + \u043f\u0440\u043e\u043a\u0440\u0443\u0447\u0443\u0432\u0430\u043d\u043d\u044f"
        },
        //Vietnamese
        vi: {
            touch: "S\u1eed d\u1ee5ng hai ng\u00f3n tay \u0111\u1ec3 di chuy\u1ec3n b\u1ea3n \u0111\u1ed3",
            scroll: "S\u1eed d\u1ee5ng ctrl + cu\u1ed9n \u0111\u1ec3 thu ph\u00f3ng b\u1ea3n \u0111\u1ed3",
            scrollMac: "S\u1eed d\u1ee5ng \u2318 + cu\u1ed9n \u0111\u1ec3 thu ph\u00f3ng b\u1ea3n \u0111\u1ed3"
        },
        //Chinese (Simplified)
        "zh-CN": {
            touch: "\u4f7f\u7528\u53cc\u6307\u79fb\u52a8\u5730\u56fe",
            scroll: "\u6309\u4f4f Ctrl \u5e76\u6eda\u52a8\u9f20\u6807\u6eda\u8f6e\u624d\u53ef\u7f29\u653e\u5730\u56fe",
            scrollMac: "\u6309\u4f4f \u2318 \u5e76\u6eda\u52a8\u9f20\u6807\u6eda\u8f6e\u624d\u53ef\u7f29\u653e\u5730\u56fe"
        },
        //Chinese (Traditional)
        "zh-TW": {
            touch: "\u540c\u6642\u4ee5\u5169\u6307\u79fb\u52d5\u5730\u5716",
            scroll: "\u6309\u4f4f ctrl \u9375\u52a0\u4e0a\u6372\u52d5\u6ed1\u9f20\u53ef\u4ee5\u7e2e\u653e\u5730\u5716",
            scrollMac: "\u6309 \u2318 \u52a0\u4e0a\u6efe\u52d5\u6372\u8ef8\u53ef\u4ee5\u7e2e\u653e\u5730\u5716"
        }
    };

    /*
    * * Leaflet Gesture Handling **
    * * Version 1.1.8
    */

    L.Map.mergeOptions({
        gestureHandlingOptions: {
            text: {},
            duration: 1000
        }
    });

    var draggingMap = false;

    var GestureHandling = L.Handler.extend({
        addHooks: function () {
            this._handleTouch = this._handleTouch.bind(this);

            this._setupPluginOptions();
            this._setLanguageContent();
            this._disableInteractions();

            //Uses native event listeners instead of L.DomEvent due to issues with Android touch events
            //turning into pointer events
            this._map._container.addEventListener("touchstart", this._handleTouch);
            this._map._container.addEventListener("touchmove", this._handleTouch);
            this._map._container.addEventListener("touchend", this._handleTouch);
            this._map._container.addEventListener("touchcancel", this._handleTouch);
            this._map._container.addEventListener("click", this._handleTouch);

            L.DomEvent.on(this._map._container, "wheel", this._handleScroll, this);
            L.DomEvent.on(this._map, "mouseover", this._handleMouseOver, this);
            L.DomEvent.on(this._map, "mouseout", this._handleMouseOut, this);

            // Listen to these events so will not disable dragging if the user moves the mouse out the boundary of the map container whilst actively dragging the map.
            L.DomEvent.on(this._map, "movestart", this._handleDragging, this);
            L.DomEvent.on(this._map, "move", this._handleDragging, this);
            L.DomEvent.on(this._map, "moveend", this._handleDragging, this);
        },

        removeHooks: function () {
            this._enableInteractions();

            this._map._container.removeEventListener("touchstart", this._handleTouch);
            this._map._container.removeEventListener("touchmove", this._handleTouch);
            this._map._container.removeEventListener("touchend", this._handleTouch);
            this._map._container.removeEventListener("touchcancel", this._handleTouch);
            this._map._container.removeEventListener("click", this._handleTouch);

            L.DomEvent.off(this._map._container, "wheel", this._handleScroll, this);
            L.DomEvent.off(this._map, "mouseover", this._handleMouseOver, this);
            L.DomEvent.off(this._map, "mouseout", this._handleMouseOut, this);

            L.DomEvent.off(this._map, "movestart", this._handleDragging, this);
            L.DomEvent.off(this._map, "move", this._handleDragging, this);
            L.DomEvent.off(this._map, "moveend", this._handleDragging, this);
        },

        _handleDragging: function (e) {
            if (e.type == "movestart" || e.type == "move") {
                draggingMap = true;
            } else if (e.type == "moveend") {
                draggingMap = false;
            }
        },

        _disableInteractions: function () {
            this._map.dragging.disable();
            this._map.scrollWheelZoom.disable();
            if (this._map.tap) {
                this._map.tap.disable();
            }
        },

        _enableInteractions: function () {
            this._map.dragging.enable();
            this._map.scrollWheelZoom.enable();
            if (this._map.tap) {
                this._map.tap.enable();
            }
        },

        _setupPluginOptions: function () {
            //For backwards compatibility, merge gestureHandlingText into the new options object
            if (this._map.options.gestureHandlingText) {
                this._map.options.gestureHandlingOptions.text = this._map.options.gestureHandlingText;
            }
        },

        _setLanguageContent: function () {
            var languageContent;
            //If user has supplied custom language, use that
            if (this._map.options.gestureHandlingOptions && this._map.options.gestureHandlingOptions.text && this._map.options.gestureHandlingOptions.text.touch && this._map.options.gestureHandlingOptions.text.scroll && this._map.options.gestureHandlingOptions.text.scrollMac) {
                languageContent = this._map.options.gestureHandlingOptions.text;
            } else {
                //Otherwise auto set it from the language files

                //Determine their language e.g fr or en-US
                var lang = this._getUserLanguage();

                //If we couldn't find it default to en
                if (!lang) {
                    lang = "en";
                }

                //Lookup the appropriate language content
                if (LanguageContent[lang]) {
                    languageContent = LanguageContent[lang];
                }

                //If no result, try searching by the first part only. e.g en-US just use en.
                if (!languageContent && lang.indexOf("-") !== -1) {
                    lang = lang.split("-")[0];
                    languageContent = LanguageContent[lang];
                }

                if (!languageContent) {
                    // If still nothing, default to English
                    // console.log("No lang found for", lang);
                    lang = "en";
                    languageContent = LanguageContent[lang];
                }
            }

            //TEST
            // languageContent = LanguageContent["bg"];

            //Check if they're on a mac for display of command instead of ctrl
            var mac = false;
            if (navigator.platform.toUpperCase().indexOf("MAC") >= 0) {
                mac = true;
            }

            var scrollContent = languageContent.scroll;
            if (mac) {
                scrollContent = languageContent.scrollMac;
            }

            this._map._container.setAttribute("data-gesture-handling-touch-content", languageContent.touch);
            this._map._container.setAttribute("data-gesture-handling-scroll-content", scrollContent);
        },

        _getUserLanguage: function () {
            var lang = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;
            return lang;
        },

        _handleTouch: function (e) {
            //Disregard touch events on the minimap if present
            var ignoreList = ["leaflet-control-minimap", "leaflet-interactive", "leaflet-popup-content", "leaflet-popup-content-wrapper", "leaflet-popup-close-button", "leaflet-control-zoom-in", "leaflet-control-zoom-out"];

            var ignoreElement = false;
            for (var i = 0; i < ignoreList.length; i++) {
                if (L.DomUtil.hasClass(e.target, ignoreList[i])) {
                    ignoreElement = true;
                }
            }

            if (ignoreElement) {
                if (L.DomUtil.hasClass(e.target, "leaflet-interactive") && e.type === "touchmove" && e.touches.length === 1) {
                    L.DomUtil.addClass(this._map._container, "leaflet-gesture-handling-touch-warning");
                    this._disableInteractions();
                } else {
                    L.DomUtil.removeClass(this._map._container, "leaflet-gesture-handling-touch-warning");
                }
                return;
            }
            // screenLog(e.type+' '+e.touches.length);
            if (e.type !== "touchmove" && e.type !== "touchstart") {
                L.DomUtil.removeClass(this._map._container, "leaflet-gesture-handling-touch-warning");
                return;
            }
            if (e.touches.length === 1) {
                L.DomUtil.addClass(this._map._container, "leaflet-gesture-handling-touch-warning");
                this._disableInteractions();
            } else {
                this._enableInteractions();
                L.DomUtil.removeClass(this._map._container, "leaflet-gesture-handling-touch-warning");
            }
        },

        _isScrolling: false,

        _handleScroll: function (e) {
            if (e.metaKey || e.ctrlKey) {
                e.preventDefault();
                L.DomUtil.removeClass(this._map._container, "leaflet-gesture-handling-scroll-warning");
                this._map.scrollWheelZoom.enable();
            } else {
                L.DomUtil.addClass(this._map._container, "leaflet-gesture-handling-scroll-warning");
                this._map.scrollWheelZoom.disable();

                clearTimeout(this._isScrolling);

                // Set a timeout to run after scrolling ends
                this._isScrolling = setTimeout(function () {
                    // Run the callback
                    var warnings = document.getElementsByClassName("leaflet-gesture-handling-scroll-warning");
                    for (var i = 0; i < warnings.length; i++) {
                        L.DomUtil.removeClass(warnings[i], "leaflet-gesture-handling-scroll-warning");
                    }
                }, this._map.options.gestureHandlingOptions.duration);
            }
        },

        _handleMouseOver: function (e) {
            this._enableInteractions();
        },

        _handleMouseOut: function (e) {
            if (!draggingMap) {
                this._disableInteractions();
            }
        }

    });

    L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);

    exports.GestureHandling = GestureHandling;
    exports.default = GestureHandling;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
