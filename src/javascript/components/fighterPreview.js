import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });  

  // todo: show fighter info (image, name, health, etc.)  

  function createProp(fighter, prop) {
    const propElement = createElement({ tagName: 'span', className: prop });
    propElement.innerText = `${prop} : ${fighter[prop]} \n`;
  
    return propElement;
  }
  if(!fighter) {
    return fighterElement;
  }
  const fighterBlockInfo = createElement({ tagName: 'div', className: 'fighter-preview__info-block' });
  const fighterImg = createFighterImage(fighter);
  const fighterName = createProp(fighter, 'name');
  const fighterHealth = createProp(fighter, 'health');
  const fighterAttack = createProp(fighter, 'attack');
  const fighterDefense = createProp(fighter, 'defense');//update naive solution later

  fighterBlockInfo.append(fighterName, fighterHealth, fighterAttack, fighterDefense);
  fighterElement.append(fighterImg, fighterBlockInfo);
  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = { 
    src: source, 
    title: name,
    alt: name 
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}
