#~/bin/bash

if ( echo "$1" | grep -Eio '(\.jpe?g\.|\.png\.|\.gif\.|\.tiff\.|\.bmp\.|\.webp\.)' )
then
    rm "$1"
fi

