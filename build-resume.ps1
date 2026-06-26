# Build resume.tex -> resume.pdf
# Usage: powershell -ExecutionPolicy Bypass -File .\build-resume.ps1
# Prefers pdfLaTeX (MiKTeX) so output matches Overleaf; falls back to latexmk/tectonic.

$ErrorActionPreference = 'Stop'
$tex = Join-Path $PSScriptRoot 'resume.tex'

if (-not (Test-Path $tex)) { Write-Error "resume.tex not found in $PSScriptRoot"; exit 1 }

function Have($name) { [bool](Get-Command $name -ErrorAction SilentlyContinue) }

# Locate pdflatex: PATH first, then the default MiKTeX user-install location.
$pdflatex = $null
if (Have 'pdflatex') {
    $pdflatex = 'pdflatex'
} else {
    $candidate = "$env:LOCALAPPDATA\Programs\MiKTeX\miktex\bin\x64\pdflatex.exe"
    if (Test-Path $candidate) { $pdflatex = $candidate }
}

Push-Location $PSScriptRoot
try {
    if ($pdflatex) {
        Write-Host "Building with pdfLaTeX (matches Overleaf, 2 passes)..." -ForegroundColor Cyan
        & $pdflatex -interaction=nonstopmode -enable-installer resume.tex | Out-Null
        & $pdflatex -interaction=nonstopmode -enable-installer resume.tex | Out-Null
    }
    elseif (Have 'latexmk') {
        Write-Host "Building with latexmk..." -ForegroundColor Cyan
        latexmk -pdf -interaction=nonstopmode resume.tex
    }
    elseif (Have 'tectonic') {
        Write-Host "Building with tectonic (XeTeX; links may differ from Overleaf)..." -ForegroundColor Yellow
        tectonic resume.tex
    }
    else {
        Write-Error "No LaTeX engine found. Install MiKTeX (recommended) or Tectonic first."
        exit 1
    }
    Write-Host "Done -> resume.pdf" -ForegroundColor Green
}
finally {
    Pop-Location
}
