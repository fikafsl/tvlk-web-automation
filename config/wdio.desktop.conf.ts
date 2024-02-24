import { config } from './wdio.shared.conf';

// ============
// Specs
// ============
config.specs = ['./src/features/feature-files/**/*.feature'];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        browserName: 'chrome',
        'wdio:devtoolsOptions': {
            headless: false
        }
    }
];

exports.config = config;
