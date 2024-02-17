import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        marketing: {}
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            de: {
                consentModal: {
                    title: "Diese Webseite verwendet Cookies.\n",
                    description: "Wir verwenden auf dieser Seite verschiedene Arten von Cookies. Technische und funktionale Cookies sind notwendig, damit alles reibungslos funktioniert. Zusätzlich setzen wir Marketing-Cookies ein, um dich wiederzuerkennen und den Erfolg unserer Kampagnen zu messen.",
                    closeIconLabel: "",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    showPreferencesBtn: "Einstellungen verwalten",
                    footer: "<a href=\"/datenschutz\">Datenschutz</a>\n<a href=\"/impressum\">Impressum</a>"
                },
                preferencesModal: {
                    title: "Präferenzen für die Zustimmung",
                    closeIconLabel: "Modal schließen",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    savePreferencesBtn: "Einstellungen speichern",
                    serviceCounterLabel: "Dienstleistungen",
                    sections: [
                        {
                            title: "Notwendige Cookies <span class=\"pm__badge\">Immer Aktiviert</span>",
                            description: "Damit unsere Website reibungslos läuft, sind einige Cookies notwendig. Außerdem helfen Webanalysen, die Website zu verbessern und Fehler zu beheben.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Marketing Cookies",
                            description: "Damit wir Sie auf unseren Seiten wieder erkennen und den Erfolg unserer Kampagnen messen können.",
                            linkedCategory: "marketing"
                        }
                    ]
                }
            },
            en: {
                consentModal: {
                    title: "Hello traveller, it's cookie time!",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"#link\">Privacy Policy</a>\n<a href=\"#link\">Terms and conditions</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Advertisement Cookies",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "More information",
                            description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"#yourdomain.com\">contact me</a>."
                        }
                    ]
                }
            }
        }
    }
});