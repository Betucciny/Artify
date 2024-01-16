import { ImageSourcePropType } from "react-native";
import * as FileSystem from 'expo-file-system';

type Style = {
    name: string;
    images: ImageSourcePropType[];
    description: string;
}

export const data_styles: Style[] = [
    {
        name: "Academic Art",
        images: [
            require("@assets/Styles/Academic_Art/0.jpg"),
            require("@assets/Styles/Academic_Art/1.jpg"),
            require("@assets/Styles/Academic_Art/2.jpg"),
            require("@assets/Styles/Academic_Art/3.jpg"),
            require("@assets/Styles/Academic_Art/4.jpg"),
        ],
        description: "Academic art, or academicism or academism, is a style of painting, sculpture, and architecture produced under the influence of European academies of art. Specifically, academic art is the art and artists influenced by the standards of the French Académie des Beaux-Arts, which practiced under the movements of Neoclassicism and Romanticism."
    },
    {
        name: "Art Nouveau",
        images: [
            require("@assets/Styles/Art_Nouveau/0.jpg"),
            require("@assets/Styles/Art_Nouveau/1.jpg"),
            require("@assets/Styles/Art_Nouveau/2.jpg"),
            require("@assets/Styles/Art_Nouveau/3.jpg"),
            require("@assets/Styles/Art_Nouveau/4.jpg"),
        ],
        description: "Art Nouveau is an international style of art, architecture and applied art, especially the decorative arts, known in different languages by different names: Jugendstil in German, Stile Liberty in Italian, Modernisme català in Catalan, etc. In English it is also known as the Modern Style (British Art Nouveau style)."
    },
    {
        name: "Baroque",
        images: [
            require("@assets/Styles/Baroque/0.jpg"),
            require("@assets/Styles/Baroque/1.jpg"),
            require("@assets/Styles/Baroque/2.jpg"),
            require("@assets/Styles/Baroque/3.jpg"),
            require("@assets/Styles/Baroque/4.jpg"),
        ],
        description: "The Baroque is a highly ornate and often extravagant style of architecture, music, dance, painting, sculpture and other arts that flourished in Europe from the early 17th until the mid-18th century. It followed the Renaissance style and preceded the Rococo (in the past often referred to as \"late Baroque\") and Neoclassical styles."
    },
    {
        name: "Expressionism",
        images: [
            require("@assets/Styles/Expressionism/0.jpg"),
            require("@assets/Styles/Expressionism/1.jpg"),
            require("@assets/Styles/Expressionism/2.jpg"),
            require("@assets/Styles/Expressionism/3.jpg"),
            require("@assets/Styles/Expressionism/4.jpg"),
        ],
        description: "Expressionism is a modernist movement, initially in poetry and painting, originating in Germany at the beginning of the 20th century. Its typical trait is to present the world solely from a subjective perspective, distorting it radically for emotional effect in order to evoke moods or ideas. Expressionist artists have sought to express the meaning of emotional experience rather than physical reality."
    },
    {
        name: "Japanaese Art",
        images: [
            require("@assets/Styles/Japanese_Art/0.jpg"),
            require("@assets/Styles/Japanese_Art/1.jpg"),
            require("@assets/Styles/Japanese_Art/2.jpg"),
            require("@assets/Styles/Japanese_Art/3.jpg"),
            require("@assets/Styles/Japanese_Art/4.jpg"),
        ],
        description: "Japanese art covers a wide range of art styles and media, including ancient pottery, sculpture, ink painting and calligraphy on silk and paper, ukiyo-e paintings and woodblock prints, ceramics, origami, and more recently manga which is modern Japanese cartoons and comics along with a myriad of other types."
    },
    {
        name: "Neo Classicism",
        images: [
            require("@assets/Styles/Neoclassicism/0.jpg"),
            require("@assets/Styles/Neoclassicism/1.jpg"),
            require("@assets/Styles/Neoclassicism/2.jpg"),
            require("@assets/Styles/Neoclassicism/3.jpg"),
            require("@assets/Styles/Neoclassicism/4.jpg"),
        ],
        description: "Neoclassicism (also spelled Neo-classicism; from Greek νέος nèos, \"new\" and Greek κλασικός klasikόs, \"of the highest rank\") was a Western cultural movement in the decorative and visual arts, literature, theatre, music, and architecture that drew inspiration from the art and culture of classical antiquity."
    },
    {
        name: "Primitivism",
        images: [
            require("@assets/Styles/Primitivism/0.jpg"),
            require("@assets/Styles/Primitivism/1.jpg"),
            require("@assets/Styles/Primitivism/2.jpg"),
            require("@assets/Styles/Primitivism/3.jpg"),
            require("@assets/Styles/Primitivism/4.jpg"),
        ],
        description: "Primitivism is a mode of aesthetic idealization that either emulates or aspires to recreate \"primitive\" experience. In Western art, primitivism typically has borrowed from non-Western or prehistoric people. "
    },
    {
        name: "Realism",
        images: [
            require("@assets/Styles/Realism/0.jpg"),
            require("@assets/Styles/Realism/1.jpg"),
            require("@assets/Styles/Realism/2.jpg"),
            require("@assets/Styles/Realism/3.jpg"),
            require("@assets/Styles/Realism/4.jpg"),
        ],
        description: "Realism, sometimes called naturalism, in the arts is generally the attempt to represent subject matter truthfully, without artificiality and avoiding speculative fiction and supernatural elements."
    },
    {
        name: "Renaissance",
        images: [
            require("@assets/Styles/Renaissance/0.jpg"),
            require("@assets/Styles/Renaissance/1.jpg"),
            require("@assets/Styles/Renaissance/2.jpg"),
            require("@assets/Styles/Renaissance/3.jpg"),
            require("@assets/Styles/Renaissance/4.jpg"),
        ],
        description: "The Renaissance is a period in European history, covering the span between the 14th and 17th centuries and marking the transition from the Middle Ages to modernity."
    },
    {
        name: "Rococo",
        images: [
            require("@assets/Styles/Rococo/0.jpg"),
            require("@assets/Styles/Rococo/1.jpg"),
            require("@assets/Styles/Rococo/2.jpg"),
            require("@assets/Styles/Rococo/3.jpg"),
            require("@assets/Styles/Rococo/4.jpg"),
        ],
        description: "Rococo, less commonly roccoco or Late Baroque, is an exceptionally ornamental and theatrical style of architecture, art and decoration which combines asymmetry, scrolling curves, gilding, white and pastel colors, sculpted molding, and trompe l'oeil frescoes."
    },
    {
        name: "Romanticism",
        images: [
            require("@assets/Styles/Romanticism/0.jpg"),
            require("@assets/Styles/Romanticism/1.jpg"),
            require("@assets/Styles/Romanticism/2.jpg"),
            require("@assets/Styles/Romanticism/3.jpg"),
            require("@assets/Styles/Romanticism/4.jpg"),
        ],
        description: "Romanticism (also known as the Romantic era) was an artistic, literary, musical and intellectual movement that originated in Europe towards the end of the 18th century."
    },
    {
        name: "Symbolism",
        images: [
            require("@assets/Styles/Symbolism/0.jpg"),
            require("@assets/Styles/Symbolism/1.jpg"),
            require("@assets/Styles/Symbolism/2.jpg"),
            require("@assets/Styles/Symbolism/3.jpg"),
            require("@assets/Styles/Symbolism/4.jpg"),
        ],
        description: "Symbolism was a late nineteenth-century art movement of French, Russian and Belgian origin in poetry and other arts seeking to represent absolute truths symbolically through metaphorical images."    
    },
    {
        name: "Western Medieval Art",
        images: [
            require("@assets/Styles/Western_Medieval/0.jpg"),
            require("@assets/Styles/Western_Medieval/1.jpg"),
            require("@assets/Styles/Western_Medieval/2.jpg"),
            require("@assets/Styles/Western_Medieval/3.jpg"),
            require("@assets/Styles/Western_Medieval/4.jpg"),
        ],
        description: "The medieval art of the Western world covers a vast scope of time and place, over 1000 years of art in Europe, and at times the Middle East and North Africa. "    
    }
];

