const path = require('path');
require('dotenv').config({ path: '.env.local' });
const { exec } = require('child_process');
exec(`chromatic --project-token=${process.env.CHROMATIC_PROJECT_TOKEN}`);
