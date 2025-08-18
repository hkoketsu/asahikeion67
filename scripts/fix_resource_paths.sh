#!/bin/bash

# Script to fix resource paths in archived HTML files
echo "Fixing resource paths in archived HTML files..."

# Fix paths in all HTML files
find public/archived -name "*.html" -type f | while read file; do
    # Create temporary file
    temp_file="${file}.tmp"
    
    # Fix JavaScript paths - add /archived prefix
    sed 's|src="_emoji/|src="/archived/_emoji/|g' "$file" |
    sed 's|src="_js/|src="/archived/_js/|g' |
    
    # Fix image paths - add /archived prefix
    sed 's|src="_ppic_/|src="/archived/_ppic_/|g' |
    sed 's|src="_upimg_/|src="/archived/_upimg_/|g' |
    sed 's|background="_ppic_/|background="/archived/_ppic_/|g' |
    
    # Fix CSS paths - add /archived prefix
    sed 's|href="_css/|href="/archived/_css/|g' |
    
    # Fix links to other archived pages
    # Profile pages
    sed 's|href="asahi67keion-\([0-9]*\)-pr\.php[^"]*"|href="/archived/html/misc/&"|g' |
    
    # Diary pages in misc
    sed 's|href="asahi67keion-\([0-9]*\)-d[0-9]*\.php[^"]*"|href="/archived/html/misc/&"|g' |
    sed 's|href="asahi67keion-\([0-9]*\)-d\.php[^"]*"|href="/archived/html/misc/&"|g' |
    
    # Diary response pages - these are in diary folder
    sed 's|href="asahi67keion-\([0-9]*\)-d_res\.php[^"]*"|href="/archived/html/diary/&"|g' |
    sed 's|href="asahi67keion-\([0-9]*\)-d_res2\.php[^"]*"|href="/archived/html/diary/&"|g' |
    sed 's|href="asahi67keion-\([0-9]*\)-d2_res\.php[^"]*"|href="/archived/html/diary/&"|g' |
    sed 's|href="asahi67keion-\([0-9]*\)-d3_res\.php[^"]*"|href="/archived/html/diary/&"|g' |
    
    # Entry pages
    sed 's|href="asahi67keion-\([0-9]*\)-d_resentry\.php[^"]*"|href="/archived/html/diary/&"|g' |
    sed 's|action="asahi67keion-\([0-9]*\)-d_res\.php[^"]*"|action="/archived/html/diary/&"|g' |
    
    # Other misc pages
    sed 's|href="asahi67keion-\([0-9]*\)-ch\.php[^"]*"|href="/archived/html/misc/&"|g' |
    sed 's|href="mailnews\.php[^"]*"|href="/archived/html/misc/&"|g' |
    sed 's|href="d_mon\.php[^"]*"|href="/archived/html/misc/&"|g' |
    sed 's|href="ent_ins_d\.php[^"]*"|href="/archived/html/misc/&"|g' |
    
    # Fix already prefixed paths (avoid double prefixing)
    sed 's|href="/archived/html/[^/]*/href="|href="|g' |
    sed 's|action="/archived/html/[^/]*/action="|action="|g' |
    sed 's|src="/archived/src="|src="|g' |
    sed 's|background="/archived/background="|background="|g' > "$temp_file"
    
    # Move temp file to original
    mv "$temp_file" "$file"
    
    echo "Fixed paths in: $(basename "$file")"
done

echo "Resource path fixing complete!"