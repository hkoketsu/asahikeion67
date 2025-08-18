#!/usr/bin/env python3
import os
import re
from pathlib import Path

# Source directory
src_dir = Path("/Users/hiroki.koketsu/Repos/asahikeion67/src/pages")

# Get all .astro files
astro_files = list(src_dir.rglob("*.astro"))
print(f"Found {len(astro_files)} Astro files to process")

processed = 0

for file_path in astro_files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Check if file already imports the helper
        has_import = 'import { getAssetPath }' in content or 'import { getArchivedPath }' in content
        
        # Fix image paths: src="/images/..." -> use getAssetPath
        content = re.sub(
            r'src="(/images/[^"]+)"',
            r'src={getAssetPath("\1")}',
            content
        )
        
        # Fix archived paths: src="/archived/..." -> use getAssetPath  
        content = re.sub(
            r'src="(/archived/[^"]+)"',
            r'src={getAssetPath("\1")}',
            content
        )
        
        # Fix href paths for internal navigation (but not anchors or external links)
        content = re.sub(
            r'href="/((?!archived/)[^"#][^"]*)"',
            r'href={getAssetPath("/\1")}',
            content
        )
        
        # If we made changes and need the import, add it
        if content != original_content and not has_import:
            # Find the end of the frontmatter
            frontmatter_end = content.find('---', 3)
            if frontmatter_end != -1:
                # Add import right after frontmatter
                import_statement = "\nimport { getAssetPath } from '../utils/paths.js';\n"
                content = content[:frontmatter_end+3] + import_statement + content[frontmatter_end+3:]
        
        # Write back if changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            processed += 1
            print(f"Updated: {file_path.name}")
    
    except Exception as e:
        print(f"Error processing {file_path.name}: {e}")

print(f"\nProcessing complete: {processed} files updated")