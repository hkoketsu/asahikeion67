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
        
        # Fix archived content links to use base path
        # Pattern: href="/archived/..." -> href={`${base}archived/...`}
        content = re.sub(
            r'href="(/archived/[^"]+)"',
            r'href={`${base}archived/' + r'\1'.replace('/archived/', '') + r'`}',
            content
        )
        
        # Check if we need the base variable in frontmatter
        if 'const base = import.meta.env.BASE_URL' not in content and '${base}' in content:
            # Find the frontmatter section
            frontmatter_match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL)
            if frontmatter_match:
                frontmatter = frontmatter_match.group(1)
                # Add base declaration after other const declarations or at the end
                new_frontmatter = frontmatter + "\nconst base = import.meta.env.BASE_URL || '';"
                content = content.replace(frontmatter, new_frontmatter)
        
        # Write back if changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            processed += 1
            print(f"Updated: {file_path.name}")
    
    except Exception as e:
        print(f"Error processing {file_path.name}: {e}")

print(f"\nProcessing complete: {processed} files updated")