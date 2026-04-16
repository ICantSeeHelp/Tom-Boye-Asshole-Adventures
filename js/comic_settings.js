//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the main toggle-able settings are here.

//comic_archive has more settings pertaining to the archive page, and comic_show has settings pertaining to the main place that pages of your comic are displayed.

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 232; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files. 
//YOU MUST UPDATE THIS NUMBER EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// COMIC PAGE SETTINGS
const folder = "img/comics"; //directory of the folder where you keep all the comics
const image = "pg"; //what you'll name all your comic pages
const imgPart = "_" //special character(s) you put after the page number to subdivide pages into multiple image files (ie pg2_1, pg2_2, etc)
const ext = "png"; //file extension of your comic pages

//THUMBNAIL SETTINGS
const thumbFolder = "img/comics" //directory of the folder where you keep all the thumbnail images for the comics, in case you want the archive page to use thumbnails.
const thumbExt = "png" //file extension of thumbnails
const thumbDefault = "default" //name of the default thumbnail that displays when no thumbnail is set, located in the directory you set thumbFolder to.

//NAVIGATION SETTINGS
const navText = ["First","Previous","Next","Last"]; //alt text for your nav images, or just the text that shows up if you're not using images
const navFolder = "img/comicnav"; //directory where nav images are stored
const navExt = "png" //file extension of nav images
const navScrollTo = "#showComic"; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) {pg = maxpg;} //display MOST RECENT COMIC when the webpage is loaded. if you want to instead have the FIRST COMIC displayed first, change maxpg to 1.

//pgData holds all the parameters for each of your pages. copypaste this and fill out accordingly:
/* 
    {
        pgNum: ,
        title: "",
        date: writeDate([YEAR],[MONTH],[DAY]),
        altText: "",
        imageFiles: "",
        authorNotes: ``
    },
*/
//Note: the formatting is important! The whole thing won't show up if you forget to include the commas or curly braces in the right place.

