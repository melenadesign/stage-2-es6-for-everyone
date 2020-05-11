import { showModal } from "./modal";

export function showWinnerModal(fighter) {
  // call showModal function 
  showModal('WINNER IS', fighter.name);
}
