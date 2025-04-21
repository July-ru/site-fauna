// Configuração do Tooltip
const tooltip = document.querySelector(".tooltip");

// Nomes das regiões (pode ser expandido)
const regionNames = {
    'norte': 'Região Norte',
    'nordeste': 'Região Nordeste',
    'centro-oeste': 'Região Centro-Oeste',
    'sudeste': 'Região Sudeste',
    'sul': 'Região Sul'
};

// Função para atualizar o tooltip
function showTooltip(event, region) {
    if (!tooltip) return; // Se não houver tooltip, sai da função
    
    const regionClass = Array.from(region.classList).find(cls => cls in regionNames);
    const regionName = regionNames[regionClass] || region.id;
    
    tooltip.textContent = regionName;
    tooltip.classList.add('active');
    tooltip.style.left = `${event.clientX + 15}px`;
    tooltip.style.top = `${event.clientY - 20}px`;
}

// Adiciona eventos a cada região
document.querySelectorAll('g.regiao').forEach(region => {
    // Mouse/touch
    region.addEventListener('mouseover', (e) => showTooltip(e, region));
    region.addEventListener('mouseout', () => tooltip?.classList.remove('active'));
});