const nouns = [
    "bug", "coffee", "keyboard", "developer", "error", "function", "code", "server", 
    "exception", "syntax", "loop", "database", "debugger", "algorithm", "compiler", 
    "variable", "runtime", "stack", "overflow", "cache", "commit", "merge", "repository", 
    "pull request", "framework", "library", "dependency", "module", "interface", "object"
];

const verbs = [
    "crashes", "debugs", "compiles", "executes", "tests", "commits", "merges", "deploys", 
    "refactors", "optimizes", "queries", "fails", "loops", "prints", "throws", 
    "logs", "breaks", "overloads", "hooks", "builds", "runs", "integrates", 
    "installs", "configures", "initializes", "encrypts", "decrypts", "formats", 
    "parses", "migrates"
];

const adjectives = [
    "buggy", "deprecated", "unhandled", "recursive", "null", "infinite", "segfault", 
    "faulty", "corrupt", "undocumented", "hacked", "malicious", "legacy", 
    "obfuscated", "deprecated", "insecure", "leaky", "unoptimized", "memory-hungry", 
    "unreliable", "recursive", "nested", "unstable", "syntactic", "semantic", 
    "mysterious", "crucial", "fatal", "glitchy", "crashing"
];

const adverbs = [
    "unexpectedly", "silently", "cryptically", "endlessly", "fatally", "randomly", 
    "repeatedly", "incessantly", "mysteriously", "ironically", "mercilessly", 
    "swiftly", "lazily", "reluctantly", "recklessly", "accidentally", "sporadically", 
    "inevitably", "deliberately", "systematically", "painfully", "comically", 
    "hilariously", "awkwardly", "tragically", "gracefully", "hazardously", 
    "clumsily", "frantically", "blindly"
];

const sentenceStructures = [
    "The [adjective] [noun] [adverb] [verb] the [adjective] [noun].",
    "A [noun] [adverb] [verb] after the [adjective] [noun].",
    "Every [adjective] [noun] loves to [verb] when the [noun] is [adjective].",
    "The [adjective] [noun] [verb] [adverb] under the [adjective] [noun].",
    "A [noun] [verb] [adverb] because it is [adjective].",
    "The [noun] [adverb] [verb] with a [adjective] [noun].",
    "In the [adjective] codebase, the [noun] [verb] [adverb].",
    "She [verb] the [adjective] [noun] [adverb] in the evening.",
    "The [noun] [adverb] [verb] through the [adjective] code.",
    "A [adjective] [noun] can [verb] [adverb] in a [noun].",
    "At the [adjective] meeting, the [noun] [verb] [adverb].",
    "The [adjective] [noun] decided to [verb] [adverb].",
    "After the [noun] [verb], it felt very [adjective] and [adverb].",
    "They [adverb] [verb] the [adjective] [noun] together.",
    "A [adjective] [noun] was [adverb] [verb] by the server.",
    "The [noun] [verb] [adverb] when it is [adjective] outside.",
    "If a [adjective] [noun] [verb], it must be [adverb].",
    "The [adjective] [noun] [adverb] [verb] in the repository.",
    "My [adjective] [noun] [verb] [adverb] during the sprint.",
    "The [adjective] [noun] [verb] with a [adjective] [noun].",
    "The [adjective] [noun] [verb] very [adverb] in the morning.",
    "An [adjective] [noun] can [verb] [adverb] over the [noun].",
    "At the [adjective] hackathon, the [noun] [verb] [adverb].",
    "The [adjective] [noun] decided to [verb] [adverb].",
    "The [noun] [verb] [adverb] while feeling very [adjective].",
    "The [noun] [verb] [adverb] when the code is [adjective].",
    "The [adjective] [noun] was [adverb] [verb] by the deadline.",
    "A [adjective] [noun] [adverb] [verb] with joy.",
    "The [noun] [verb] [adverb] because it is [adjective].",
    "The [adjective] [noun] [verb] [adverb] on a [adjective] day."
];


// generate number between 0 and length of passed object
function random(object) {
    return Math.floor(Math.random() * object.length);
};

// replace specific placeholders with random word from passed word list (array)
function replacePlaceholders(sentence, placeholders, wordList) {
    while (sentence.includes(placeholders)) {
        sentence = sentence.replace(placeholders, wordList[random(wordList)]);
    }
    return sentence;
}

// random sentence builder
function getSentence() {
    let sentence = sentenceStructures[random(sentenceStructures)];
    sentence = replacePlaceholders(sentence, '[noun]', nouns);
    sentence = replacePlaceholders(sentence, '[verb]', verbs);
    sentence = replacePlaceholders(sentence, '[adjective]', adjectives);
    sentence = replacePlaceholders(sentence, '[adverb]', adverbs);

    return sentence;
};

 document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sentence').innerHTML = getSentence();
            // console.log('Nouns:', nouns);
            // console.log('Verbs:', verbs);
            // console.log('Adjectives:', adjectives);
            // console.log('Adverbs:', adverbs);
            
            console.log(getSentence());
});
