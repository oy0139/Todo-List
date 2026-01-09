import { taskArray } from "./task";
import { rendertask } from "./card";

export function filterByCategory(categoryName) {
    const filtered = taskArray.filter(t =>
        t.category.trim().toLowerCase() === categoryName.toLowerCase()
    );

    console.log("Filtering for:", categoryName, "found:", filtered.length);
    rendertask(filtered);
}
