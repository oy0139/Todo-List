import { rendertask } from "./card";
import { setView } from "./viewState";

export function renderAllCards() {
    setView("all");
    rendertask();
}