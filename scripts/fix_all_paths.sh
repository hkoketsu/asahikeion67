#!/bin/bash

# Script to fix all resource paths in archived HTML files
echo "Fixing all resource paths in archived HTML files..."

# Process all HTML files
find public/archived -name "*.html" -type f | while read file; do
    # Create temporary file
    temp_file="${file}.tmp"
    
    # Use LANG=C to avoid encoding issues with sed
    LANG=C sed \
        -e 's|src="_emoji/|src="/archived/_emoji/|g' \
        -e 's|src="_js/|src="/archived/_js/|g' \
        -e 's|src="_ppic_/|src="/archived/_ppic_/|g' \
        -e 's|src="_upimg_/|src="/archived/_upimg_/|g' \
        -e 's|background="_ppic_/|background="/archived/_ppic_/|g' \
        -e 's|href="_css/|href="/archived/_css/|g' \
        -e 's|src="spacer.gif"|src="/archived/spacer.gif"|g' \
        "$file" > "$temp_file"
    
    # Move temp file to original
    mv "$temp_file" "$file"
    
    echo "Fixed: $(basename "$file")"
done

echo "All resource paths fixed!"