let dictionary = {
    "actor": "actor",
    "actress": "actress",
    "animal": "animal",
    "answer": "answer",
    "apple": "apple",
    "april": "April",
    "artist": "artist",
    "august": "August",
    "aunt": "aunt",
    "author": "author",
    "authoress": "authoress",
    "bear": "bear",
    "beef": "beef",
    "beer": "beer",
    "bird": "bird",
    "black": "black",
    "blue": "blue",
    "book": "book",
    "boss": "boss",
    "boy": "boy",
    "bread": "bread",
    "breakfast": "breakfast",
    "brother": "brother",
    "brown": "brown",
    "captain": "captain",
    "captainess": "captainess",
    "career": "career",
    "cat": "cat",
    "cheese": "cheese",
    "chicken": "chicken",
    "child": "child",
    "clothes": "clothes",
    "coat": "coat",
    "coffee": "coffee",
    "crab": "crab",
    "dad": "dad",
    "daughter": "daughter",
    "day": "day",
    "december": "December",
    "dinner": "dinner",
    "director": "director",
    "directress": "directress",
    "dog": "dog",
    "dress": "dress",
    "duck": "duck",
    "egg": "egg",
    "elephant": "elephant",
    "engineer": "engineer",
    "english": "English",
    "fall": "fall",
    "family": "family",
    "father": "father",
    "february": "February",
    "fish": "fish",
    "food": "food",
    "fruit": "fruit",
    "girl": "girl",
    "grandfather": "grandfather",
    "grandmother": "grandmother",
    "gray": "gray",
    "green": "green",
    "guard": "guard",
    "hat": "hat",
    "horse": "horse",
    "hour": "hour",
    "husband": "husband",
    "january": "January",
    "job": "job",
    "juice": "juice",
    "july": "July",
    "june": "June",
    "lawyer": "lawyer",
    "lemon": "lemon",
    "lunch": "lunch",
    "man": "man",
    "march": "March",
    "marriage": "marriage",
    "may": "May",
    "meal": "meal",
    "meat": "meat",
    "menu": "menu",
    "milk": "milk",
    "minute": "minute",
    "mom": "mom",
    "month": "month",
    "morning": "morning",
    "mother": "mother",
    "mouse": "mouse",
    "newspaper": "newspaper",
    "night": "night",
    "november": "November",
    "october": "October",
    "officer": "officer",
    "orange": "orange",
    "pants": "pants",
    "parent": "parent",
    "pasta": "pasta",
    "period": "period",
    "pink": "pink",
    "plate": "plate",
    "pork": "pork",
    "profession": "profession",
    "professional": "professional",
    "purple": "purple",
    "question": "question",
    "red": "red",
    "rice": "rice",
    "salt": "salt",
    "sandwich": "sandwich",
    "second": "second",
    "september": "September",
    "shirt": "shirt",
    "shoe": "shoe",
    "sibling": "sibling",
    "sister": "sister",
    "skirt": "skirt",
    "son": "son",
    "soup": "soup",
    "spider": "spider",
    "spring": "spring",
    "staff": "staff",
    "strawberry": "strawberry",
    "sugar": "sugar",
    "suit": "suit",
    "summer": "summer",
    "tea": "tea",
    "time": "time",
    "tomato": "tomato",
    "turtle": "turtle",
    "uncle": "uncle",
    "vegetarian": "vegetarian",
    "waiter": "waiter",
    "waitress": "waitress",
    "water": "water",
    "white": "white",
    "wife": "wife",
    "wine": "wine",
    "winter": "winter",
    "woman": "woman",
    "work": "work",
    "worker": "worker",
    "year": "year",
    "yellow": "yellow"
};

let params = new URLSearchParams(document.location.search);
let query = params.get("query");

let found = false;
for (let [key, value] of Object.entries(dictionary)) {
    if (value.includes(query)) {
        let link = document.createElement("a");
        link.setAttribute("href", key);
        link.appendChild(document.createTextNode(value));

        let paragraph = document.createElement("p");
        paragraph.appendChild(link);

        document.getElementById("results").appendChild(paragraph);
        found = true;
    }
}

if (!found) {
    let paragraph = document.createElement("p");
    paragraph.appendChild(document.createTextNode("Nie znaleziono niczego."));

    document.getElementById("results").appendChild(paragraph);
}