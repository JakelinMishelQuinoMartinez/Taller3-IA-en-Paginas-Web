#!/bin/bash
# Script de Validación Final - EduTrack
# Verifica que todos los archivos existan y no tengan errores comunes

echo "🔍 VALIDACIÓN FINAL - EduTrack Project"
echo "======================================"
echo ""

# Directorio del proyecto
PROJECT_DIR="."
ERRORS=0
WARNINGS=0

# Arrays de archivos requeridos
HTML_FILES=(
    "index.html"
    "dashboard.html"
    "app.html"
    "VERIFICACION.html"
)

CSS_FILES=(
    "styles.css"
    "dashboard-styles.css"
    "app-styles.css"
)

JS_FILES=(
    "dashboard-script.js"
    "main.js"
    "validacion.js"
    "welcome.js"
)

JSON_FILES=(
    "dataset.json"
)

MD_FILES=(
    "README.md"
    "GUIA_RAPIDA.md"
    "RESUMEN_EJECUTIVO.md"
)

# Función para verificar archivo
check_file() {
    local file=$1
    if [ -f "$PROJECT_DIR/$file" ]; then
        local size=$(wc -c < "$PROJECT_DIR/$file")
        local lines=$(wc -l < "$PROJECT_DIR/$file")
        echo "  ✅ $file ($size bytes, $lines líneas)"
        return 0
    else
        echo "  ❌ $file - NO ENCONTRADO"
        ((ERRORS++))
        return 1
    fi
}

# Verificar archivos HTML
echo "📄 Verificando archivos HTML:"
for file in "${HTML_FILES[@]}"; do
    check_file "$file"
done

echo ""
echo "🎨 Verificando archivos CSS:"
for file in "${CSS_FILES[@]}"; do
    check_file "$file"
done

echo ""
echo "⚙️ Verificando archivos JavaScript:"
for file in "${JS_FILES[@]}"; do
    check_file "$file"
done

echo ""
echo "📋 Verificando archivos JSON:"
for file in "${JSON_FILES[@]}"; do
    check_file "$file"
done

echo ""
echo "📚 Verificando archivos Markdown:"
for file in "${MD_FILES[@]}"; do
    check_file "$file"
done

# Resumen
echo ""
echo "======================================"
echo "📊 RESUMEN DE VALIDACIÓN"
echo "======================================"
echo ""
echo "Total archivos requeridos: $((${#HTML_FILES[@]} + ${#CSS_FILES[@]} + ${#JS_FILES[@]} + ${#JSON_FILES[@]} + ${#MD_FILES[@]}))"
echo "Total errores encontrados: $ERRORS"
echo ""

if [ $ERRORS -eq 0 ]; then
    echo "✅ VALIDACIÓN EXITOSA"
    echo "Todos los archivos están presentes y guardados correctamente."
    exit 0
else
    echo "❌ VALIDACIÓN FALLIDA"
    echo "Por favor, revisa los errores anteriores."
    exit 1
fi
