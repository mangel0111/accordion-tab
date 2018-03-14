const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
anim id est laborum.`;

const sedUtPerspiciatis = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae 
consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`;

const sections = [
{   
    key: '1',
    title: 'Heading 1',
    texts: [loremIpsum, sedUtPerspiciatis]
},
{
    key: '2',
    title: 'Heading 2',
    texts: [sedUtPerspiciatis, loremIpsum]
},
{
    key: '3',
    title: 'Heading 3',
    texts: [loremIpsum, sedUtPerspiciatis, loremIpsum]
},
{
    key: '4',
    title: 'Heading 4',
    texts: [sedUtPerspiciatis, loremIpsum, sedUtPerspiciatis]
}
];

const inputs = document.getElementsByName('tabs');
inputs.forEach(input => input.onclick = (e) => setDescription(e.target.id.replace('tab','')))

haveChildNode = ({ parent, childType }) =>  Array.from(parent.children).find(child => child.localName === childType);

createHeader = ({ contentTab, section }) => {
    const haveHeader = haveChildNode({ parent: contentTab, childType: 'h3'});
    if(!haveHeader) {
        const header = document.createElement("h3");
        header.innerHTML= section.title;
        contentTab.appendChild(header);
    }
}

createDescription = ({ contentTab, section }) => {
    const haveDescription = haveChildNode({ parent: contentTab, childType: 'article'});
    if(!haveDescription) {
        const description = document.createElement('article');
        section.texts.forEach(text => {
            const paragraph = document.createElement('p');
            paragraph.innerHTML = text;
            description.appendChild(paragraph);
        });
        contentTab.appendChild(description);
    }
}

setDescription = (index) => {
    const contentTab = document.getElementById(`tab-content${index}`);
    const section = sections.find(section => section.key === index);

    if(section) {
       createHeader({ contentTab, section });
       createDescription({ contentTab, section });
    }
}

setDescription('1');
