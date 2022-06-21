// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://726a952c794e4d9a8f8ea2613317949b@o1294002.ingest.sentry.io/6519312',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
  beforeSend(event, hint) {
    // Check if it is an exception, and if so, show the report dialog
    if (event.exception) {
      Sentry.showReportDialog({ eventId: event.event_id, title: 'Hey Bitch', subtitle: 'you made my app crash', subtitle2: 'you want to piece of me ?', labelName: 'Enter your name', labelEmail: 'Enter your email', labelComments: 'What come?', labelClose: 'close, please', labelSubmit: 'go' });
    }
    return event;
  },
});