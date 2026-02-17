#!/bin/bash

# Loop through all .txt files in the current directory
for file in *.txt; do
    # Check if any files matching the pattern actually exist
    if [ -f "$file" ]; then
        cat "$file"
        echo -e "\n" # Adds a newline for readability
    else
        echo "No .txt files found in this directory."
    fi
done
