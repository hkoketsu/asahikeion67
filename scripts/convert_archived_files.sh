#!/bin/bash

# Script to convert archived HTML files for the Asahi 67 Keion website
# This handles character encoding conversion and removes service termination notices

ARCHIVED_DIR="/Users/hiroki.koketsu/Repos/asahikeion67/archived"
PUBLIC_DIR="/Users/hiroki.koketsu/Repos/asahikeion67/public/archived"

echo "Starting conversion of archived files..."

# Function to process HTML files
process_html_files() {
    local src_dir="$1"
    local dest_dir="$2"
    local pattern="$3"
    
    echo "Processing files from $src_dir to $dest_dir"
    
    # Create destination directory if it doesn't exist
    mkdir -p "$dest_dir"
    
    # Copy and process files
    for file in $src_dir/$pattern; do
        if [ -f "$file" ]; then
            filename=$(basename "$file")
            dest_file="$dest_dir/$filename"
            
            # Copy file
            cp "$file" "$dest_file"
            
            # Try to convert from Shift_JIS to UTF-8
            # Using -c flag to skip invalid characters
            temp_file="${dest_file}.tmp"
            if iconv -f SHIFT_JIS -t UTF-8 -c "$dest_file" > "$temp_file" 2>/dev/null; then
                mv "$temp_file" "$dest_file"
                # Update charset declaration
                sed -i '' 's/charset=shift_JIS/charset=UTF-8/g' "$dest_file" 2>/dev/null
                sed -i '' 's/charset=Shift_JIS/charset=UTF-8/g' "$dest_file" 2>/dev/null
                echo "  Converted to UTF-8: $filename"
            else
                rm -f "$temp_file"
                echo "  Keeping original encoding: $filename"
            fi
            
            # Remove service termination notice
            # Using LANG=C to handle different encodings
            LANG=C sed -i '' '/<TABLE width="75%;" BGCOLOR=#FF1493/,/<\/TABLE>/d' "$dest_file" 2>/dev/null
            
            # Add missing body and form tags if needed (for profile pages)
            if [[ "$filename" == *"-pr.php-guid=on.html" ]]; then
                # Check if body tag is missing attributes
                if grep -q "^<body>$" "$dest_file" 2>/dev/null; then
                    # Extract original body tag from archived file if possible
                    original_file="$src_dir/$filename"
                    if [ -f "$original_file" ]; then
                        body_tag=$(grep -o '<body[^>]*>' "$original_file" 2>/dev/null | tail -1)
                        if [ ! -z "$body_tag" ]; then
                            sed -i '' "s|<body>|${body_tag}|" "$dest_file" 2>/dev/null
                        fi
                    fi
                    # Fix form tag
                    sed -i '' "s|<form>|<form action=\"${filename%.html}\">|" "$dest_file" 2>/dev/null
                fi
            fi
        fi
    done
}

# Process profile pages
echo "Converting profile pages..."
process_html_files \
    "$ARCHIVED_DIR/html/misc" \
    "$PUBLIC_DIR/html/misc" \
    "*-pr.php-guid=on.html"

# Process diary pages
echo "Converting diary pages..."
process_html_files \
    "$ARCHIVED_DIR/html/misc" \
    "$PUBLIC_DIR/html/misc" \
    "*-d*.html"

# Process diary response pages
echo "Converting diary response pages..."
process_html_files \
    "$ARCHIVED_DIR/html/diary" \
    "$PUBLIC_DIR/html/diary" \
    "*-d*.html"

# Process BBS pages
echo "Converting BBS pages..."
process_html_files \
    "$ARCHIVED_DIR/html/bbs" \
    "$PUBLIC_DIR/html/bbs" \
    "*.html"

# Process photo pages
echo "Converting photo pages..."
process_html_files \
    "$ARCHIVED_DIR/html/photo" \
    "$PUBLIC_DIR/html/photo" \
    "*.html"

# Process real archive pages
echo "Converting real archive pages..."
process_html_files \
    "$ARCHIVED_DIR/html/real" \
    "$PUBLIC_DIR/html/real" \
    "*.html"

# Copy image directories if they don't exist in public
echo "Copying image directories..."
for img_dir in "_ppic_" "_upimg_" "_alpic2c_"; do
    if [ -d "$ARCHIVED_DIR/$img_dir" ] && [ ! -d "$PUBLIC_DIR/$img_dir" ]; then
        cp -r "$ARCHIVED_DIR/$img_dir" "$PUBLIC_DIR/"
        echo "  Copied $img_dir directory"
    fi
done

echo "Conversion complete!"
echo ""
echo "Summary:"
echo "- Converted HTML files from Shift_JIS to UTF-8 where possible"
echo "- Removed service termination notices"
echo "- Fixed malformed HTML in profile pages"
echo "- Copied image directories"
echo ""
echo "Files are now available in: $PUBLIC_DIR"