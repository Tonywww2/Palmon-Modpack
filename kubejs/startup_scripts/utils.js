// priority: 100

const $AttributeModifier = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier")
const $UUID = Java.loadClass("java.util.UUID")
const $JavaString = Java.loadClass("java.lang.String")

// function hashCode(string) {
//     var hash = 0;
//     for (var i = 0; i < string.length; i++) {
//         var code = string.charCodeAt(i);
//         hash = ((hash << 5) - hash) + code;
//         hash = hash & hash; // Convert to 32bit integer
//     }
//     return hash;
// }
