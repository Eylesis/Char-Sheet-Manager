import { Character } from './character';

export const CHARACTERS: Character[] =
 [
    {
        id: 1,
        name: "Amelia",
        abiScores : {
            "str" : 13,
            "dex" : 14,
            "con" : 16,
            "int" : 12,
            "wis" : 8,
            "cha" : 17
        },
        abiMods : {
            "strMod" : 1,
            "dexMod" : 2,
            "conMod" : 3,
            "intMod" : 1,
            "wisMod" : -1,
            "chaMod" : 3
        },
        savingThrows : {
            "strSave" : 0,
            "dexSave" : 1,
            "conSave" : 0,
            "intSave" : 0,
            "wisSave" : 1,
            "chaSave" : 0
        },
        skills : {
            "acrobatics" : 0,
            "animalHandling" : 0,
            "arcana" : 1,
            "deception" : 1,
            "athletics" : 0,
            "history" : 0,
            "insight" : 0,
            "intimidation" : 0,
            "investigation" : 0,
            "medicine" : 1,
            "nature" : 0,
            "perception" : 0,
            "performance" : 1,
            "persuasion" : 0,
            "religion" : 0,
            "sleightOfHand" : 0,
            "stealth" : 0,
            "survival" : 0
        },
        stats : {
            "name" : "",
            "level" : 2,
            "classLevels" : {
                "wizard" : 1,
                "fighter" : 1
            },
            "race" : "",
            "exp" : 0,
            "alignment" : "",
            "ac" : 10,
            "speed" : 30,
            "init" : 0,
            "prof" : 2,
            "curHP" : 0,
            "maxHP" : 0,
            "thp" : 0,
            "hitdice" : {
                "d6" : 1,
                "d10" : 1
            },
            "deathSuccesses" : 0,
            "deathFails" : 0
        },
        otherProfs : {
            "tools" : ["brewer's tools", "smith's tools"],
            "weapons" : ["simple"],
            "armor" : ["light"],
            "languages" : ["common", "draconic"]
        },
        personality : {
            "desc" : "",
            "portraitURL" : "",
            "traits" : "* I don't talk about the thing that torments me. I'd rather not burden others with my curse.\n* I refuse to become a victim, and I will not allow others to be victimized.",
            "ideals" : "* I'm a monster, but that doesn't mean I need to act like one.",
            "bonds" : "* I keep my thoughts and discoveries in a journal. My journal is my legacy.\n* There's evil in me, I can feel it. It must never be set free.",
            "flaws" : "* I have certain rituals that I must follow every day. I can never break them.\n* The demon inside used my voice to harm others. I have silenced myself so that it can never speak."
        },
        features : {
            "featureName" : "featureText"
        }
    },
    {
        id: 2,
        name: "Bri'te",
        abiScores : {
            "str" : 10,
            "dex" : 10,
            "con" : 10,
            "int" : 10,
            "wis" : 10,
            "cha" : 10
        },
        abiMods : {
            "strMod" : 0,
            "dexMod" : 0,
            "conMod" : 0,
            "intMod" : 0,
            "wisMod" : 0,
            "chaMod" : 0
        },
        savingThrows : {
            "strSave" : 0,
            "dexSave" : 0,
            "conSave" : 0,
            "intSave" : 0,
            "wisSave" : 0,
            "chaSave" : 0
        },
        skills : {
            "acrobatics" : 0,
            "animalHandling" : 0,
            "arcana" : 0,
            "deception" : 0,
            "athletics" : 0,
            "history" : 0,
            "insight" : 0,
            "intimidation" : 0,
            "investigation" : 0,
            "medicine" : 0,
            "nature" : 0,
            "perception" : 0,
            "performance" : 0,
            "persuasion" : 0,
            "religion" : 0,
            "sleightOfHand" : 0,
            "stealth" : 0,
            "survival" : 0
        },
        stats : {
            "name" : "",
            "level" : 2,
            "classLevels" : {
                "wizard" : 1,
                "fighter" : 1
            },
            "race" : "",
            "exp" : 0,
            "alignment" : "",
            "ac" : 10,
            "speed" : 30,
            "init" : 0,
            "prof" : 0,
            "curHP" : 0,
            "maxHP" : 0,
            "thp" : 0,
            "hitdice" : {
                "d6" : 1,
                "d10" : 1
            },
            "deathSuccesses" : 0,
            "deathFails" : 0
        },
        otherProfs : {
            "tools" : ["brewer's tools", "smith's tools"],
            "weapons" : ["simple"],
            "armor" : ["light"],
            "languages" : ["common", "draconic"]
        },
        personality : {
            "desc" : "",
            "portraitURL" : "",
            "traits" : "* I don't talk about the thing that torments me. I'd rather not burden others with my curse.\n* I refuse to become a victim, and I will not allow others to be victimized.",
            "ideals" : "* I'm a monster, but that doesn't mean I need to act like one.",
            "bonds" : "* I keep my thoughts and discoveries in a journal. My journal is my legacy.\n* There's evil in me, I can feel it. It must never be set free.",
            "flaws" : "* I have certain rituals that I must follow every day. I can never break them.\n* The demon inside used my voice to harm others. I have silenced myself so that it can never speak."
        },
        features : {
            "featureName" : "featureText"
        }
    },
    {
        id: 3,
        name: "Luma",
        abiScores : {
            "str" : 10,
            "dex" : 10,
            "con" : 10,
            "int" : 10,
            "wis" : 10,
            "cha" : 10
        },
        abiMods : {
            "strMod" : 0,
            "dexMod" : 0,
            "conMod" : 0,
            "intMod" : 0,
            "wisMod" : 0,
            "chaMod" : 0
        },
        savingThrows : {
            "strSave" : 0,
            "dexSave" : 0,
            "conSave" : 0,
            "intSave" : 0,
            "wisSave" : 0,
            "chaSave" : 0
        },
        skills : {
            "acrobatics" : 0,
            "animalHandling" : 0,
            "arcana" : 0,
            "deception" : 0,
            "athletics" : 0,
            "history" : 0,
            "insight" : 0,
            "intimidation" : 0,
            "investigation" : 0,
            "medicine" : 0,
            "nature" : 0,
            "perception" : 0,
            "performance" : 0,
            "persuasion" : 0,
            "religion" : 0,
            "sleightOfHand" : 0,
            "stealth" : 0,
            "survival" : 0
        },
        stats : {
            "name" : "",
            "level" : 2,
            "classLevels" : {
                "wizard" : 1,
                "fighter" : 1
            },
            "race" : "",
            "exp" : 0,
            "alignment" : "",
            "ac" : 10,
            "speed" : 30,
            "init" : 0,
            "prof" : 0,
            "curHP" : 0,
            "maxHP" : 0,
            "thp" : 0,
            "hitdice" : {
                "d6" : 1,
                "d10" : 1
            },
            "deathSuccesses" : 0,
            "deathFails" : 0
        },
        otherProfs : {
            "tools" : ["brewer's tools", "smith's tools"],
            "weapons" : ["simple"],
            "armor" : ["light"],
            "languages" : ["common", "draconic"]
        },
        personality : {
            "desc" : "",
            "portraitURL" : "",
            "traits" : "* I don't talk about the thing that torments me. I'd rather not burden others with my curse.\n* I refuse to become a victim, and I will not allow others to be victimized.",
            "ideals" : "* I'm a monster, but that doesn't mean I need to act like one.",
            "bonds" : "* I keep my thoughts and discoveries in a journal. My journal is my legacy.\n* There's evil in me, I can feel it. It must never be set free.",
            "flaws" : "* I have certain rituals that I must follow every day. I can never break them.\n* The demon inside used my voice to harm others. I have silenced myself so that it can never speak."
        },
        features : {
            "featureName" : "featureText"
        }
    },
    {
        id: 4,
        name: "Nikolas 'Eramir' Dawson",
        abiScores : {
            "str" : 10,
            "dex" : 10,
            "con" : 10,
            "int" : 10,
            "wis" : 10,
            "cha" : 10
        },
        abiMods : {
            "strMod" : 0,
            "dexMod" : 0,
            "conMod" : 0,
            "intMod" : 0,
            "wisMod" : 0,
            "chaMod" : 0
        },
        savingThrows : {
            "strSave" : 0,
            "dexSave" : 0,
            "conSave" : 0,
            "intSave" : 0,
            "wisSave" : 0,
            "chaSave" : 0
        },
        skills : {
            "acrobatics" : 0,
            "animalHandling" : 0,
            "arcana" : 0,
            "deception" : 0,
            "athletics" : 0,
            "history" : 0,
            "insight" : 0,
            "intimidation" : 0,
            "investigation" : 0,
            "medicine" : 0,
            "nature" : 0,
            "perception" : 0,
            "performance" : 0,
            "persuasion" : 0,
            "religion" : 0,
            "sleightOfHand" : 0,
            "stealth" : 0,
            "survival" : 0
        },
        stats : {
            "name" : "",
            "level" : 2,
            "classLevels" : {
                "wizard" : 1,
                "fighter" : 1
            },
            "race" : "",
            "exp" : 0,
            "alignment" : "",
            "ac" : 10,
            "speed" : 30,
            "init" : 0,
            "prof" : 0,
            "curHP" : 0,
            "maxHP" : 0,
            "thp" : 0,
            "hitdice" : {
                "d6" : 1,
                "d10" : 1
            },
            "deathSuccesses" : 0,
            "deathFails" : 0
        },
        otherProfs : {
            "tools" : ["brewer's tools", "smith's tools"],
            "weapons" : ["simple"],
            "armor" : ["light"],
            "languages" : ["common", "draconic"]
        },
        personality : {
            "desc" : "",
            "portraitURL" : "",
            "traits" : "* I don't talk about the thing that torments me. I'd rather not burden others with my curse.\n* I refuse to become a victim, and I will not allow others to be victimized.",
            "ideals" : "* I'm a monster, but that doesn't mean I need to act like one.",
            "bonds" : "* I keep my thoughts and discoveries in a journal. My journal is my legacy.\n* There's evil in me, I can feel it. It must never be set free.",
            "flaws" : "* I have certain rituals that I must follow every day. I can never break them.\n* The demon inside used my voice to harm others. I have silenced myself so that it can never speak."
        },
        features : {
            "featureName" : "featureText"
        }
    },
    {
        id: 5,
        name: "Alexandra Valentine",
        abiScores : {
            "str" : 10,
            "dex" : 10,
            "con" : 10,
            "int" : 10,
            "wis" : 10,
            "cha" : 10
        },
        abiMods : {
            "strMod" : 0,
            "dexMod" : 0,
            "conMod" : 0,
            "intMod" : 0,
            "wisMod" : 0,
            "chaMod" : 0
        },
        savingThrows : {
            "strSave" : 0,
            "dexSave" : 0,
            "conSave" : 0,
            "intSave" : 0,
            "wisSave" : 0,
            "chaSave" : 0
        },
        skills : {
            "acrobatics" : 0,
            "animalHandling" : 0,
            "arcana" : 0,
            "deception" : 0,
            "athletics" : 0,
            "history" : 0,
            "insight" : 0,
            "intimidation" : 0,
            "investigation" : 0,
            "medicine" : 0,
            "nature" : 0,
            "perception" : 0,
            "performance" : 0,
            "persuasion" : 0,
            "religion" : 0,
            "sleightOfHand" : 0,
            "stealth" : 0,
            "survival" : 0
        },
        stats : {
            "name" : "",
            "level" : 2,
            "classLevels" : {
                "wizard" : 1,
                "fighter" : 1
            },
            "race" : "",
            "exp" : 0,
            "alignment" : "",
            "ac" : 10,
            "speed" : 30,
            "init" : 0,
            "prof" : 0,
            "curHP" : 0,
            "maxHP" : 0,
            "thp" : 0,
            "hitdice" : {
                "d6" : 1,
                "d10" : 1
            },
            "deathSuccesses" : 0,
            "deathFails" : 0
        },
        otherProfs : {
            "tools" : ["brewer's tools", "smith's tools"],
            "weapons" : ["simple"],
            "armor" : ["light"],
            "languages" : ["common", "draconic"]
        },
        personality : {
            "desc" : "",
            "portraitURL" : "",
            "traits" : "* I don't talk about the thing that torments me. I'd rather not burden others with my curse.\n* I refuse to become a victim, and I will not allow others to be victimized.",
            "ideals" : "* I'm a monster, but that doesn't mean I need to act like one.",
            "bonds" : "* I keep my thoughts and discoveries in a journal. My journal is my legacy.\n* There's evil in me, I can feel it. It must never be set free.",
            "flaws" : "* I have certain rituals that I must follow every day. I can never break them.\n* The demon inside used my voice to harm others. I have silenced myself so that it can never speak."
        },
        features : {
            "featureName" : "featureText"
        }
    },
    {
        id: 6,
        name: "Artemis Storm",
        abiScores : {
            "str" : 10,
            "dex" : 10,
            "con" : 10,
            "int" : 10,
            "wis" : 10,
            "cha" : 10
        },
        abiMods : {
            "strMod" : 0,
            "dexMod" : 0,
            "conMod" : 0,
            "intMod" : 0,
            "wisMod" : 0,
            "chaMod" : 0
        },
        savingThrows : {
            "strSave" : 0,
            "dexSave" : 0,
            "conSave" : 0,
            "intSave" : 0,
            "wisSave" : 0,
            "chaSave" : 0
        },
        skills : {
            "acrobatics" : 0,
            "animalHandling" : 0,
            "arcana" : 0,
            "deception" : 0,
            "athletics" : 0,
            "history" : 0,
            "insight" : 0,
            "intimidation" : 0,
            "investigation" : 0,
            "medicine" : 0,
            "nature" : 0,
            "perception" : 0,
            "performance" : 0,
            "persuasion" : 0,
            "religion" : 0,
            "sleightOfHand" : 0,
            "stealth" : 0,
            "survival" : 0
        },
        stats : {
            "name" : "",
            "level" : 2,
            "classLevels" : {
                "wizard" : 1,
                "fighter" : 1
            },
            "race" : "",
            "exp" : 0,
            "alignment" : "",
            "ac" : 10,
            "speed" : 30,
            "init" : 0,
            "prof" : 0,
            "curHP" : 0,
            "maxHP" : 0,
            "thp" : 0,
            "hitdice" : {
                "d6" : 1,
                "d10" : 1
            },
            "deathSuccesses" : 0,
            "deathFails" : 0
        },
        otherProfs : {
            "tools" : ["brewer's tools", "smith's tools"],
            "weapons" : ["simple"],
            "armor" : ["light"],
            "languages" : ["common", "draconic"]
        },
        personality : {
            "desc" : "",
            "portraitURL" : "",
            "traits" : "* I don't talk about the thing that torments me. I'd rather not burden others with my curse.\n* I refuse to become a victim, and I will not allow others to be victimized.",
            "ideals" : "* I'm a monster, but that doesn't mean I need to act like one.",
            "bonds" : "* I keep my thoughts and discoveries in a journal. My journal is my legacy.\n* There's evil in me, I can feel it. It must never be set free.",
            "flaws" : "* I have certain rituals that I must follow every day. I can never break them.\n* The demon inside used my voice to harm others. I have silenced myself so that it can never speak."
        },
        features : {
            "featureName" : "featureText"
        }
    },
    {
        id: 7,
        name: "Terror",
        abiScores : {
            "str" : 10,
            "dex" : 10,
            "con" : 10,
            "int" : 10,
            "wis" : 10,
            "cha" : 10
        },
        abiMods : {
            "strMod" : 0,
            "dexMod" : 0,
            "conMod" : 0,
            "intMod" : 0,
            "wisMod" : 0,
            "chaMod" : 0
        },
        savingThrows : {
            "strSave" : 0,
            "dexSave" : 0,
            "conSave" : 0,
            "intSave" : 0,
            "wisSave" : 0,
            "chaSave" : 0
        },
        skills : {
            "acrobatics" : 0,
            "animalHandling" : 0,
            "arcana" : 0,
            "deception" : 0,
            "athletics" : 0,
            "history" : 0,
            "insight" : 0,
            "intimidation" : 0,
            "investigation" : 0,
            "medicine" : 0,
            "nature" : 0,
            "perception" : 0,
            "performance" : 0,
            "persuasion" : 0,
            "religion" : 0,
            "sleightOfHand" : 0,
            "stealth" : 0,
            "survival" : 0
        },
        stats : {
            "name" : "",
            "level" : 2,
            "classLevels" : {
                "wizard" : 1,
                "fighter" : 1
            },
            "race" : "",
            "exp" : 0,
            "alignment" : "",
            "ac" : 10,
            "speed" : 30,
            "init" : 0,
            "prof" : 0,
            "curHP" : 0,
            "maxHP" : 0,
            "thp" : 0,
            "hitdice" : {
                "d6" : 1,
                "d10" : 1
            },
            "deathSuccesses" : 0,
            "deathFails" : 0
        },
        otherProfs : {
            "tools" : ["brewer's tools", "smith's tools"],
            "weapons" : ["simple"],
            "armor" : ["light"],
            "languages" : ["common", "draconic"]
        },
        personality : {
            "desc" : "",
            "portraitURL" : "",
            "traits" : "* I don't talk about the thing that torments me. I'd rather not burden others with my curse.\n* I refuse to become a victim, and I will not allow others to be victimized.",
            "ideals" : "* I'm a monster, but that doesn't mean I need to act like one.",
            "bonds" : "* I keep my thoughts and discoveries in a journal. My journal is my legacy.\n* There's evil in me, I can feel it. It must never be set free.",
            "flaws" : "* I have certain rituals that I must follow every day. I can never break them.\n* The demon inside used my voice to harm others. I have silenced myself so that it can never speak."
        },
        features : {
            "featureName" : "featureText"
        }
    }
 ]