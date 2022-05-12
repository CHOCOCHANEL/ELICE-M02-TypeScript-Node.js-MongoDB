let notes = [
    {
        id: 1,
        title: 'My First Note',
        content: 'I am so impressed that I found myself programming server-side language',
        author: 'CHOCO',
    },

    {
        id: 2,
        title: 'How to be 10X Engineer',
        content: 'I read somewhere that 10X Engineer is a programmer who makes productive activity 10 times more than others. I would like to be 10X Engineer someday.',
        author: 'CHOCO',
    },

    {
        id: 3,
        title: 'Tiny but Surely Happiness',
        content: 'I am thinking about yesterday night. I went Han river park with him and I was smiling all day long. I felt like always being with him everytime every moment.',
        author: 'MayFirst',
    }
];

exports.authorList = () => {
    const authors = notes.map(({author}) => author);
    return [...new Set(authors)];
}

exports.findByAuthor = (author) => {
    const notesByAuthor = notes.filter(note => note.author===author);

    if(notesByAuthor < 1) {
        throw new Error(`${author} has no note.`);
    }

    return notesByAuthor;
}