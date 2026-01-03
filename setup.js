const { spawnSync } = require('child_process');

const projectDir = process.cwd();

console.log('📦 E-Commerce Store Setup\n');
console.log(`📍 Project Directory: ${projectDir}\n`);

try {
  console.log('Installing dependencies...\n');
  const installResult = spawnSync('npm', ['install'], {
    stdio: 'inherit',
    shell: true,
  });
  
  if (installResult.error) throw installResult.error;
  
  console.log('\n✅ Dependencies installed successfully!\n');
  
  console.log('Building project...\n');
  const buildResult = spawnSync('npm', ['run', 'build'], {
    stdio: 'inherit',
    shell: true,
  });
  
  if (buildResult.error) throw buildResult.error;
  
  console.log('\n✅ Build completed successfully!\n');
  console.log('🎉 Setup complete! Run "npm run dev" to start the development server.\n');
  
} catch (error) {
  console.error('\n❌ Setup failed!');
  console.error('Error:', error.message);
  process.exit(1);
}
