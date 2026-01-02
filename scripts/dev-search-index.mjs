import { mkdir, cp, rm, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const distDir = resolve(process.cwd(), 'dist', 'pagefind');
const publicDir = resolve(process.cwd(), 'public', 'pagefind');

const exists = async (path) => {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
};

if (!(await exists(distDir))) {
  console.error('Missing dist/pagefind. Run "npm run build" once to generate the index.');
  process.exit(1);
}

await rm(publicDir, { recursive: true, force: true });
await mkdir(dirname(publicDir), { recursive: true });
await cp(distDir, publicDir, { recursive: true });

console.log('Copied dist/pagefind -> public/pagefind');
