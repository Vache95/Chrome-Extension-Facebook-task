const body = document.querySelector('[role="feed"]');
const create = document.createElement('div')
const createspan = document.createElement('span')

 createspan.textContent = `
 Ladyship it daughter securing procured or am moreover mr. Put sir she exercise vicinity cheerful wondered.
  Continual say suspicion provision you neglected sir curiosity unwilling. Simplicity end themselves increasing
   led day sympathize yet. General windows effects not are drawing man garrets. Common indeed garden you his ladies out yet.
    Preference imprudence contrasted to remarkably in on. Taken now you him trees tears any. Her object giving end sister 
    except oppose. 
 `;

 create.prepend(createspan);
 createspan.classList.add('word');
 create.classList.add('word1');
 body.prepend(create);

