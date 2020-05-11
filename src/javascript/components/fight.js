import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    const fighterOneStatus = {
      healthStatus: firstFighter.health,
      isAttacker: false,
      isDefender: false
    }
    const fighterTwoStatus = {
      healthStatus: secondFighter.health,
      isAttacker: false,
      isDefender: false
    }

    let attackDamage = 0;

    document.addEventListener('keyup', e => {
      switch (e.code) {
        case controls.PlayerOneAttack:
          if(fighterOneStatus.isAttacker) {
            break;
          }
          attackDamage = getDamage(secondFighter, firstFighter);
          break;
        case controls.PlayerTwoAttack:
          if(fighterTwoStatus.isAttacker) {
            break;
          }
        case controls.PlayerOneBlock:
          if(fighterOneStatus.isDefender) {
            break;
          }
        case controls.PlayerTwoBlock:
          if(fighterTwoStatus.isDefender) {
            break;
          }
  

     
      }



    })


    while(firstFighter.health > 0 && secondFighter.health) {


      if (firstFighter.health <= 0) {
        console.log("secondFighter is a winner");
      }
      else if (secondFighter.health <= 0) {
        console.log("firstFighter is a winner");
      }

    }
  });
}

function updateHealthStatus(position, {health}, {healthStatus}) {
  document.getElementById(`${position}-fighter-indicator`).style.width = `${health * 100 / healthStatus}%`;
}

let randomFactor = Math.random()+1;

export function getDamage(attacker, defender) {
  let damageVal = getHitPower(attacker) - getBlockPower(defender);
  console.log('damageVal: ',damageVal); ///debug
  return damageVal <=0 ? 0: damageVal;
}

export function getHitPower(fighter) {
  let hitPower = fighter.attack * randomFactor;
  console.log('hitPower: ',power); //debug
  return hitPower;
}

export function getBlockPower(fighter) {
  let blockPower = fighter.defense * randomFactor;  
  console.log('blockPower: ',blockPower); //debug
  return blockPower;
}
