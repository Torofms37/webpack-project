const $name = document.querySelector('h1');
const $links = document.getElementById('links');
const $text = document.getElementById('description');

const data = 
{
    name: "Rubén Aragón mx",
    nickname: "torofms37",
    description: "Teacher in primary at Mexican Public Scholl & Learning Enginner at @Platzi about of #HTML #CSS #JS #NODE #REACT",
    avatar: "...",
    social: 
    [
        { 
        name: "twitter",
        url: "https://twitter.com/",
        username: "",
        },
        {
        name: "instagram",
        url: "https://instagram.com/",
        username: "",
        },
    ],
    
    links: 
    [
        {
        name: "Portafolio",
        url: "https://example.com/",
        color: "red",
        emoji: "📖",
        },
        {
        name: "Redes Sociales",
        url: "https://example.com/",
        color: "yellow",
        emoji: "💬",
        },
    ],
    footer: "Made by torofms37 🐮",
};

const main = () => {
    let name = document.createTextNode(data?.name);
    let description = document.createTextNode(data?.description);
    let links = data?.links?.map((link) => {
        return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
        <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
        href="${link.url}" target="_blank">
        ${link.name}
        </a>
        <span>${link.emoji}</span>
        </div>`;
    }).join('');
    let newItem = document.createElement('section');
    newItem.innerHTML = links;
    $text.appendChild(description)
    $links.appendChild(newItem);
    $name.appendChild(name);
}

main();