module.exports = {
  ci: {
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
      target: 'filesystem',
      outputDir: 'lighthouse',
    },
  },
}
