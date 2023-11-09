console.log("--- Page 3 ---");

const tweetButton = document.querySelector('.bnt-tweet');
const tweetContainer = document.querySelector('.twitter-container');

tweetButton.addEventListener('click', function(){
    const userMessage = prompt('Vul uw tweet in');

    const tweet = createTweet(userMessage);
    tweetContainer.innerHTML += tweet;

});

/**
 * @description: Deze functie genereert een tweet bericht
 * @message: parameter om een tekstbericht mee te geven
 **/
function createTweet(message) {
	const tweetCard = `
        <div class="tweet">
            <div class="avatar">
                <img src="../images/female-avatar.svg" alt="avatar" srcset="" width="40" height="40">
            </div>
            <div class="message-box">
                <div class="message-content">${message}</div>
            </div>
        </div>
    `;

	return tweetCard;
}
