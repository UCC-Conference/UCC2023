#!/bin/bash

# Definiamo la larghezza massima desiderata per le miniature
MAX_WIDTH=200

# Cicliamo su tutte le immagini nella cartella corrente
for IMAGE_FILE in *.JPG; do
    # Definiamo il nome del file di output per la miniatura
    THUMBNAIL_FILE="${IMAGE_FILE%.*}.JPG"
    
    # Eseguiamo il resize dell'immagine utilizzando ImageMagick
    convert "$IMAGE_FILE" -resize "${MAX_WIDTH}x" thumbnails/"$THUMBNAIL_FILE"
done