// Local Review data
const reviews = [
    {
        id: 1,
        name: 'John Cena',
        job: 'unknown',
        img: "https://static.wikia.nocookie.net/monster/images/9/97/The_Invisible_Man.jpeg/revision/latest?cb=20200829182545",
        text: "This place is insane! I walked in and they greeted me without asking whre I was. It was almost like they could see me! ... Wait, THEY COULD SEE ME!!",
    },

       {
        id: 2,
        name: 'Matthew McConaughey',
        job: 'Actor',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPpVlauxs3gIWsOEWgxcyWg1YSus54RPsLY7XQ6Q8boAX3PCtp",
        text: "This place was pretty good. I'd give it a 4/5 stars. their business is alright alright alright",
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    
];
//select items
const img = document.getElementById('cover-photo');
const author = document.getElementById('name');
const title = document.getElementById('title');
const review = document.getElementById('review');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const randBtn = document.querySelector('.surprise');

//set starting item
let currentItem = 0;

    //load initial Item
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem)
    
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    title.textContent = item.job;
    review.textContent = item.text;
  }

  prevBtn.addEventListener('click', function (){
      if (currentItem == 0){ 
        currentItem = reviews.length-1;
        showPerson(currentItem);

      } else {
        currentItem --;
        showPerson(currentItem);
      }
  })

  nextBtn.addEventListener('click', function (){
    if (curerntItem = reviews.length-1){
      currentItem = 0;
      showPerson(currentItem)

    }else {
       currentItem++;
       showPerson(currentItem)
    }
})