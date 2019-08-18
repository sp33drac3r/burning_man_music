#!/bin/bash
# https://github.com/flyingrub/scdl

input="./soundclouddownloads.txt"

while IFS= read -r line
do
  scdl -l "$line"
done < "$input"