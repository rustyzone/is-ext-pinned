

//Check if pinned and update h1
async function checkIsPinned(){
  let userSettings = await chrome.action.getUserSettings();
  if(userSettings.isOnToolbar == true){
    document.querySelector('h1 span').innerText = 'Yes';
  }else{
    document.querySelector('h1 span').innerText = 'No :(';
  }
}

//Run on load
checkIsPinned();



//If new tab or another type of extension you could then have a button to check again
/*
document.querySelector('button').addEventListener('click', function(){
  checkIsPinned();
});
*/
