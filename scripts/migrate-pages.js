import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import iconv from 'iconv-lite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to convert Shift_JIS to UTF-8
function convertEncoding(filePath) {
  const buffer = fs.readFileSync(filePath);
  const content = iconv.decode(buffer, 'Shift_JIS');
  return content;
}

// Function to extract content from HTML
function extractContent(html) {
  // Extract title
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : 'Untitled';
  
  // Extract body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : html;
  
  return { title, bodyContent };
}

// Function to categorize pages
function categorizePage(filename) {
  if (filename.includes('profile') || filename.includes('236761')) return 'profile';
  if (filename.includes('diary') || filename.includes('236764')) return 'diary';
  if (filename.includes('real') || filename.includes('118195') || filename.includes('30185')) return 'real';
  if (filename.includes('photo') || filename.includes('39149')) return 'photo';
  if (filename.includes('song') || filename.includes('237020')) return 'song';
  if (filename.includes('bbs')) return 'bbs';
  return 'archive';
}

// Main migration function
async function migratePages() {
  const sourceDir = path.join(__dirname, '../../');
  const targetDir = path.join(__dirname, '../src/pages/archive');
  
  // Get all HTML files
  const files = fs.readdirSync(sourceDir).filter(file => file.endsWith('.html') && file !== 'index.html');
  
  console.log(`Found ${files.length} HTML files to migrate`);
  
  // Create category directories
  const categories = ['profile', 'diary', 'real', 'photo', 'song', 'bbs', 'misc'];
  categories.forEach(cat => {
    const catDir = path.join(targetDir, cat);
    if (!fs.existsSync(catDir)) {
      fs.mkdirSync(catDir, { recursive: true });
    }
  });
  
  // Process each file
  files.forEach((file, index) => {
    try {
      const sourcePath = path.join(sourceDir, file);
      const content = convertEncoding(sourcePath);
      const { title, bodyContent } = extractContent(content);
      const category = categorizePage(file);
      
      // Create sanitized filename
      const sanitizedName = file
        .replace(/\.html$/, '')
        .replace(/[&?=]/g, '-')
        .substring(0, 100) + '.astro';
      
      const targetPath = path.join(targetDir, category, sanitizedName);
      
      // Create Astro page
      const astroContent = `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import '../../../styles/global.css';

const originalFile = '${file}';
---

<BaseLayout title="${title.replace(/"/g, '\\"')}">
  <div class="archive-container">
    <nav class="breadcrumb">
      <a href="/">ホーム</a> &gt;
      <a href="/archive">アーカイブ</a> &gt;
      <span>${category}</span>
    </nav>
    
    <main class="archive-content">
      ${bodyContent}
    </main>
    
    <footer class="archive-footer">
      <p>Original file: ${file}</p>
      <a href="/">ホームに戻る</a>
    </footer>
  </div>
</BaseLayout>

<style>
  .archive-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .breadcrumb {
    margin-bottom: 2rem;
    font-size: 0.875rem;
  }
  
  .archive-content {
    background: white;
    padding: 2rem;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .archive-footer {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #eee;
    font-size: 0.875rem;
    text-align: center;
  }
</style>`;
      
      fs.writeFileSync(targetPath, astroContent);
      
      if (index % 50 === 0) {
        console.log(`Processed ${index + 1}/${files.length} files...`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
  
  console.log('Migration complete!');
}

// Run migration
migratePages().catch(console.error);