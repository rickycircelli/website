# Build resume.tex -> resume.pdf
# Usage: powershell -ExecutionPolicy Bypass -File .\build-resume.ps1
# Auto-detects an installed LaTeX engine (tectonic, latexmk, or pdflatex).

$ErrorActionPreference = 'Stop'
$tex = Join-Path $PSScriptRoot 'resume.tex'

if (-not (Test-Path $tex)) { Write-Error "resume.tex not found in $PSScriptRoot"; exit 1 }

function Have($name) { [bool](Get-Command $name -ErrorAction SilentlyContinue) }

Push-Location $PSScriptRoot
try {
    if (Have 'tectonic') {
        Write-Host "Building with tectonic..." -ForegroundColor Cyan
        tectonic resume.tex
    }
    elseif (Have 'latexmk') {
        Write-Host "Building with latexmk..." -ForegroundColor Cyan
        latexmk -pdf -interaction=nonstopmode resume.tex
    }
    elseif (Have 'pdflatex') {
        Write-Host "Building with pdflatex (2 passes)..." -ForegroundColor Cyan
        pdflatex -interaction=nonstopmode resume.tex
        pdflatex -interaction=nonstopmode resume.tex
    }
    else {
        Write-Error "No LaTeX engine found. Install MiKTeX or Tectonic first."
        exit 1
    }
    Write-Host "Done -> resume.pdf" -ForegroundColor Green
}
finally {
    Pop-Location
}
