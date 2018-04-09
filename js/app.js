var model = {
			currentVillain : "null",
			villains :[
				{			
					clickCount : 0,
					name : "Joker",
					imgSrc : "https://upload.wikimedia.org/wikipedia/en/9/98/Joker_%28DC_Comics_character%29.jpg",
					imgAtrribution: 'Wikipedia'
				}, 
				{	
					clickCount : 0,
					name : "Bane",
					imgSrc : "https://upload.wikimedia.org/wikipedia/en/e/e1/Bane_Batman_Vol_3_18.png",
					imgAtrribution: 'Wikipedia'
				},
				{
					clickCount : 0,
					name : "Two-Face",
					imgSrc : "https://upload.wikimedia.org/wikipedia/en/7/78/Two-Face.jpg",
					imgAtrribution: 'Wikipedia'
				},
				{
					clickCount : 0,
					name : "Poison Ivy",
					imgSrc : "https://upload.wikimedia.org/wikipedia/en/5/5c/Poison_Ivy_Batman_Vol_3_26.png",
					imgAtrribution: 'Wikipedia'
				},
				{
					clickCount : 0,
					name : "Riddler",
					imgSrc : "https://upload.wikimedia.org/wikipedia/en/1/1b/RiddlerGA.JPG",
					imgAtrribution: 'Wikipedia'
				}
			]
		};
		
		var connector = {

    init: function() {
        model.currentVillain = model.villains[0];

        villainListView.init();
        villainView.init();
    },

    getCurrentVillain: function() {
        return model.currentVillain;
    },

    getVillains: function() {
        return model.villains;
    },

    setCurrentVillain: function(villain) {
        model.currentVillain = villain;
    },

    incrementCounter: function() {
        model.currentVillain.clickCount++;
        villainView.render();
    }
};


var villainView = {

    init: function() {
        this.villainElem = document.getElementById('villain');
        this.villainNameElem = document.getElementById('villain-name');
        this.villainImageElem = document.getElementById('villain-img');
        this.countElem = document.getElementById('villain-count');

        this.villainImageElem.addEventListener('click', function(){
            connector.incrementCounter();
        });

        this.render();
    },

    render: function() {
        var currentVillain = connector.getCurrentVillain();
        this.countElem.textContent = currentVillain.clickCount;
        this.villainNameElem.textContent = currentVillain.name;
        this.villainImageElem.src = currentVillain.imgSrc;
    }
};

var villainListView = {

    init: function() {
        this.villainListElem = document.getElementById('villain-list');

        this.render();
    },

    render: function() {
        var villain, elem, i;
        var villains = connector.getVillains();

        this.villainListElem.innerHTML = '';

        for (i = 0; i < villains.length; i++) {
            villain = villains[i];
			
            elem = document.createElement('li');
            elem.textContent = villain.name;

            elem.addEventListener('click', (function(villainCopy) {
                return function() {
                    connector.setCurrentVillain(villainCopy);
                    villainView.render();
                };
            })(villain));

            this.villainListElem.appendChild(elem);
        }
    }
};

connector.init();
	
		
