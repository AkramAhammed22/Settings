import { title } from "process";

export const handleSelect = (value) => {
  console.log("Selected option:", value);
};

export const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export const Display = [
  { id: 1, name: "Quiz name" },
  { id: 1, name: "Page titles" },
  { id: 1, name: "Quizzer.AI link" },
  { id: 1, name: "Progress bar" },
  { id: 1, name: "Page number bar" },
  { id: 1, name: "Logo" },
];

export const Saveandcontinuelater = [
  { id: 1, name: "Allow save and continue" },
  { id: 1, name: "Email quiz link" },
];

export const data3 = [
  { id: 1, name: "From", img: "/date.svg" },
  { id: 1, img: "/time.svg" },
];
export const data6 = [
  { id: 1, name: "To", img: "/date.svg" },
  { id: 1, img: "/time.svg" },
];

export const Allowedit = [
  { id: 1, name: "Cut" },
  { id: 1, name: "Copy" },
  { id: 1, name: "Paste" },
  { id: 1, name: "Right mouse click menu" },
  { id: 1, name: "Print" },
];

export const Confirmbefore = [
  { id: 1, name: "Submit" },
  { id: 1, name: "Close browser tab" },
]; 



export const Questionnavigation = [
  {
    id: 1,
    title:"Question layout",
    paragraph:"Options can be positioned under the question text (Vertical) or to the right of the question text (Horizontal).On devices with a smaller screen size, such as mobiles, the questions will always be shown with a Vertical layout",
  },
  {
    id: 1,
    title:"Navigation bar position",
    paragraph:"The navigation buttons can be positioned to display at the end of the page (Inline) or fixed to the bottom of the screen (Fixed)."
  }
];
