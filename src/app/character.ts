export class Character {
    id: number;
    name: string;
    abiScores : {
        "str" : number,
        "dex" : number,
        "con" : number,
        "int" : number,
        "wis" : number,
        "cha" : number
    };
    abiMods : {
        "strMod" : number,
        "dexMod" : number,
        "conMod" : number,
        "intMod" : number,
        "wisMod" : number,
        "chaMod" : number
    };
    savingThrows : {
        "strSave" : number,
        "dexSave" : number,
        "conSave" : number,
        "intSave" : number,
        "wisSave" : number,
        "chaSave" : number
    };
    skills : {
        "acrobatics" : number,
        "animalHandling" : number,
        "arcana" : number,
        "deception" : number,
        "athletics" : number,
        "history" : number,
        "insight" : number,
        "intimidation" : number,
        "investigation" : number,
        "medicine" : number,
        "nature" : number,
        "perception" : number,
        "performance" : number,
        "persuasion" : number,
        "religion" :number,
        "sleightOfHand" : number,
        "stealth" : number,
        "survival" : number
    };
    stats : {
        "name" : string,
        "level" : number,
        "classLevels" : {
            "wizard" : number,
            "fighter" : number
        },
        "race" : string,
        "exp" : number,
        "alignment" : string,
        "ac" : number,
        "speed" : number,
        "init" : number,
        "prof" : number,
        "curHP" : number,
        "maxHP" : number,
        "thp" : number,
        "hitdice" : {
            "d6" : number,
            "d10" : number
        },
        "deathSuccesses" : number,
        "deathFails" : number
    };
    otherProfs : {
        "tools" : string[],
        "weapons" : string[],
        "armor" : string[],
        "languages" : string[]
    };
    personality : {
        "desc" : string,
        "portraitURL" : string,
        "traits" : string,
        "ideals" : string,
        "bonds" : string,
        "flaws" : string
    };
    features : {
        "featureName" : string
    };
}