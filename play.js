window.onload = function () {
  setTimeout(() => {
    const response = confirm(
      "happy friendship day! would you like to go to a special page ?"
    );
    if (response) {
      func();
    }
  }, 1000);
};


function func() {
  window.location.href = "friend.html";

}