type StyleUrl = {
    name: string;
    images: string[];
}

export const data_styles_internet: StyleUrl[] = [
    {
        name: "Academic_Art",
        images: [
            "https://storage.googleapis.com/artifym/Styles/Academic_Art/0.jpg",
            "https://storage.googleapis.com/artifym/Styles/Academic_Art/1.jpg",
            "https://storage.googleapis.com/artifym/Styles/Academic_Art/2.jpg",
            "https://storage.googleapis.com/artifym/Styles/Academic_Art/3.jpg",
            "https://storage.googleapis.com/artifym/Styles/Academic_Art/4.jpg",
        ],
    },
    {
        name: "Art_Nouveau",
        images: [
            "https://storage.googleapis.com/artifym/Styles/Art_Nouveau/0.jpg",
            "https://storage.googleapis.com/artifym/Styles/Art_Nouveau/1.jpg",
            "https://storage.googleapis.com/artifym/Styles/Art_Nouveau/2.jpg",
            "https://storage.googleapis.com/artifym/Styles/Art_Nouveau/3.jpg",
            "https://storage.googleapis.com/artifym/Styles/Art_Nouveau/4.jpg",
        ],
    },
    {
        name: "Baroque",
        images: [
            "https://storage.googleapis.com/artifym/Styles/Baroque/0.jpg",
            "https://storage.googleapis.com/artifym/Styles/Baroque/1.jpg",
            "https://storage.googleapis.com/artifym/Styles/Baroque/2.jpg",
            "https://storage.googleapis.com/artifym/Styles/Baroque/3.jpg",
            "https://storage.googleapis.com/artifym/Styles/Baroque/4.jpg",
        ],
    },
    {
        name: "Expressionism",
        images: [
            "https://storage.googleapis.com/artifym/Styles/Expressionism/0.jpg",
            "https://storage.googleapis.com/artifym/Styles/Expressionism/1.jpg",
            "https://storage.googleapis.com/artifym/Styles/Expressionism/2.jpg",
            "https://storage.googleapis.com/artifym/Styles/Expressionism/3.jpg",
            "https://storage.googleapis.com/artifym/Styles/Expressionism/4.jpg",
        ],
    },
    {
        name: "Japanese_Art",
        images: [
            "https://storage.googleapis.com/artifym/Styles/Japanese_Art/0.jpg",
            "https://storage.googleapis.com/artifym/Styles/Japanese_Art/1.jpg",
            "https://storage.googleapis.com/artifym/Styles/Japanese_Art/2.jpg",
            "https://storage.googleapis.com/artifym/Styles/Japanese_Art/3.jpg",
            "https://storage.googleapis.com/artifym/Styles/Japanese_Art/4.jpg",
        ],
    },
    {
        name: "Neoclassicism",
        images: [
            "https://storage.googleapis.com/artifym/Styles/Neoclassicism/0.jpg",
            "https://storage.googleapis.com/artifym/Styles/Neoclassicism/1.jpg",
            "https://storage.googleapis.com/artifym/Styles/Neoclassicism/2.jpg",
            "https://storage.googleapis.com/artifym/Styles/Neoclassicism/3.jpg",
            "https://storage.googleapis.com/artifym/Styles/Neoclassicism/4.jpg",
        ],
    },
    {
        name: "Primitivism",
        images: [
            "https://storage.googleapis.com/artifym/Styles/Primitivism/0.jpg",
            "https://storage.googleapis.com/artifym/Styles/Primitivism/1.jpg",
            "https://storage.googleapis.com/artifym/Styles/Primitivism/2.jpg",
            "https://storage.googleapis.com/artifym/Styles/Primitivism/3.jpg",
            "https://storage.googleapis.com/artifym/Styles/Primitivism/4.jpg",
        ],
    },
    {
        name: "Realism",
        images: [
            "https://storage.googleapis.com/artifym/Styles/Realism/0.jpg",
            "https://storage.googleapis.com/artifym/Styles/Realism/1.jpg",
            "https://storage.googleapis.com/artifym/Styles/Realism/2.jpg",
            "https://storage.googleapis.com/artifym/Styles/Realism/3.jpg",
            "https://storage.googleapis.com/artifym/Styles/Realism/4.jpg",
        ],
    },
    {
        name: "Renaissance",
        images: [
            "https://storage.googleapis.com/artifym/Styles/Renaissance/0.jpg",
            "https://storage.googleapis.com/artifym/Styles/Renaissance/1.jpg",
            "https://storage.googleapis.com/artifym/Styles/Renaissance/2.jpg",
            "https://storage.googleapis.com/artifym/Styles/Renaissance/3.jpg",
            "https://storage.googleapis.com/artifym/Styles/Renaissance/4.jpg",
        ],
    },
    {
        name: "Rococo",
        images: [
            "https://storage.googleapis.com/artifym/Styles/Rococo/0.jpg",
            "https://storage.googleapis.com/artifym/Styles/Rococo/1.jpg",
            "https://storage.googleapis.com/artifym/Styles/Rococo/2.jpg",
            "https://storage.googleapis.com/artifym/Styles/Rococo/3.jpg",
            "https://storage.googleapis.com/artifym/Styles/Rococo/4.jpg",
        ],
    },
    {
        name: "Romanticism",
        images: [
            "https://storage.googleapis.com/artifym/Styles/Romanticism/0.jpg",
            "https://storage.googleapis.com/artifym/Styles/Romanticism/1.jpg",
            "https://storage.googleapis.com/artifym/Styles/Romanticism/2.jpg",
            "https://storage.googleapis.com/artifym/Styles/Romanticism/3.jpg",
            "https://storage.googleapis.com/artifym/Styles/Romanticism/4.jpg",
        ],
    },
    {
        name: "Symbolism",
        images: [
            "https://storage.googleapis.com/artifym/Styles/Symbolism/0.jpg",
            "https://storage.googleapis.com/artifym/Styles/Symbolism/1.jpg",
            "https://storage.googleapis.com/artifym/Styles/Symbolism/2.jpg",
            "https://storage.googleapis.com/artifym/Styles/Symbolism/3.jpg",
            "https://storage.googleapis.com/artifym/Styles/Symbolism/4.jpg",
        ],
    },
    {
        name: "Western_Medieval_Art",
        images: [
            "https://storage.googleapis.com/artifym/Styles/Western_Medieval/0.jpg",
            "https://storage.googleapis.com/artifym/Styles/Western_Medieval/1.jpg",
            "https://storage.googleapis.com/artifym/Styles/Western_Medieval/2.jpg",
            "https://storage.googleapis.com/artifym/Styles/Western_Medieval/3.jpg",
            "https://storage.googleapis.com/artifym/Styles/Western_Medieval/4.jpg",

        ],
    }
];

