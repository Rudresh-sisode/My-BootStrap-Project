var tour = new Tour();
tour.addSteps(
[
        {
            element: '#col-1',
            placement: 'bottom',
            title: 'Live classes',
            content: 'Classes are interactive<br><input type="text" id="name">',
            onNext:function()
            {
                name=$('#name').val();
                console.log("next pressed");
            }
    },
        {
            element: '#col-2',
            placement: 'bottom',
            title: 'Flexible schedule',
            content: 'Classes are interactive',
            content:function(){
                return name+' you can transfer batches in betwwen';
            }
    },
        {
            element: '#col-3',
            placement: 'bottom',
            title: 'Any time access',
            content: 'Classes are interactive'
    },
        {
            orphan: true,
            title:'thanku you',
            backdrop:true,
            placement:'top',
            content:'thank you for visit'
    }

]);
tour.init();
tour.start();
