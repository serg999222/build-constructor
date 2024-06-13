function setLayer1Height() {
   var viewConstuctOuts = document.querySelectorAll('.view_constuct_out');
   viewConstuctOuts.forEach(item => {
      layer1 = item.querySelector('.layer1')
      item.style.height = layer1.offsetHeight + 'px';
   })
}

function setDecorBlockWodth() {
   let nav_construct__nav = document.querySelector('.nav_construct__nav');
   let decorBlock = document.querySelector('.decor_right_block');
   if (decorBlock && nav_construct__nav) {
      decorBlock.style.width = nav_construct__nav.offsetWidth + 'px';
   }

}
document.addEventListener("DOMContentLoaded", setDecorBlockWodth);
document.addEventListener("DOMContentLoaded", setLayer1Height);
window.addEventListener("resize", setLayer1Height);
window.addEventListener("resize", setDecorBlockWodth);



let steps = document.querySelectorAll('.step');
steps.forEach(step => {
   step.addEventListener('click', () => {
      let number = step.textContent;
      let formsteps = document.querySelectorAll('.details_punkt')

      formsteps.forEach(formstep => {

         if (formstep.classList.contains('details_punkt' + number)) {
            formstep.style.display = 'block';
         } else {
            formstep.style.display = 'none';
         }

         // Update active step class
         steps.forEach(s => s.classList.remove('active'));
         step.classList.add('active');
      })
   })
})


document.addEventListener('DOMContentLoaded', () => {
   document.querySelectorAll('.prev').forEach(butt => {
      butt.addEventListener('click', (e) => {
         e.preventDefault();
         prevStep();
      })
   })
})


function prevStep() {
   let steps = document.querySelectorAll('.step');
   let current_step_num = 1;
   let formsteps = document.querySelectorAll('.details_punkt')

   steps.forEach((step, index) => {
      if (step.classList.contains('active')) {
         current_step_num = index;
         if (current_step_num === 0) {
            return;
         } else {
            steps[current_step_num - 1].classList.add('active');
            step.classList.remove('active');
            formsteps[current_step_num].style.display = 'none';
            formsteps[current_step_num - 1].style.display = 'block';

         }
      }
   });

}



document.addEventListener('DOMContentLoaded', () => {
   document.querySelectorAll('.next').forEach(butt => {
      butt.addEventListener('click', (e) => {
         e.preventDefault();
         nextStep();
      })
   })
})

function nextStep() {
   let steps = document.querySelectorAll('.step');
   let formsteps = document.querySelectorAll('.details_punkt');

   for (let index = 0; index < steps.length; index++) {
      let step = steps[index];
      if (step.classList.contains('active')) {
         let current_step_num = index;
         if (current_step_num === steps.length - 1) {
            return;
         } else {
            steps[current_step_num + 1].classList.add('active');
            step.classList.remove('active');
            formsteps[current_step_num].style.display = 'none';
            formsteps[current_step_num + 1].style.display = 'block';
            break;
         }
      }
   }
}


document.addEventListener('DOMContentLoaded', () => {
   let details_punkt2__type_wraps = document.querySelectorAll('.details_punkt2__type_wrap');

   details_punkt2__type_wraps.forEach(details_punkt2__type_wrap => {
      details_punkt2__type_wrap.querySelectorAll('.details_punkt_article_wrapp').forEach(details_punkt_article_wrapp => {
         details_punkt_article_wrapp.addEventListener('click', () => {
            // Зняти атрибут checked з усіх input і прибрати клас selected з усіх article
            details_punkt2__type_wrap.querySelectorAll('input').forEach(input => {
               input.removeAttribute('checked');
            });
            details_punkt2__type_wrap.querySelectorAll('article').forEach(article => {
               article.classList.remove('selected');
            });

            // Встановити атрибут checked на вибраний input і додати клас selected до вибраного article
            let input = details_punkt_article_wrapp.querySelector('input');
            let article = details_punkt_article_wrapp.querySelector('article');
            input.setAttribute('checked', true)
            article.classList.add('selected');
         });
      });
   });
});

document.addEventListener('DOMContentLoaded', () => {
   let details_punkt2__type_wraps = document.querySelectorAll('.details_punkt2__color_wrap');

   details_punkt2__type_wraps.forEach(details_punkt2__type_wrap => {
      details_punkt2__type_wrap.querySelectorAll('.details_punkt_article_wrapp').forEach(details_punkt_article_wrapp => {
         details_punkt_article_wrapp.addEventListener('click', () => {
            // Зняти атрибут checked з усіх input і прибрати клас selected з усіх article
            details_punkt2__type_wrap.querySelectorAll('input').forEach(input => {
               input.removeAttribute('checked');
            });
            details_punkt2__type_wrap.querySelectorAll('article').forEach(article => {
               article.classList.remove('selected');
            });

            // Встановити атрибут checked на вибраний input і додати клас selected до вибраного article
            let input = details_punkt_article_wrapp.querySelector('input');
            let article = details_punkt_article_wrapp.querySelector('article');
            input.setAttribute('checked', true)
            article.classList.add('selected');
         });
      });
   });
});






