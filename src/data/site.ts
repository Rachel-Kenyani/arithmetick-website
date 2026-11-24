/** The app's Android package name, from arithmetick-mobile app.json. */
export const ANDROID_PACKAGE = "com.rachelkenyani.arithmetick";

/** Where every "Get it on Google Play" button leads. */
export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;

/** Help and data requests still go by email. */
export const SUPPORT_EMAIL = "hello@arithmetick.rachelkenyani.com";

/**
 * The Google Play link the badges use. The referrer tags installs from this website,
 * so Play Console > Store performance shows how many came from here.
 */
export const PLAY_STORE_LINK = `${PLAY_STORE_URL}&referrer=${encodeURIComponent("utm_source=website&utm_medium=badge")}`;

/**
 * Cloudflare Web Analytics site token (Cloudflare dashboard > Web Analytics > the site > Manage site).
 * Empty means analytics is off. It sets no cookies and keeps no personal data, so there is no consent banner.
 */
export const CLOUDFLARE_ANALYTICS_TOKEN = "6e497d87cd4644d7b715df2e422ed457";
