const removeDuplicates = (list: unknown[]) => [...new Set(list)];

removeDuplicates([0, 0, 2, 4, 5]) // [0,2,4,5]