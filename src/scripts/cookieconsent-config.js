import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';

function syncYouTubeEmbeds() {
	const accepted = CookieConsent.acceptedCategory('media');
	document.querySelectorAll('.youtube-consent-wrapper').forEach((wrapper) => {
		const iframe = wrapper.querySelector('iframe[data-category="media"][data-service="youtube"]');
		const placeholder = wrapper.querySelector('[data-placeholder]');
		if (!iframe) return;
		const url = iframe.getAttribute('data-src');
		if (accepted && url) {
			iframe.src = url;
			if (placeholder) placeholder.style.display = 'none';
		} else {
			iframe.removeAttribute('src');
			if (placeholder) placeholder.style.display = '';
		}
	});
}

CookieConsent.run({
	cookie: {
		secure: typeof location !== 'undefined' && location.protocol === 'https:',
	},

	guiOptions: {
		consentModal: {
			layout: 'box wide',
			position: 'bottom center',
			equalWeightButtons: true,
		},
		preferencesModal: {
			layout: 'box',
		},
	},

	onConsent: () => {
		syncYouTubeEmbeds();
	},

	onChange: () => {
		syncYouTubeEmbeds();
	},

	categories: {
		necessary: {
			enabled: true,
			readOnly: true,
		},
		media: {
			enabled: false,
			autoClear: {
				cookies: [{ name: /^VISITOR_INFO/ }, { name: /^YSC/ }, { name: /^PREF/ }],
			},
			services: {
				youtube: {
					label: 'YouTube',
				},
			},
		},
	},

	language: {
		default: 'de',
		translations: {
			de: {
				consentModal: {
					title: 'Cookie-Einstellungen',
					description:
						'Wir nutzen Cookies, um Inhalte wie YouTube-Videos anzuzeigen. Mehr dazu in unserer <a href="/datenschutz" data-cc="c-settings">Datenschutzerklärung</a>.',
					acceptAllBtn: 'Alle akzeptieren',
					acceptNecessaryBtn: 'Nur notwendige',
					showPreferencesBtn: 'Einstellungen',
				},
				preferencesModal: {
					title: 'Cookie-Einstellungen',
					acceptAllBtn: 'Alle akzeptieren',
					acceptNecessaryBtn: 'Nur notwendige',
					savePreferencesBtn: 'Auswahl speichern',
					closeIconLabel: 'Schließen',
					serviceCounterLabel: 'Dienst|Dienste',
					sections: [
						{
							title: 'Cookie-Nutzung',
							description:
								'Wir nutzen Cookies, um eingebettete Inhalte von Drittanbietern wie YouTube anzuzeigen. Du kannst selbst entscheiden, welche Kategorien du zulassen möchtest.',
						},
						{
							title: 'Notwendig',
							description:
								'Diese Cookies sind für grundlegende Funktionen der Website erforderlich und können nicht deaktiviert werden.',
							linkedCategory: 'necessary',
						},
						{
							title: 'Externe Medien',
							description:
								'Erlaubt das Laden von YouTube-Videos und anderen eingebetteten Inhalten. Dabei können Daten an Drittanbieter übertragen werden.',
							linkedCategory: 'media',
						},
						{
							title: 'Weitere Informationen',
							description:
								'Bei Fragen zu unseren Cookie-Richtlinien kontaktiere uns über unser <a href="/ueber-mich#kontakt">Kontaktformular</a>.',
						},
					],
				},
			},
		},
	},
}).then(() => {
	syncYouTubeEmbeds();
});

window.CookieConsent = CookieConsent;

export default CookieConsent;
