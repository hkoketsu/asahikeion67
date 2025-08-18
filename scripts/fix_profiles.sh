#!/bin/bash

cd /Users/hiroki.koketsu/Repos/asahikeion67/public/archived/html/misc

# Fix each profile page with its original body tag colors
files=(
"asahi67keion-94859-pr.php-guid=on.html"
"asahi67keion-94860-pr.php-guid=on.html"
"asahi67keion-94861-pr.php-guid=on.html"
"asahi67keion-94862-pr.php-guid=on.html"
"asahi67keion-94863-pr.php-guid=on.html"
"asahi67keion-94864-pr.php-guid=on.html"
"asahi67keion-94865-pr.php-guid=on.html"
"asahi67keion-94866-pr.php-guid=on.html"
"asahi67keion-94868-pr.php-guid=on.html"
"asahi67keion-94869-pr.php-guid=on.html"
"asahi67keion-94870-pr.php-guid=on.html"
"asahi67keion-94871-pr.php-guid=on.html"
"asahi67keion-94872-pr.php-guid=on.html"
"asahi67keion-94873-pr.php-guid=on.html"
"asahi67keion-96296-pr.php-guid=on.html"
"asahi67keion-97236-pr.php-guid=on.html"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        original="/Users/hiroki.koketsu/Repos/asahikeion67/archived/html/misc/$file"
        if [ -f "$original" ]; then
            # Extract the original body tag
            body_tag=$(grep -o '<body[^>]*>' "$original" | tail -1)
            if [ ! -z "$body_tag" ]; then
                # Replace the simple <body> with the original colored one
                sed -i '' "s|<body>|${body_tag}|" "$file"
                # Fix the form tag
                sed -i '' "s|<form>|<form action=\"${file%.html}\">|" "$file"
                echo "Fixed: $file"
            fi
        fi
    fi
done

echo "All profile pages fixed!"