"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curryChunk = (chunkSize) => (array) => {
    return [...array].reduce((acc, each, index, src) => {
        if (!(index % chunkSize)) {
            return [...acc, src.slice(index, index + chunkSize)];
        }
        return acc;
    }, []);
};
function splitChunk(chunkSize, array) {
    return [splitChunk, curryChunk(chunkSize), array && curryChunk(chunkSize)(array)][arguments.length];
}
exports.splitChunk = splitChunk;
//# sourceMappingURL=splitChunk.js.map