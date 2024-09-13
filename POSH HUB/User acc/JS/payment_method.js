function swapPositionsAndRedirect(url) {
    const onlinePayment = document.getElementById('online-payment');
    const overCounter = document.getElementById('over-counter');

    // Perform the swapping animation
    if (onlinePayment.classList.contains('swap-right')) {
        onlinePayment.classList.remove('swap-right');
        overCounter.classList.remove('swap-left');
    } else {
        onlinePayment.classList.add('swap-right');
        overCounter.classList.add('swap-left');
    }

    // Redirect after a short delay to allow animation to play
    setTimeout(function() {
        window.location.href = url;
    }, 600); // Adjust delay (in milliseconds) as needed
}