const pgData = [
    {
        pgNum: 1, //what page number it is
        title: "1-1", //the title of the page (leaving this blank will default it to "Page X")
        date: writeDate(2025, 10, 19), //the date on which the page was posted (mainly for the archive). The date is written using a function called "writeDate", basically just put writeDate and then some parenthesis and, comma separated, the year followed by the month and the day. Don't forget another comma at the end outside the parenthesis!
        altText: "Here's some alt text!", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 1, //how many image files this page is split into
        authorNotes: ``,
    },
    {
        pgNum: 2,
        title: "1-2",
        date: writeDate(2025, 10, 19),
        altText: "Here's some more alt text!",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: 3,
        title: "1-3",
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: 4,
        title: "1-4",
        date: writeDate(2025, 10, 19),
        altText: "So much alt text...",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: 5,
        title: "1-5",
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            `,
    },
    {
        pgNum: 6,
        title: `1-6`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
     {
        pgNum: 7,
        title: `1-7`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
     {
        pgNum: 8,
        title: `1-8`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
     {
        pgNum: 9,
        title: `1-9`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
    {
        pgNum: 10,
        title: `1-10`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
    
    {
        pgNum: 11,
        title: `1-11`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
    
    {
        pgNum: 12,
        title: `1-12`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
    
    {
        pgNum: 13,
        title: `1-13`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
     {
        pgNum: 14,
        title: `1-14`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
     {
        pgNum: 15,
        title: `1-15`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
      {
        pgNum: 16,
        title: `1-16`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
      {
        pgNum: 17,
        title: `1-17`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
    
      {
        pgNum: 18,
        title: `1-18`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
    {
        pgNum: 19,
        title: `1-19`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
        {
        pgNum: 20,
        title: `1-20`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
        {
        pgNum: 21,
        title: `1-21`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
    
        {
        pgNum: 22,
        title: `1-22`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
    
        {
        pgNum: 23,
        title: `1-23`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
    
        {
        pgNum: 24,
        title: `1-24`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
    
        {
        pgNum: 25,
        title: `1-25`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
    
        {
        pgNum: 26,
        title: `1-26`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
         {
        pgNum: 27,
        title: `1-27`,
        date: writeDate(2025, 10, 19),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
    
         {
        pgNum: 28,
        title: `1-28`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
            <video title="oh fuck yes" width="1100px" controls > 
            <source src="img/end.mp4">
            </video>
            `,
    },
          {
        pgNum: 29,
        title: `2-1`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
            `,
    },
    
        {
        pgNum: 30,
        title: `2-2`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
         
            `,
    },
    
        {
        pgNum: 31,
        title: `2-3`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
         
            `,
    },
        {
        pgNum: 32,
        title: `2-4`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
         
            `,
    },
        {
        pgNum: 33,
        title: `2-5`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
         
            `,
    },
    
        {
        pgNum: 34,
        title: `2-6`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
         
            `,
    },
    
        {
        pgNum: 35,
        title: `2-7`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
         
            `,
    },
           {
        pgNum: 36,
        title: `2-8`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
         
            `,
    },
    
    
    
        {
        pgNum: 37,
        title: `2-9`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
            
            `,
    },
     {
        pgNum: 38,
        title: `2-10`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
     {
        pgNum: 39,
        title: `2-11`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
     {
        pgNum: 40,
        title: `2-12`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
     {
        pgNum: 41,
        title: `2-13`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },

     {
        pgNum: 42,
        title: `2-14`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
     {
        pgNum: 43,
        title: `2-15`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
      {
        pgNum: 44,
        title: `2-16`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum: 45,
        title: `2-17`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum: 46,
        title: `2-18`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum: 47,
        title: `2-19`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum: 48,
        title: `2-20`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum: 49,
        title: `2-21`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum: 50,
        title: `2-20`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum: 51,
        title: `2-21`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum: 52,
        title: `2-22`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum: 53,
        title: `2-23`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum: 54,
        title: `2-24`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum: 55,
        title: `2-25`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
      {
        pgNum: 56,
        title: `2-26`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
      {
        pgNum: 57,
        title: `2-27`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
      {
        pgNum: 58,
        title: `2-28`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
      {
        pgNum: 59,
        title: `2-29`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
      {
        pgNum: 60,
        title: `2-30`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
      {
        pgNum: 61,
        title: `2-31`,
        date: writeDate(2025, 10, 19),
        imageFiles: 1,
        authorNotes: `
             <video title="oh fuck yes" width="1100px" controls > 
            <source src="img/end2.mp4">
            </video>
            `,
    },
      {
        pgNum: 62,
        title: `3-1`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
      {
        pgNum: 63,
        title: `3-2`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 64,
        title: `3-3`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 65,
        title: `3-4`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
      {
        pgNum: 66,
        title: `3-5`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
      {
        pgNum: 67,
        title: `3-6`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum: 68,
        title: `3-7`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:69,
        title: `3-8`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:70,
        title: `3-9`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:71 ,
        title: `3-10`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:72 ,
        title: `3-11`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:73 ,
        title: `3-12`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:74 ,
        title: `3-13`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:75 ,
        title: `3-14`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:76 ,
        title: `3-15`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:77 ,
        title: `3-16`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:78 ,
        title: `3-17`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:79 ,
        title: `3-18`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:80 ,
        title: `3-19`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:81 ,
        title: `3-20`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:82 ,
        title: `3-21`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:83 ,
        title: `3-22`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:84 ,
        title: `3-23`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:85 ,
        title: `3-24`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:86 ,
        title: `3-25`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:87 ,
        title: `3-26`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:88 ,
        title: `3-27`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:89 ,
        title: `3-28`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
    
      {
        pgNum:90 ,
        title: `3-29`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum:91 ,
        title: `3-30`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
      {
        pgNum: 92,
        title: `3-31`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
       {
        pgNum: 93,
        title: `3-32`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
       {
        pgNum: 94 ,
        title: `3-33`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum:95 ,
        title: `3-34`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum:96 ,
        title: `3-35`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 97,
        title: `3-36`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum:98 ,
        title: `3-37`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum:99 ,
        title: `3-38`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 100,
        title: `3-39`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 101,
        title: `3-40`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 102,
        title: `3-41`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 103,
        title: `3-42`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 104,
        title: `3-43`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 105,
        title: `3-44`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 106,
        title: `3-45`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
       {
        pgNum: 107,
        title: `3-46`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 108,
        title: `3-47`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 109,
        title: `3-48`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
       {
        pgNum: 110,
        title: `3-49`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 111,
        title: `3-50`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 112,
        title: `3-51`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 113,
        title: `3-52`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 114,
        title: `3-53`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 115,
        title: `3-54`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 116,
        title: `3-55`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
       {
        pgNum: 117,
        title: `3-56`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
        {
        pgNum: 118,
        title: `3-57`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
        {
        pgNum: 119,
        title: `3-58`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
        {
        pgNum: 120,
        title: `3-59`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
        {
        pgNum: 121,
        title: `3-60`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             
            `,
    },
    
        {
        pgNum: 122,
        title: `3-61`,
        date: writeDate(2025, 10, 23),
        imageFiles: 1,
        authorNotes: `
             <video title="oh fuck yes" width="1100px" controls > 
            <source src="img/end3.mp4">
            </video>
            `,
    },
            {
        pgNum: 123,
        title: `4-1`,
        date: writeDate(2025, 12, 22),
        imageFiles: 1,
    },
    { pgNum:124, title:'4-2', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:125, title:'4-3', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:126, title:'4-4', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:127, title:'4-5', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:128, title:'4-6', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:129, title:'4-7', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:130, title:'4-8', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:131, title:'4-9', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:132, title:'4-10', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:133, title:'4-11', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:134, title:'4-12', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:135, title:'4-13', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:136, title:'4-14', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:137, title:'4-15', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:138, title:'4-16', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:139, title:'4-17', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:140, title:'4-18', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:141, title:'4-19', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:142, title:'4-20', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:143, title:'4-21', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:144, title:'4-22', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:145, title:'4-23', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:146, title:'4-24', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:147, title:'4-25', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:148, title:'4-26', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:149, title:'4-27', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:150, title:'4-28', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:151, title:'4-29', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:152, title:'4-30', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:153, title:'4-31', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:154, title:'4-32', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:155, title:'4-33', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:156, title:'4-34', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:157, title:'4-35', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:158, title:'4-36', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:159, title:'4-37', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:160, title:'4-38', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:161, title:'4-39', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:162, title:'4-40', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:163, title:'4-41', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:164, title:'4-42', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:165, title:'4-43', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:166, title:'4-44', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:167, title:'4-45', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:168, title:'4-46', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:169, title:'4-47', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:170, title:'4-48', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:171, title:'4-49', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:172, title:'4-50', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:173, title:'4-51', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:174, title:'4-52', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:175, title:'4-53', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:176, title:'4-54', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:177, title:'4-55', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:178, title:'4-56', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:179, title:'4-57', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:180, title:'4-58', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:181, title:'4-59', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:182, title:'4-60', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:183, title:'4-61', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:184, title:'4-62', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:185, title:'4-63', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '<video title="oh fuck yes" width="1100px" controls > <source src="img/end4.mp4"> </video>',},
{ pgNum:186, title:'5-1', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:187, title:'5-2', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:188, title:'5-3', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:189, title:'5-4', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:190, title:'5-5', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:191, title:'5-6', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:192, title:'5-7', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:193, title:'5-8', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:194, title:'5-9', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:195, title:'5-10', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:196, title:'5-11', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:197, title:'5-12', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:198, title:'5-13', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:199, title:'5-14', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:200, title:'5-15', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:201, title:'5-16', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:202, title:'5-17', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:203, title:'5-18', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:204, title:'5-19', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:205, title:'5-20', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:206, title:'5-21', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:207, title:'5-22', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:208, title:'5-23', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:209, title:'5-24', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:210, title:'5-25', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:211, title:'5-26', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:212, title:'5-27', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:213, title:'5-28', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:214, title:'5-29', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:215, title:'5-30', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:216, title:'5-31', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:217, title:'5-32', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:218, title:'5-33', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:219, title:'5-34', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:220, title:'5-35', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:221, title:'5-36', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:222, title:'5-37', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:223, title:'5-38', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:224, title:'5-39', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:225, title:'5-40', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:226, title:'5-41', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:227, title:'5-42', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:228, title:'5-43', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:229, title:'5-44', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:230, title:'5-45', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:231, title:'5-46', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '',},
{ pgNum:232, title:'5-47', date: writeDate(2025, 12, 22),imageFiles:1,authorNotes: '<video title="oh fuck yes" width="1100px" controls > <source src="img/end5.mp4"> </video>',},

    
    
];

//below is a function you dont rly need to mess with but if you're more experienced with js you can

function findGetParameter(parameterName) { //function used to write a parameter to append to the url, to give each comic page its own unique url
    let result = null,
    tmp = []; 
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function writeDate(year,month,day) { //write date of comic page
    const date = new Date(year,month-1,day)
    .toDateString() //format date as Day Month Date Year
    .toString() //convert it to a string
    .slice(4) //remove the Day
    return date
}
