#!/bin/bash
# Script para remover imagens originais JPG/PNG após conversão para WebP
# ATENÇÃO: Use com cuidado! Isso remove os originais permanentemente.

echo "⚠️  ATENÇÃO: Este script vai DELETAR as imagens JPG/JPEG/PNG originais!"
echo "As imagens WebP serão mantidas."
echo ""
read -p "Tem certeza que deseja continuar? (digite 'SIM' para confirmar): " confirm

if [ "$confirm" != "SIM" ]; then
    echo "❌ Operação cancelada."
    exit 1
fi

echo ""
echo "🗑️  Removendo imagens originais..."
echo ""

FLEET_DIR="public/images/fleet"
count=0

# Encontra e remove apenas imagens que têm versão WebP
find "$FLEET_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
    webp_file="${file%.*}.webp"
    if [ -f "$webp_file" ]; then
        echo "🗑️  Removendo: $file"
        rm "$file"
        ((count++))
    else
        echo "⊘ Mantendo: $file (WebP não existe)"
    fi
done

echo ""
echo "============================================================"
echo "✅ Limpeza concluída!"
echo "📊 Imagens removidas: $count"
echo "💾 Espaço economizado: ~7.53 MB"
echo "============================================================"
echo ""
echo "⚠️  LEMBRETE: Faça backup antes de fazer commit!"
