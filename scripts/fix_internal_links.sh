#!/bin/bash

echo "Fixing internal links in archived HTML files..."

# Fix links in diary pages (in misc folder) that point to diary response pages (in diary folder)
find public/archived/html/misc -name "*-d*.html" -type f | while read file; do
    temp_file="${file}.tmp"
    
    # Fix diary response links to point to diary folder
    LANG=C sed \
        -e 's|href="asahi67keion-\([0-9]*\)-d_res\.php|href="/archived/html/diary/asahi67keion-\1-d_res.php|g' \
        -e 's|href="asahi67keion-\([0-9]*\)-d2_res\.php|href="/archived/html/diary/asahi67keion-\1-d2_res.php|g' \
        -e 's|href="asahi67keion-\([0-9]*\)-d3_res\.php|href="/archived/html/diary/asahi67keion-\1-d3_res.php|g' \
        -e 's|href="asahi67keion-\([0-9]*\)-d_res2\.php|href="/archived/html/diary/asahi67keion-\1-d_res2.php|g' \
        -e 's|href="asahi67keion-\([0-9]*\)-d_resentry\.php|href="/archived/html/diary/asahi67keion-\1-d_resentry.php|g' \
        -e 's|action="asahi67keion-\([0-9]*\)-d_res\.php|action="/archived/html/diary/asahi67keion-\1-d_res.php|g' \
        -e 's|href="ent_ins_d\.php|href="/archived/html/misc/ent_ins_d.php|g' \
        -e 's|href="d_mon\.php|href="/archived/html/misc/d_mon.php|g' \
        -e 's|href="mailnews\.php|href="/archived/html/misc/mailnews.php|g' \
        -e 's|href="asahi67keion-\([0-9]*\)-d_al\.php|href="/archived/html/misc/asahi67keion-\1-d_al.php|g' \
        "$file" > "$temp_file"
    
    mv "$temp_file" "$file"
    echo "Fixed links in: $(basename "$file")"
done

# Fix links in diary response pages (in diary folder) that point back to diary pages or other response pages
find public/archived/html/diary -name "*.html" -type f | while read file; do
    temp_file="${file}.tmp"
    
    # Fix links that point back to diary pages in misc folder
    LANG=C sed \
        -e 's|href="asahi67keion-\([0-9]*\)-d\.php|href="/archived/html/misc/asahi67keion-\1-d.php|g' \
        -e 's|href="asahi67keion-\([0-9]*\)-d2\.php|href="/archived/html/misc/asahi67keion-\1-d2.php|g' \
        -e 's|href="asahi67keion-\([0-9]*\)-d3\.php|href="/archived/html/misc/asahi67keion-\1-d3.php|g' \
        -e 's|href="asahi67keion-\([0-9]*\)-d_res\.php|href="/archived/html/diary/asahi67keion-\1-d_res.php|g' \
        -e 's|href="asahi67keion-\([0-9]*\)-d_res2\.php|href="/archived/html/diary/asahi67keion-\1-d_res2.php|g' \
        -e 's|href="asahi67keion-\([0-9]*\)-d_resentry\.php|href="/archived/html/diary/asahi67keion-\1-d_resentry.php|g' \
        -e 's|href="ent_sub_d\.php|href="/archived/html/misc/ent_sub_d.php|g' \
        "$file" > "$temp_file"
    
    mv "$temp_file" "$file"
    echo "Fixed links in: $(basename "$file")"
done

echo "Internal links fixed!"