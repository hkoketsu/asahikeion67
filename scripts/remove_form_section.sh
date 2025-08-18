#!/bin/bash

# Script to remove only the non-functional form section from archived real pages

ARCHIVED_DIR="/Users/hiroki.koketsu/Repos/asahikeion67/public/archived/html/real"

echo "Removing non-functional form sections from archived real pages..."

# Process all HTML files in the real directory
for file in "$ARCHIVED_DIR"/*.html; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        
        # Create a temporary file
        temp_file="${file}.tmp"
        
        # Use awk to remove only the form section
        # The form starts with "⇒ﾒｰﾙ投稿" and ends with </form>
        # We want to keep everything before and after the form
        awk '
            BEGIN { in_form = 0; }
            /⇒ﾒｰﾙ投稿.*<hr/ { in_form = 1; }
            /<\/form>/ { 
                if (in_form) {
                    in_form = 0;
                    next;
                }
            }
            !in_form { print }
        ' "$file" > "$temp_file"
        
        # Replace the original file
        mv "$temp_file" "$file"
        
        echo "  Processed: $filename"
    fi
done

echo "Form removal complete!"