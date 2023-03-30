function introduction(name){
    const string = `Hi, my name is ${name}.`;
    return string;
}

function introductionWithLanguage(name, language){
    const phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return phrase;
}

const result = introductionWithLanguage("Hannah", "JavaScript");

console.log(result);

function introductionWithLanguageOptional(name, language = "JavaScript"){
    const phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return phrase;
}

const phrase = introductionWithLanguageOptional("Hannah")

console.log(result);