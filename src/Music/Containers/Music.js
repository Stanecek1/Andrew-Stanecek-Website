import '../../App.css';

function Music () {

    fetch('https://api.zippopotam.us/us/33162').then(res => {
        return res.json();

    }).then(i => {
        console.log(i.country)
    })

    return (
        <div class="flex-container">
            <div class="flex-child magenta">
                <div class="flex-container">
                    <div class="flex-container">
                    <h1>Monday</h1>
                    </div>
                    <div class="flex-container">
                    <h1>Monday</h1>
                    </div>
                </div>

                
                <img src="http://openweathermap.org/img/wn/10d@2x.png"></img>
            </div>
            
            <div class="flex-child green">
                Flex Column 2
            </div>

            <div class="flex-child green">
                Flex Column 2
            </div>
        </div>
    );
}

export default Music;