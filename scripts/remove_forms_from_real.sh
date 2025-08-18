#!/bin/bash

# Script to remove non-functional forms from archived real pages

ARCHIVED_DIR="/Users/hiroki.koketsu/Repos/asahikeion67/public/archived/html/real"

echo "Removing non-functional forms from archived real pages..."

# Process all HTML files in the real directory
for file in "$ARCHIVED_DIR"/*.html; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        
        # Remove the form section from the mail submission line to the horizontal rule before the entries
        # This pattern matches from "⇒ﾒｰﾙ投稿" to the next occurrence of actual content
        # We need to be careful to preserve the actual entries
        
        # First, let's remove the entire form block
        # The form starts with the mail submission line and ends before the first entry
        sed -i '' '/<hr color="#FFFFFF".*>⇒ﾒｰﾙ投稿/,/<a name=viewlist><\/a>/d' "$file" 2>/dev/null
        
        echo "  Processed: $filename"
    fi
done

echo "Form removal complete!"