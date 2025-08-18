#!/usr/bin/env python3
import os
from pathlib import Path

# Files to update
files = [
    "src/pages/photo.astro",
    "src/pages/profile.astro", 
    "src/pages/link.astro",
    "src/pages/real.astro",
    "src/pages/diary.astro",
    "src/pages/index.astro",
    "src/pages/song.astro",
    "src/pages/real-archive.astro",
    "src/pages/photo/[page].astro"
]

for file_path in files:
    full_path = Path(file_path)
    if full_path.exists():
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace the base constant definition
        content = content.replace(
            "const base = import.meta.env.BASE_URL || '';",
            "const base = import.meta.env.BASE_URL || '/';"
        )
        
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Updated: {file_path}")
    else:
        print(f"File not found: {file_path}")

print("\nAll files updated!")