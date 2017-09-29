import axios from 'axios';

//functions from content files
import { fetchRandomQuote, getCorrectAns, getIncorrectAns } from './content/trivia'
import { getRandomTitle } from './content/titles'
import { getRandomDeath } from './content/deaths'
import { getChosenHouseUrl, getChosenHouseData } from './content/housedata.js'
//check to make sure that functions are properly wired through services file to front pages!

//links to APIs
const quotesLink = "https://got-quotes.herokuapp.com/quotes";
const apiLink = "https://www.anapioficeandfire.com/api/";
