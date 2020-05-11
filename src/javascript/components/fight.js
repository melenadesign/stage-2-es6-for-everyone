import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over
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

export function getDamage(attacker, defender) {
  // return damage
  let damageVal = getHitPower(attacker) - getBlockPower(defender);
  console.log('damageVal: ',damageVal); ///debug
  return damageVal;
}

export function getHitPower(fighter) {
  // return hit power
  let criticalHitChance = Math.random()+1;
  let hitPower = fighter.attack * criticalHitChance;
  console.log('hitPower: ',power); //debug
  return hitPower;
}

export function getBlockPower(fighter) {
  // return block power
  let dodgeChance = Math.random()+1;
  let blockPower = fighter.defense * dodgeChance;
  console.log('blockPower: ',blockPower); //debug
  return blockPower;
}
