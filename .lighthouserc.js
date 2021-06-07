module.exports = {
  ci: {
    assert: {
      assertions: {
        'first-contentful-paint': ['error', { minScore: 0.6 }],
      },
    },
    collect: {
      url: 'http://localhost:3000/',
      numberOfRuns: 1,
      settings: {
        chromeFlags: '--no-sandbox',
        throttling: {
          cpuSlowdownMultiplier: 3.0,
        },
        blockedUrlPatterns: ['googletagmanager.com'],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