export const data_styles_local: StyleUrl[] = [
    {
        name: "Academic Art",
        images: [
            FileSystem.documentDirectory + "Styles/Academic_Art/0.jpg",
            FileSystem.documentDirectory + "Styles/Academic_Art/1.jpg",
            FileSystem.documentDirectory + "Styles/Academic_Art/2.jpg",
            FileSystem.documentDirectory + "Styles/Academic_Art/3.jpg",
            FileSystem.documentDirectory + "Styles/Academic_Art/4.jpg",
        ],
    },
    {
        name: "Art Nouveau",
        images: [
            FileSystem.documentDirectory + "Styles/Art_Nouveau/0.jpg",
            FileSystem.documentDirectory + "Styles/Art_Nouveau/1.jpg",
            FileSystem.documentDirectory + "Styles/Art_Nouveau/2.jpg",
            FileSystem.documentDirectory + "Styles/Art_Nouveau/3.jpg",
            FileSystem.documentDirectory + "Styles/Art_Nouveau/4.jpg",
        ],
    },
    {
        name: "Baroque",
        images: [
            FileSystem.documentDirectory + "Styles/Baroque/0.jpg",
            FileSystem.documentDirectory + "Styles/Baroque/1.jpg",
            FileSystem.documentDirectory + "Styles/Baroque/2.jpg",
            FileSystem.documentDirectory + "Styles/Baroque/3.jpg",
            FileSystem.documentDirectory + "Styles/Baroque/4.jpg",
        ],
    },
    {
        name: "Expressionism",
        images: [
            FileSystem.documentDirectory + "Styles/Expressionism/0.jpg",
            FileSystem.documentDirectory + "Styles/Expressionism/1.jpg",
            FileSystem.documentDirectory + "Styles/Expressionism/2.jpg",
            FileSystem.documentDirectory + "Styles/Expressionism/3.jpg",
            FileSystem.documentDirectory + "Styles/Expressionism/4.jpg",
        ],
    },
    {
        name: "Japanaese Art",
        images: [
            FileSystem.documentDirectory + "Styles/Japanese_Art/0.jpg",
            FileSystem.documentDirectory + "Styles/Japanese_Art/1.jpg",
            FileSystem.documentDirectory + "Styles/Japanese_Art/2.jpg",
            FileSystem.documentDirectory + "Styles/Japanese_Art/3.jpg",
            FileSystem.documentDirectory + "Styles/Japanese_Art/4.jpg",
        ],
    },
    {
        name: "Neo Classicism",
        images: [
            FileSystem.documentDirectory + "Styles/Neoclassicism/0.jpg",
            FileSystem.documentDirectory + "Styles/Neoclassicism/1.jpg",
            FileSystem.documentDirectory + "Styles/Neoclassicism/2.jpg",
            FileSystem.documentDirectory + "Styles/Neoclassicism/3.jpg",
            FileSystem.documentDirectory + "Styles/Neoclassicism/4.jpg",
        ],
    },
    {
        name: "Primitivism",
        images: [
            FileSystem.documentDirectory + "Styles/Primitivism/0.jpg",
            FileSystem.documentDirectory + "Styles/Primitivism/1.jpg",
            FileSystem.documentDirectory + "Styles/Primitivism/2.jpg",
            FileSystem.documentDirectory + "Styles/Primitivism/3.jpg",
            FileSystem.documentDirectory + "Styles/Primitivism/4.jpg",
        ],
    },
    {
        name: "Realism",
        images: [
            FileSystem.documentDirectory + "Styles/Realism/0.jpg",
            FileSystem.documentDirectory + "Styles/Realism/1.jpg",
            FileSystem.documentDirectory + "Styles/Realism/2.jpg",
            FileSystem.documentDirectory + "Styles/Realism/3.jpg",
            FileSystem.documentDirectory + "Styles/Realism/4.jpg",
        ],
    },
    {
        name: "Renaissance",
        images: [
            FileSystem.documentDirectory + "Styles/Renaissance/0.jpg",
            FileSystem.documentDirectory + "Styles/Renaissance/1.jpg",
            FileSystem.documentDirectory + "Styles/Renaissance/2.jpg",
            FileSystem.documentDirectory + "Styles/Renaissance/3.jpg",
            FileSystem.documentDirectory + "Styles/Renaissance/4.jpg",
        ],
    },
    {
        name: "Rococo",
        images: [
            FileSystem.documentDirectory + "Styles/Rococo/0.jpg",
            FileSystem.documentDirectory + "Styles/Rococo/1.jpg",
            FileSystem.documentDirectory + "Styles/Rococo/2.jpg",
            FileSystem.documentDirectory + "Styles/Rococo/3.jpg",
            FileSystem.documentDirectory + "Styles/Rococo/4.jpg",
        ],
    },
    {
        name: "Romanticism",
        images: [
            FileSystem.documentDirectory + "Styles/Romanticism/0.jpg",
            FileSystem.documentDirectory + "Styles/Romanticism/1.jpg",
            FileSystem.documentDirectory + "Styles/Romanticism/2.jpg",
            FileSystem.documentDirectory + "Styles/Romanticism/3.jpg",
            FileSystem.documentDirectory + "Styles/Romanticism/4.jpg",
        ],
    },
    {
        name: "Symbolism",
        images: [
            FileSystem.documentDirectory + "Styles/Symbolism/0.jpg",
            FileSystem.documentDirectory + "Styles/Symbolism/1.jpg",
            FileSystem.documentDirectory + "Styles/Symbolism/2.jpg",
            FileSystem.documentDirectory + "Styles/Symbolism/3.jpg",
            FileSystem.documentDirectory + "Styles/Symbolism/4.jpg",
        ],
    },
    {
        name: "Western Medieval Art",
        images: [
            FileSystem.documentDirectory + "Styles/Western_Medieval_Art/0.jpg",
            FileSystem.documentDirectory + "Styles/Western_Medieval_Art/1.jpg",
            FileSystem.documentDirectory + "Styles/Western_Medieval_Art/2.jpg",
            FileSystem.documentDirectory + "Styles/Western_Medieval_Art/3.jpg",
            FileSystem.documentDirectory + "Styles/Western_Medieval_Art/4.jpg",

        ],
    }
];
