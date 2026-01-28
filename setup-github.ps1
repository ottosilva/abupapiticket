# Script para configurar y subir el repositorio a GitHub
# Ejecuta este script después de cerrar todos los procesos de Git

Write-Host "=== Configurando repositorio para GitHub ===" -ForegroundColor Cyan

# 1. Eliminar el archivo de bloqueo si existe
Write-Host "`n1. Eliminando archivo de bloqueo..." -ForegroundColor Yellow
if (Test-Path .git\index.lock) {
    Remove-Item -Path .git\index.lock -Force -ErrorAction SilentlyContinue
    Write-Host "   Archivo de bloqueo eliminado" -ForegroundColor Green
} else {
    Write-Host "   No hay archivo de bloqueo" -ForegroundColor Green
}

# 2. Agregar todos los archivos
Write-Host "`n2. Agregando archivos al staging..." -ForegroundColor Yellow
git add .
if ($LASTEXITCODE -eq 0) {
    Write-Host "   Archivos agregados correctamente" -ForegroundColor Green
} else {
    Write-Host "   Error al agregar archivos" -ForegroundColor Red
    exit 1
}

# 3. Verificar estado
Write-Host "`n3. Estado del repositorio:" -ForegroundColor Yellow
git status --short

# 4. Hacer commit
Write-Host "`n4. Haciendo commit..." -ForegroundColor Yellow
git commit -m "Initial commit: abupapiticket project"
if ($LASTEXITCODE -eq 0) {
    Write-Host "   Commit realizado correctamente" -ForegroundColor Green
} else {
    Write-Host "   Error al hacer commit" -ForegroundColor Red
    exit 1
}

# 5. Verificar si ya existe un remoto
Write-Host "`n5. Verificando remotos..." -ForegroundColor Yellow
$remoteExists = git remote -v | Select-String -Pattern "origin"
if ($remoteExists) {
    Write-Host "   Ya existe un remoto 'origin'" -ForegroundColor Yellow
    Write-Host "   Remoto actual:" -ForegroundColor Yellow
    git remote -v
    $overwrite = Read-Host "   ¿Deseas sobrescribirlo? (s/n)"
    if ($overwrite -eq "s" -or $overwrite -eq "S") {
        git remote remove origin
        Write-Host "   Remoto eliminado" -ForegroundColor Green
    } else {
        Write-Host "   Manteniendo remoto existente" -ForegroundColor Yellow
        Write-Host "`nPara crear el repositorio en GitHub y hacer push, ejecuta:" -ForegroundColor Cyan
        Write-Host "   git push -u origin master" -ForegroundColor White
        exit 0
    }
}

# 6. Agregar remoto de GitHub
Write-Host "`n6. Agregando remoto de GitHub..." -ForegroundColor Yellow
Write-Host "   IMPORTANTE: Primero debes crear el repositorio 'abupapiticket' en GitHub" -ForegroundColor Yellow
Write-Host "   Puedes hacerlo en: https://github.com/new" -ForegroundColor Cyan
Write-Host "`n   Una vez creado, el script agregará el remoto y hará push" -ForegroundColor Yellow

$username = Read-Host "`n   Ingresa tu nombre de usuario de GitHub (o presiona Enter para usar 'otto')"
if ([string]::IsNullOrWhiteSpace($username)) {
    $username = "otto"
}

git remote add origin "https://github.com/$username/abupapiticket.git"
if ($LASTEXITCODE -eq 0) {
    Write-Host "   Remoto agregado correctamente" -ForegroundColor Green
} else {
    Write-Host "   Error al agregar remoto (puede que ya exista)" -ForegroundColor Red
}

# 7. Hacer push
Write-Host "`n7. Haciendo push a GitHub..." -ForegroundColor Yellow
Write-Host "   Esto puede requerir autenticación" -ForegroundColor Yellow
git push -u origin master
if ($LASTEXITCODE -eq 0) {
    Write-Host "`n=== ¡Repositorio subido exitosamente a GitHub! ===" -ForegroundColor Green
    Write-Host "   URL: https://github.com/$username/abupapiticket" -ForegroundColor Cyan
} else {
    Write-Host "`n   Error al hacer push" -ForegroundColor Red
    Write-Host "   Asegúrate de que:" -ForegroundColor Yellow
    Write-Host "   1. El repositorio 'abupapiticket' existe en GitHub" -ForegroundColor Yellow
    Write-Host "   2. Tienes permisos para hacer push" -ForegroundColor Yellow
    Write-Host "   3. Estás autenticado correctamente" -ForegroundColor Yellow
    Write-Host "`n   Puedes intentar manualmente con:" -ForegroundColor Cyan
    Write-Host "   git push -u origin master" -ForegroundColor White
}
