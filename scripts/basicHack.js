/** @param {NS} ns */
export async function main(ns) {
    let target = ns.args[0];
    let moneyThreshold = ns.getServerMaxMoney(target) * 0.7;
    let securityThreshold = ns.getServerMinSecurityLevel(target);

    ns.nuke(target);

    while(true){
        // if security level is above threshold, weaken server
        // else if money available is less than money threshold
        // else hack the server
        if(ns.getServerSecurityLevel(target) > securityThreshold){
            await ns.weaken(target);
        } else if(ns.getServerMoneyAvailable(target) < moneyThreshold){
            await ns.grow(target);
        } else {
            await ns.hack(target);
        }
    }
}
