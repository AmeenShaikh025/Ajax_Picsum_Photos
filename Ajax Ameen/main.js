//console.log('Hi');

$(document).ready(function() {
	//alert('Hi');
	$.ajax({
		url: 'https://picsum.photos/v2/list?page=2&limit=100',
		type: 'GET',
	  	dataType: 'json',
		success: function(data) {
			console.log(data);
			
			/* Working

			$('.img-album').attr('src', data[0].download_url);
			$('.img-album').attr('width', '100%');
			$('.img-album').attr('height', '225px');*/

			console.log(data.length);

			for(i=0; i < data.length; i++ ) {
				let colDiv = document.createElement('div');
				colDiv.className = 'col-md-4';

				let card = document.createElement('div');
				card.classList.add('mb-4', 'shadow-sm');
				colDiv.appendChild(card);


				let imgGot = document.createElement('img');
				imgGot.src = data[i].download_url;
				imgGot.style.width = '100%';
				imgGot.style.height = '225px';
				card.appendChild(imgGot);

				let cardBody = document.createElement('div');
				cardBody.className = 'card-body';
				card.appendChild(cardBody);

				let cardText = document.createElement('p');
				cardText.className = 'card-text';
				cardText.textContent = data[i].author;
				cardBody.appendChild(cardText);


				let divBtns = document.createElement('div');
				divBtns.classList.add('d-flex', 'justify-content-between', 'align-items-center');
				cardBody.appendChild(divBtns);

				let btnGrp = document.createElement('div');	
				btnGrp.className = 'btn-group';
				divBtns.appendChild(btnGrp);

				let firstBtn = document.createElement('button');		
				firstBtn.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
				firstBtn.textContent = 'View';
				btnGrp.appendChild(firstBtn);

				let secondBtn = document.createElement('button');	
				secondBtn.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
				secondBtn.textContent = 'Edit';
				btnGrp.appendChild(secondBtn);

				let small = document.createElement('small');
				small.classList.add('text-muted');
				small.textContent = `${i} mins`;
				divBtns.appendChild(small);

				/*Append colDiv to a div*/
				/*let addDiv =document.getElementsByClassName('dynamic-data');
				console.log(colDiv);
				addDiv.appendChild(colDiv);*/
				$('.dynamic-data').append(colDiv);
			}

		}
	});
});


/*
	<div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img class="img-album" src="">
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

*/