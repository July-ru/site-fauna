// ==========================
// Tooltip das Regiões
// ==========================

// é um recurso visual com uma caixa de texto (ao passar o mouse)

const tooltip = document.querySelector(".tooltip");

const regionNames = {
  'norte': 'Região Norte',
  'nordeste': 'Região Nordeste',
  'centro-oeste': 'Região Centro-Oeste',
  'sudeste': 'Região Sudeste',
  'sul': 'Região Sul'
};

function showTooltip(event, region) {
  if (!tooltip) return;

  const regionClass = Array.from(region.classList).find(cls => cls in regionNames);
  const regionName = regionNames[regionClass] || region.id;

  tooltip.textContent = `${regionName}`;
  tooltip.classList.add("active");
  tooltip.style.left = `${event.pageX + 15}px`;
  tooltip.style.top = `${event.pageY - 20}px`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('path[class]').forEach(region => {
    region.addEventListener("mouseover", (e) => showTooltip(e, region));
    region.addEventListener("mouseout", () => tooltip?.classList.remove("active"));
  });
});
